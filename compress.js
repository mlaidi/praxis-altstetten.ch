#!/usr/bin/env node

/**
 * compress.js — Script de compression d'images JPG/JPEG
 *
 * Utilise la bibliothèque sharp pour :
 *  1. Scanner récursivement un dossier d'images
 *  2. Redimensionner les images dont une dimension dépasse MAX_WIDTH (1920px)
 *  3. Compresser en JPEG qualité 78 avec optimisations Mozjpeg
 *  4. Écraser le fichier original (même nom, même format)
 *
 * Usage : node compress.js [dossier]
 *   Par défaut le dossier scanné est ./public
 */

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// ─── Configuration ───────────────────────────────────────────
const DEFAULT_DIR = "./public";
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;
const JPEG_QUALITY = 78; // 75-80 est le sweet spot qualité/poids
// ─────────────────────────────────────────────────────────────

/**
 * Récupère récursivement tous les fichiers .jpg/.jpeg d'un dossier
 */
function getJpegFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getJpegFiles(fullPath));
    } else if (/\.(jpe?g)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }

  return results;
}

/**
 * Formate une taille en bytes vers une chaîne lisible (Ko, Mo)
 */
function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} Mo`;
}

async function compressImage(filePath) {
  const originalSize = fs.statSync(filePath).size;

  // Lire l'image dans un buffer pour éviter les conflits lecture/écriture
  const inputBuffer = fs.readFileSync(filePath);

  // Récupérer les métadonnées pour savoir si un resize est nécessaire
  const metadata = await sharp(inputBuffer).metadata();
  const { width, height } = metadata;

  let pipeline = sharp(inputBuffer);

  // Redimensionner uniquement si une dimension dépasse le max
  if (width > MAX_WIDTH || height > MAX_HEIGHT) {
    pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
      fit: "inside", // Garde le ratio, réduit pour tenir dans la boîte
      withoutEnlargement: true, // Ne jamais agrandir une image
    });
  }

  // Compresser en JPEG avec optimisations Mozjpeg
  const outputBuffer = await pipeline
    .jpeg({
      quality: JPEG_QUALITY,
      mozjpeg: true, // Active les optimisations Mozjpeg (meilleure compression)
      chromaSubsampling: "4:2:0", // Standard web, bon compromis
    })
    .toBuffer();

  const newSize = outputBuffer.length;

  // N'écraser que si le fichier est effectivement plus petit
  if (newSize < originalSize) {
    fs.writeFileSync(filePath, outputBuffer);
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    const dimensions =
      width > MAX_WIDTH || height > MAX_HEIGHT
        ? ` [redimensionné: ${width}x${height} → max ${MAX_WIDTH}px]`
        : "";
    return {
      status: "compressed",
      originalSize,
      newSize,
      savings,
      dimensions,
    };
  } else {
    return {
      status: "skipped",
      originalSize,
      newSize,
      reason: "déjà optimisée",
    };
  }
}

async function main() {
  const targetDir = process.argv[2] || DEFAULT_DIR;
  const absoluteDir = path.resolve(targetDir);

  if (!fs.existsSync(absoluteDir)) {
    console.error(`❌ Le dossier "${absoluteDir}" n'existe pas.`);
    process.exit(1);
  }

  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║       🖼️  Compression d'images JPG/JPEG         ║");
  console.log("╚══════════════════════════════════════════════════╝");
  console.log();
  console.log(`📂 Dossier scanné : ${absoluteDir}`);
  console.log(`⚙️  Qualité JPEG  : ${JPEG_QUALITY}%`);
  console.log(`📐 Dimensions max: ${MAX_WIDTH}x${MAX_HEIGHT}px`);
  console.log();

  const files = getJpegFiles(absoluteDir);

  if (files.length === 0) {
    console.log("⚠️  Aucune image .jpg/.jpeg trouvée.");
    return;
  }

  console.log(`🔍 ${files.length} image(s) trouvée(s)\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let compressedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const relativePath = path.relative(absoluteDir, file);
    process.stdout.write(`  ⏳ ${relativePath} ... `);

    try {
      const result = await compressImage(file);

      if (result.status === "compressed") {
        compressedCount++;
        totalOriginal += result.originalSize;
        totalNew += result.newSize;
        console.log(
          `✅ ${formatSize(result.originalSize)} → ${formatSize(result.newSize)} (-${result.savings}%)${result.dimensions}`
        );
      } else {
        skippedCount++;
        totalOriginal += result.originalSize;
        totalNew += result.originalSize;
        console.log(`⏭️  Ignorée (${result.reason})`);
      }
    } catch (err) {
      console.log(`❌ Erreur: ${err.message}`);
    }
  }

  // Résumé final
  console.log();
  console.log("─".repeat(52));
  console.log("📊 Résumé :");
  console.log(`   Images compressées : ${compressedCount}/${files.length}`);
  console.log(`   Images ignorées    : ${skippedCount}`);
  if (totalOriginal > 0) {
    const totalSavings = (
      (1 - totalNew / totalOriginal) *
      100
    ).toFixed(1);
    console.log(
      `   Taille totale      : ${formatSize(totalOriginal)} → ${formatSize(totalNew)}`
    );
    console.log(`   Gain total         : ${formatSize(totalOriginal - totalNew)} (-${totalSavings}%)`);
  }
  console.log("─".repeat(52));
  console.log("✨ Terminé !");
}

main().catch((err) => {
  console.error("Erreur fatale :", err);
  process.exit(1);
});
