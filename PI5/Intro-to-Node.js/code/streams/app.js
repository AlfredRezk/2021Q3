const http = require('http');
const fs = require('fs');
const formidable = require('formidable')


const server = http.createServer((req, res) => {
  if (req.url == '/' && req.method == 'GET') {
    const src = fs.createReadStream('./index.html')
    // src.on('data', data => res.write(data))
    // src.on('end', ()=> res.end())

    src.pipe(res);
  } else if (req.url === '/submit' && req.method === 'POST') { 

    const form = new formidable.IncomingForm();
    form.parse(req, (error, fields, files) => { 

      if (error) { 
        console.log(error);
        return;
      }

 
      let oldPath = files.image.filepath; 
      let newPath = __dirname + "/images/" + files.image.originalFilename;

      // Copy the file 
      fs.rename(oldPath, newPath, (err) => { 
        if (err) console.log(err)
        res.write('File uploaded Successfully !')
        res.end();
      })

    })
  }

})

server.listen(3000, console.log('Server is running'))



// const zlib = require('zlib');
// const fs = require('fs');


// let readStream = fs.createReadStream('./index.html');
// let writeStream = fs.createWriteStream('./index.html.gz');
// let gzip = zlib.createGzip();

// readStream.pipe(gzip).pipe(writeStream)

// const fs = require('fs');
// const archiver = require('archiver');

// // input 
// let read = fs.createReadStream('./index.html');
// // output 
// let output = fs.createWriteStream('./index.zip')
// // Transformation 
// const archive = archiver("zip", {
// 	zlib: { level: 9 }, // Sets the compression level.
// });

// read.pipe(archive).pipe(output)

