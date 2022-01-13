const url = require('url');
const fs = require('fs');


function getContentType(url) { 
  if (url.endsWith('css')) return 'text/css'
  else if (url.endsWith('html')) return 'text/html'
  else if (url.endsWith('png')) return 'image/png'
  else if (url.endsWith('js')) return 'text/javascript'
  else if (url.endsWith('ico')) return "image/vnd.microsoft.icon"
  else if (url.endsWith('jpg')) return 'image/jpeg'
  else if(url.endsWith('jpeg')) return 'image/jpeg'
}

module.exports = (req, res) => { 
  
   const pathname = url.parse(req.url).pathname;
  
  if (pathname.startsWith('/content') && req.method === 'GET') {

   
    // Check if the static file is an image (bytes)
    if (pathname.endsWith('png') || pathname.endsWith('ico') || pathname.endsWith('jpeg') || pathname.endsWith('jpg')) {

      fs.readFile(`./${pathname}`, (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Error reading file')
          return
        }

        // if the file data available 
        res.writeHead(200, { 'Content-Type': getContentType(pathname) });
        res.write(data)
        res.end();
      })
    } else {
      // text file (utf8)
      fs.readFile(`./${pathname}`, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Error reading file')
          return
        }

        // if the file data available 
        res.writeHead(200, { 'Content-Type': getContentType(pathname) });
        res.write(data)
        res.end();
      })
    }


  } else { 
    return true;
  }
}