const express = require('express') ;

//express app
const app = express() ;

//register view engines
app.set('view engine','ejs') ;

//listen to requests
app.listen(3000) ;

//Send Responses - Index page
app.get('/' , (req,res) => {
    // res.send('<p>Index Page</p>') ;
    //res.sendFile('./views/index.html', { root: __dirname}) ;
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: 'Home', blogs}) ;
}) ;

//About Page
app.get('/about' , (req,res) => {
    // res.send('<p>About Page</p>') ;
    //res.sendFile('./views/about.html', { root: __dirname}) ;
    res.render('about', {title: 'About'}) ;
}) ;

/*//Redirects
app.get('/about-us' ,(req,res) =>{
    res.redirect('/about') ;
})*/

app.get('/blogs/create' , (req,res) => {
    res.render('create', {title: 'New Blog'}) ;
})

//404 page
app.use((req,res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname}) ;
    res.status(404).render('404', {title: '404'});
})