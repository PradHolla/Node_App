const htttp = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = htttp.createServer((req, res) => {
    // Lodash
    const num = _.random(1, 100);
    console.log(num);
    
    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>Hello World</h1>');
    // res.end();
    let path = './templates';
    switch (req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, content) => {
        if (err) {
            console.log(err);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>ERROR</h1>');
        } else {
            // res.write(content);
            res.end(content);
        }
    })
});
server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
});