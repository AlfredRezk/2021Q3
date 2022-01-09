const http = require("http");
const fs = require('fs');

const PORT = 3000;
const server = http.createServer((req, res) => {
	if (req.url == "/" && req.method == "GET") {
		res.setHeader("Content-Type", "text/html");
		res.write(`
    <html>
      <head>
        <title> Note app </title>
      </head>
      <body>
        <form action='/note' method='POST'>
          <input type="text" name="note" placeholder='Enter your note'> <br>
          <button>ADD</button>
        </form>
      </body>
    </html>
    `);
		res.end();
  } else if (req.url == '/note' && req.method == 'POST') {

    // Buffer 
    const body = []
    let note;
    // read the form data
    
    req.on('data', (chuck) => body.push(chuck));
    req.on('end', () => { 
      note = body.join().split('=')[1]
      fs.writeFileSync("notes.txt", note);
    })
   
    // redirect the user to home page;
    res.statusCode = 302; 
    res.setHeader('Location', '/')
    // res.writeHead(302, {'Location', '/'})
    res.end();
  }
  else if (req.url == "/about" && req.method == "GET") {
		res.setHeader("Content-Type", "text/html");
		res.write(`<p> This is a note App version 1.0.0 </p>`);
		res.end();
	} else {
		res.setHeader("Content-Type", "text/html");
		res.statusCode = 404;
		res.write(`<p> Page not found </p>`);
		res.end();
	}
});

server.listen(PORT, console.log(`server running on port ${PORT}`));
