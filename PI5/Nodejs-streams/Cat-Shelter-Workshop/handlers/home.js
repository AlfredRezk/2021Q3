const url = require('url');
const fs = require('fs');
const path = require('path');
// const cats = require('../data/cats.json');

module.exports = (req, res) => {
  // extract / parse pathname e.g '/cats'

  // https://www.mywebpage.com/test?q=search#help
  const pathname = url.parse(req.url).pathname;

  if (pathname === '/' && req.method === 'GET') {
    // Show homepage view
    let filePath = path.normalize(path.join(__dirname, '../views/home/index.html'))
    fs.readFile(filePath, (err, data) => { 
      if (err) { 
        console.log(err);
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('404: cannot read File');
        res.end();
        return;
      }

      // serve index.html
      res.writeHead(404, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
    })

  } else { 
    return true;
  }

}