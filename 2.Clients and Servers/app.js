const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
// express app
const app = express();

const dbURI = '';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.use(express.static('public'));
app.use(morgan('dev'));

// Mongoose and Mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'Test fgdBlog',
//         snippet: 'Testasdg snippet',
//         body: 'Testsaegr body'
//     })
//     blog.save()
//     .then(result => {res.send(result)})
//     .catch(err => {res.send(err)});
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then(result => {res.send(result)})
//     .catch(err => {res.send(err)});
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('62220ad71ad0f1d49f31b54e')
//     .then(result => {res.send(result)})
//     .catch(err => {res.send(err)});
// });


// Routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Blog Routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: 'desc' })
    .then(result => {res.render('index', { title: 'All Blogs', blogs: result })})
    .catch(err => {res.send(err)});
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});