import { SITE } from '@/data/siteData';

export const metadata = {
  title: 'Datenschutzerklärung',
  description:
    'Datenschutzerklärung der Hausarztpraxis Zürich Altstetten – Informationen zum Schutz Ihrer persönlichen Daten gemäss dem schweizerischen Datenschutzgesetz (DSG).',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://praxis-altstetten.ch/datenschutz',
  },
};

export default function Datenschutz() {
  return (
    <div className="legalPage">
      <style>{`
        .legalPage { font-family: var(--f-body); color: var(--text); background: var(--warm-white); min-height: 100vh; }
        .legalHero { background: linear-gradient(135deg, var(--navy), var(--navy-dark)); padding: clamp(36px, 6vw, 48px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 44px); text-align: center; }
        .legalHero h1 { font-family: var(--f-head); font-size: clamp(24px, 4.5vw, 40px); font-weight: 700; color: white; margin-bottom: 8px; }
        .legalHero p { color: rgba(255,255,255,.6); font-size: clamp(13px, 2vw, 15px); }
        .legalBack { display: inline-flex; align-items: center; gap: 6px; color: #1293ca; font-size: 14px; font-weight: 600; text-decoration: none; margin-bottom: 20px; transition: opacity .2s; }
        .legalBack:hover { opacity: .7; }
        .legalBody { max-width: 760px; margin: 0 auto; padding: clamp(32px, 5vw, 48px) clamp(16px, 4vw, 24px) clamp(48px, 8vw, 80px); }
        .legalBody h2 { font-family: var(--f-head); font-size: clamp(19px, 3vw, 22px); font-weight: 700; color: var(--navy); margin: 36px 0 14px; }
        .legalBody h2:first-child { margin-top: 0; }
        .legalBody h3 { font-family: var(--f-head); font-size: clamp(15.5px, 2.5vw, 17px); font-weight: 600; color: var(--navy); margin: 24px 0 10px; }
        .legalBody p, .legalBody li { font-size: 15px; line-height: 1.85; color: var(--text-light); margin-bottom: 14px; overflow-wrap: break-word; }
        .legalBody ul { padding-left: 20px; margin-bottom: 16px; }
        .legalBody li { margin-bottom: 6px; }
        .legalBody a { color: #1293ca; text-decoration: underline; word-break: break-all; }
      `}</style>

      <div className="legalHero">
        <a href="/" className="legalBack">← Zurück zur Startseite</a>
        <h1>Datenschutzerklärung</h1>
        <p>Informationen zum Schutz Ihrer Personendaten</p>
      </div>

      <div className="legalBody">
        <h2>1. Allgemein</h2>
        <p>Die Hausarztpraxis Zürich Altstetten, {SITE.address}, nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der schweizerischen Datenschutzgesetzgebung (DSG) sowie dieser Datenschutzerklärung.</p>
        <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unserer Website auf.</p>

        <h2>2. Verantwortliche Stelle</h2>
        <p>Hausarztpraxis Zürich Altstetten<br />
        {SITE.addressStreet}<br />
        {SITE.addressCity}<br />
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
        Telefon: {SITE.phone}</p>

        <h2>3. Erhebung und Verarbeitung von Daten</h2>
        <h3>3.1 Beim Besuch der Website</h3>
        <p>Beim Aufrufen unserer Website werden durch den Browser automatisch Informationen an den Server übermittelt. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei erfasst:</p>
        <ul>
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Verwendeter Browser und ggf. Betriebssystem</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
        </ul>
        <p>Diese Daten werden ausschliesslich zur Sicherstellung eines störungsfreien Betriebs der Website sowie zur Verbesserung unseres Angebots ausgewertet und erlauben uns keinen Rückschluss auf Ihre Person.</p>

        <h3>3.2 Bei Terminbuchung</h3>
        <p>Für die Online-Terminbuchung nutzen wir den Dienst arzt-direkt.de. Bei der Buchung eines Termins werden personenbezogene Daten wie Name, Geburtsdatum und Kontaktdaten direkt an diesen Dienst übermittelt. Es gelten die Datenschutzbestimmungen von arzt-direkt.de.</p>

        <h3>3.3 Bei Kontaktaufnahme</h3>
        <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden die von Ihnen mitgeteilten Daten (z.B. Name, E-Mail-Adresse, Anfrage) zur Bearbeitung Ihres Anliegens gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

        <h2>4. Ärztliche Schweigepflicht</h2>
        <p>Als Arztpraxis unterliegen wir der ärztlichen Schweigepflicht gemäss Art. 321 StGB. Alle medizinischen Daten und Patienteninformationen werden streng vertraulich behandelt und nur im Rahmen der Behandlung und mit Ihrer ausdrücklichen Einwilligung an Dritte (z.B. Labore, Spezialisten) weitergegeben.</p>

        <h2>5. Cookies</h2>
        <p>Unsere Website verwendet teilweise sogenannte Cookies. Cookies richten keinen Schaden auf Ihrem Rechner an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher und effektiver zu gestalten. Weitere Informationen finden Sie in unserer <a href="/cookies">Cookie-Richtlinie</a>.</p>

        <h2>6. Google Maps</h2>
        <p>Auf unserer Website verwenden wir Google Maps zur Darstellung unseres Standorts. Bei der Nutzung von Google Maps werden Daten an Google LLC übertragen. Es gelten die Datenschutzbestimmungen von Google.</p>

        <h2>7. Externe Links</h2>
        <p>Unsere Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss und übernehmen keine Verantwortung. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.</p>

        <h2>8. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht:</p>
        <ul>
          <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
          <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
          <li>Die Löschung Ihrer Daten zu verlangen</li>
          <li>Die Einschränkung der Verarbeitung zu verlangen</li>
          <li>Widerspruch gegen die Verarbeitung einzulegen</li>
        </ul>
        <p>Für Auskünfte oder Anfragen zum Datenschutz wenden Sie sich bitte an:<br />
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>

        <h2>9. Änderungen</h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu aktualisieren. Die aktuelle Version ist auf unserer Website verfügbar.</p>

        <p style={{ marginTop: 36, fontSize: 13, color: 'rgba(0,0,0,.35)' }}>Stand: Mai 2025</p>
      </div>
    </div>
  );
}
