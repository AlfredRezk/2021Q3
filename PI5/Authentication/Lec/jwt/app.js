const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

app.use(express.json());

const secret = "mySecret";

app.post('/login', (req, res) => { 

  const username = req.body.username;
  const password = req.body.password;
  const token = jwt.sign({ username: username }, secret)
  res.status(200).json({token:token})


})

app.get('/profile', (req, res) => { 
  const token = req.headers.authorization.split(' ')[1]
  const decodedPayload = jwt.verify(token, secret)
  res.json(decodedPayload)
})

app.listen(3000)

