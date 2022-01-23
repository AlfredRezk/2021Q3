const express = require('express');
const session = require('express-session');
const app = express();


app.use(
	session({
		secret: "my secret",
		httpOnly: true,
		resave: false,
		secure: true,
		saveUninitialized: true
	})
);

app.get('/set', (req, res) => { 
  req.session.message = 'Hello world';
  res.send('Session stored');
})

app.get('/get', (req, res) => { 
  res.json(req.session.message)
})

app.listen(3000)