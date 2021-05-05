const http = require('http') ;
const fs = require('fs') ;

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);

    //Setting Response Header Type

    res.setHeader('Content-Type', 'text/html');


    let path = './views/' ;

    switch(req.url){
        case '/':
            path += 'index.html' ;
            res.statusCode = 200 ;
            break ;

        case '/about':
            path += 'about.html' ;
            res.statusCode = 200 ;
            break;

        case '/about-me':
            res.statusCode = 301 ;
            res.setHeader('Location', '/about') ;
            res.end() ;
            break;

        default :
            path+= '404.html' ;
            res.statusCode = 404 ;
            break ;
    }

    // res.write('<head><link rel="stylesheet" src="#"</head>')
    // res.write('<h1>Hello Shadow MAster</h1>') ;
    // res.write('<h2>Hello Again, Shadow MAster</h2>') ;
    // res.end() ;

    fs.readFile(path , (err,data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            //res.write(data) ;
            res.end(data) ;
        }
    })
})

server.listen(3000,'localhost',()=>{
    console.log("Server running on localhost:3000");
})