const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;


// Middleware for parsing form data 
app.use(express.urlencoded({extended:false}))

// Middlewares - routing 
app.get('/', (req, res) => { 
  res.sendFile(__dirname+'/index.html');
})

app.get('/about', (req, res) => { 
  res.send('<p> This is a note App version 1.0.0 </p>')
})

app.post('/note', (req, res) => { 
   fs.writeFileSync("notes.txt", req.body.note);
  res.redirect('/')
})

app.get('*', (req, res) => { 
  	res.send(`<p> Page not found </p>`);
})

app.listen(PORT, console.log(`Server is running on Port ${PORT}`))






