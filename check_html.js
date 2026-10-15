const http = require('http');

http.get('http://localhost:3003', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const head = data.match(/<head>([\s\S]*?)<\/head>/);
    if (head) {
      console.log('--- HEAD CONTENT ---');
      const links = head[1].match(/<link[^>]*>/g) || [];
      const scripts = head[1].match(/<script[^>]*>/g) || [];
      console.log('Links:');
      links.forEach(l => console.log('  ', l));
      console.log('Scripts:');
      scripts.forEach(s => console.log('  ', s));
    } else {
      console.log('No <head> found');
    }
  });
}).on('error', err => console.error(err));
