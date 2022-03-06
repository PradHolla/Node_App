const Blog = require('../models/blogs');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: 'desc' })
    .then(result => {res.render('blogs/index', { title: 'All Blogs', blogs: result })})
    .catch(err => {res.send(err)});
}

const blog_details = (req, res) => {
    Blog.findById(req.params.id)
	.then(result => {res.render('blogs/details', { blog: result, title: 'Blog Details' })})
	.catch(err => {res.status(404).render('404', { title: 'Blog Not Found' })});
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
	blog.save()
	.then(result => {res.redirect('/blogs')})
	.catch(err => {res.send(err)});
}

const blog_delete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
	.then(result => {res.json({ redirect: '/blogs' })})
	.catch(err => {res.send(err)});
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}