const fs = require('fs') ;

//Reading a file

// fs.readFile('./docs/docs.txt', (err,data) => {
//     if(err)
//         console.log(err) ;
//     console.log(data.toString()) ;
// })

// console.log('last line');

// writing file

// fs.writeFile('./docs/docs.txt', "Hello, World", ()=>{
//     console.log('Successful') ;
// })


// Directories 

// if(!fs.existsSync('./assests')){
//     fs.mkdir('./assests', (err) =>{
//         if(err)
//             console.log(err) ;
//         console.log('Successful') ;
//     }) ;
// }
// else{
//     fs.rmdir('./assests', (err) => {
//         if(err)
//             console.log(err);
//             console.log("Folder Deleted");
//     })
// }



// Delete Files

// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) =>{
//         if(err)
//             console.log(err);
//         console.log('File Deleted') ;
//     })
// }