const http = require('http');

const PORT = 5000; 

const server = http.createServer((req, res) => { 
  console.log(req.url, req.method);
  // res.setHeader('Content-Type', 'application/json')
  // res.setHeader('X-powered-by', 'Node.js')
  // res.statusCode = 201;

  res.writeHead(201, {'Content-Type': 'application/json', 'x-powered-by':"Node.js"})

  res.write(JSON.stringify(users));
  res.end();
})


server.listen(PORT, console.log(`Server running on port ${PORT}`));

