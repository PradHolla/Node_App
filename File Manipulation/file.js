const fs = require('fs');

// Read file
fs.readFile('./docs/text.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
    });

// Write file
fs.writeFile('./docs/textt.txt', 'Hello World', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File written successfully');
});

// Create Dir
if (!fs.existsSync('./newDir')){
    fs.mkdir('./newdir', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Directory created successfully');
    });
} else {
    fs.rmdir('./newdir', (err) => {
        
        if (err) {
            console.log(err);
        }
        console.log('Directory deleted successfully');
    })
}
// Delete Files
if (fs.existsSync('./docs/textt.txt')) {
    fs.unlink('./docs/textt.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File deleted successfully');
    });
}