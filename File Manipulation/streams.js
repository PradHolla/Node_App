const fs = require('fs');

const readStream = fs.createReadStream('./docs/text.txt', 'utf8');
const writeStream = fs.createWriteStream('./docs/textt.txt');

// readStream.on('data', (chunk) => {
//     console.log('----NEW DATA----');
//     console.log(chunk);
//     writeStream.write('\nCHUNK\n');
//     writeStream.write(chunk);
//     });

readStream.pipe(writeStream);