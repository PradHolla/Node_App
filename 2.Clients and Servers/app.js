const express = require('express');
const app = express();


app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<h>Hello World</h>');
    res.render('index');
});

app.get('/about', (req, res) => {

    res.render('about');
});

// Redirects
app.get('about-us', (req, res) => {
    res.redirect('/about');
});

// 404
app.use((req, res) => {
    res.status(404).render('404');
});