const express = require("express");
const mongoose = require('mongoose');
const User = require('./User');
const assert = require("assert");
// const asyncHandler = require("express-async-handler");

const asyncHandler = require('./asyncHandler');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {

	res.sendFile(__dirname + "/register.html");
});

app.post("/", asyncHandler( async (req, res, next) => {
  const { username, password, password2, email } = req.body;
  const user = new User({ username, password, email })
  await user.save();
  res.redirect("/");
})
);

// express error handling function (middleware)
app.use((error, req, res, next) => { 
  console.log(error.message)
  res.sendFile(__dirname+'/505.html')
})


const dbUrl = 'mongodb+srv://alfred:alfred00@cluster0.bmyec.mongodb.net/Validation';
mongoose.connect(dbUrl).then(() => { 
  console.log('Server running and connected with DB...')
  app.listen(3000);

})


