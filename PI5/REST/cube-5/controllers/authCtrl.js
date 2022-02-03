const User = require('../models/User');
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const salt = 12;

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'cubekingsland@gmail.com', 
    pass:'Cube@2020'
  }
})



exports.login = asyncHandler(async(req, res, next) => { 

  // parse the data 
  const { password, username } = req.body;

  // check for validation errors 
  const errors = validationResult(req)
  // if there are errors
  if (!errors.isEmpty()) { 
    const error = new Error('Validation Failed');
    error.statusCode = 422;
    throw error; 
  }


  // check if the user exist in my db or not 
  const user = await User.findOne({ username: username })
  
  // if he username not in db 
  if (!user) { 
    const error = new Error("A username could not be found");
		error.statusCode = 401;
		throw error; 
  }
  // check the password is the correct password
  const match = await bcrypt.compare(password, user.password)
  if (!match) { 
       const error = new Error("wrong password");
				error.statusCode = 401;
				throw error; 
  }

  //  if match to the password  send a json web token
  const token = jwt.sign({email: user.email, userId: user._id.toString()}, process.env.JWT_SECRET, {expiresIn: '1h'})
  res.status(200).json({message: 'loggedIn successfully', token: token})
})

exports.signup = asyncHandler(async(req, res, next) => {
	// parse all form inputs)
	const { email, password, password2, username } = req.body;

	// check for validation errors
	const errors = validationResult(req);
	// if there are errors
	if (!errors.isEmpty()) {
		 const error = new Error("Validation Failed");
			error.statusCode = 422;
			throw error; 
  }
  
	const hash = await bcrypt.hash(password, salt);
	// Create a new user
	const user = new User({ password, username, email });
	// store the user in DB
	const savedUser = await user.save();
  res.status(201).json({message:'User Created', userId: savedUser._id})
	let info = await transporter.sendMail({
		to: email,
		from: "cubekingsland@gmail.com",
		subject: "Thank you for signing with us",
		html: `<h1> Welcome to our App, you successfully signed up </h1>`,
	});
})
 

exports.resetPassword = asyncHandler(async (req, res, next) => {

  // Get the entered user email 
  const email = req.body.email;

  // Create the token using crypto library 
  const token = crypto.randomBytes(32).toString('hex') 
  
  // Find the user by his email 
  const user = await User.findOne({ email: email })
  
  // if there is no user send error 
  if (!user) { 
  const error = new Error("A username could not be found");
	error.statusCode = 401;
	throw error; 
  }

  // Update his reset token and its expiration date to his document in db
  user.resetToken = token; 
  user.resetTokenExpiration = Date.now() + 3600000; // current time+ 1hr

  // save the user in db 
  await user.save();

   res.status(200).json({ message: "Check your email"});
  const info = await transporter.sendMail({
    to: email, 
    from: 'cubekingsland@gmail.com', 
    subject: ' Password Reset', 
    html: `
      <p> You requested a password Reset </p>
      <p> Click the link <a href="http://localhost:5000/reset/${token}"> Reset Link </a> to reset your password </p>
    `
  })
})
 



exports.newPassword= asyncHandler(async (req, res, next) => {

  // parse form fields
  const { password, resetToken, userId } = req.body;
  const user = await User.findOne({ _id: userId, resetToken: resetToken, resetTokenExpiration: { $gt: Date.now() } })

  if (user) { 
    // Encrypt the password 
    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiration = undefined;
    await user.save()
    res.status(200).json({ message: "Password Changed !" });
  }
  


})