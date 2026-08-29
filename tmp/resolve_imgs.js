const https = require('https');

const urls = [
  'https://postimg.cc/0zFPZT89',
  'https://postimg.cc/Bjk4Nrqq',
  'https://postimg.cc/jDmtvpst',
  'https://postimg.cc/LJw2vcHp',
  'https://postimg.cc/fVpD5Gwn',
  'https://postimg.cc/TKFfQzRX',
  'https://postimg.cc/LJw2vcHF',
  'https://postimg.cc/rD3MgBqB'
];

async function fetchUrl(url, i) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const match = data.match(/https:\/\/i\.postimg\.cc\/[^\s"'<>]+/);
        console.log(`[${i}] ${url} => ${match ? match[0] : 'not found'}`);
        resolve({ index: i, page: url, direct: match ? match[0] : null });
      });
    }).on('error', (err) => {
      console.error(i, err.message);
      resolve({ index: i, page: url, direct: null });
    });
  });
}

Promise.all(urls.map((u, i) => fetchUrl(u, i))).then((results) => {
  console.log(JSON.stringify(results, null, 2));
});
