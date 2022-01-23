const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

// cookie-parser middleware 
app.use(cookieParser())

app.get('/set', (req, res) => { 
  console.log('adding a cookie');
  res.cookie('message', 'Hello world')
  res.end('Cookie added')
})

app.get('/get', (req, res) => {
  res.json(req.cookies)
})


app.listen(3000, console.log('server running'))