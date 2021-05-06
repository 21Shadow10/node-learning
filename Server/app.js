const express = require('express') ;

//express app
const app = express() ;

//listen to requests
app.listen(3000) ;

//Send Responses - Index page
app.get('/' , (req,res) => {
    // res.send('<p>Index Page</p>') ;
    res.sendFile('./views/index.html', { root: __dirname}) ;
}) ;

//About Page
app.get('/about' , (req,res) => {
    // res.send('<p>About Page</p>') ;
    res.sendFile('./views/about.html', { root: __dirname}) ;
}) ;

//Redirects
app.get('/about-us' ,(req,res) =>{
    res.redirect('/about') ;
})

//404 page
app.use((req,res) => {
    res.sendFile('./views/404.html', { root: __dirname}) ;
})