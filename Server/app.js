const express = require('express') ;
const morgan = require('morgan') ;
const mongoose = require('mongoose') ;
const blogRoutes = require('./routes/blogRoutes') ;

//express app
const app = express() ;

// Connect to mongoDB
const dbURI = 'mongodb+srv://shadow210:2110shadow@node-net.vz0qp.mongodb.net/node-net?retryWrites=true&w=majority' ;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000) )
    .catch((err) => console.log(err)) ;

//register view engines
app.set('view engine','ejs') ;

// Middleware Code 

/*app.use((req,res, next) =>{
    console.log("New Request Made") ;
    console.log("host: " + req.hostname);
    console.log('path: ' + req.path) ;
    console.log('method: ' + req.method) ;
    next() ;
}) ; 

app.use((req,res, next) =>{
    console.log("Next Middleware!!") ;
    next() ;
}) ; 

*/
app.use(express.static('public')) ;
app.use(express.urlencoded( { extended: true })) ;
app.use(morgan('dev')) ;

/*//mangoose and mongo sandbox routes
app.get('/add-blog' , (req,res) => {
    const blog = new Blog( {
        title: 'My New Blog',
        snippet: 'A Little Snippet about my Blog',
        body: 'Full body of my Blog'
    }) ;

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err)
        }) 
}) ;

app.get('/all-blogs' , (req,res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err) ;
        })
}) ;

app.get('/single-blog' , (req,res) => {
    Blog.findById('60996e76f4501000f8c03934')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err) ;
        })
}) ;
*/

//Send Responses - Index page
app.get('/' , (req,res) => {
    // res.send('<p>Index Page</p>') ;
    //res.sendFile('./views/htmls/index.html', { root: __dirname}) ;
    /*const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: 'Home', blogs}) ; */
    res.redirect('/blogs') ;
}) ;

//About Page
app.get('/about' , (req,res) => {
    // res.send('<p>About Page</p>') ;
    //res.sendFile('./views/htmls/about.html', { root: __dirname}) ;
    res.render('about', {title: 'About'}) ;
}) ;

/*//Redirects
app.get('/about-us' ,(req,res) =>{
    res.redirect('/about') ;
})*/


//Blog Routes
app.use('/blogs', blogRoutes) ;

//404 page
app.use((req,res) => {
    //res.status(404).sendFile('./views/htmls/404.html', { root: __dirname}) ;
    res.status(404).render('404', {title: '404'});
})