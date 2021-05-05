const fs = require('fs') ;

var readStream = fs.createReadStream('./docs/docs.txt', {encoding: 'utf8'});
var writeStream = fs.createWriteStream('./docs/docs1.txt');


// readStream.on('data', (chunk) => {
//     console.log("-----NEW CHUNK -----")
//     console.log(chunk) ;

//     writeStream.write("--New Chunk--");
//     writeStream.write(chunk) ;
// })

//Piping

readStream.pipe(writeStream) ;