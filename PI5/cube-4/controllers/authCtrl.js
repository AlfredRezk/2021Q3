const User = require('../models/User');
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const salt = 12;


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'cubekingsland@gmail.com', 
    pass:'Cube@2020'
  }
})

exports.getLogin = (req, res) => { 
  res.render('auth/loginPage.hbs', {title:'Login Page'})
}

exports.getRegister = (req, res) => { 
    res.render("auth/registerPage.hbs", { title: "Register Page" });
}

exports.postLogin = asyncHandler(async(req, res, next) => { 

  // parse the form 
  const { password, username } = req.body;

  // check for validation errors 
  const errors = validationResult(req)
  // if there are errors
  if (!errors.isEmpty()) { 
    return res.render('auth/loginPage.hbs', {title:'Login Page', errorMessage: errors.array()[0].msg, password, username})
  }


  // check if the user exist in my db or not 
  const user = await User.findOne({ username: username })
  console.log(user)
  // if he username not in db 
  if (!user) { 
    req.flash('error', 'Invalid email or password');
    return res.redirect('/login')
  }
  // check the password is the correct password
  const match = await bcrypt.compare(password, user.password)
  if (match) { 
    // process to login the user 
    req.session.isLoggedIn = true; 
    req.session.user = user;
    // Store user session in DB
    await req.session.save()
    req.flash('success', 'Logged In successfully !');
    return res.redirect('/')
  }

  //  if no match to the password 
  req.flash('error', 'Invalid email or password')
  return res.redirect('/login')

})

exports.postRegister = asyncHandler(async(req, res, next) => {
	// parse all form inputs
	const { email, password, password2, username } = req.body;

	// check for validation errors
	const errors = validationResult(req);
	// if there are errors
	if (!errors.isEmpty()) {
		return res.render("auth/registerPage.hbs", {
			title: "Register Page",
			errorMessage: errors.array()[0].msg,
			password,
      username,
      email, 
      password2
		});
  }
  
	// Make sure username is not taken
  // let userData = await User.find({ username: username });
  
	// if (userData.length > 0) {
	// 	req.flash("error", "Username is taken, try another username");
	// 	return res.redirect("/register");
	// }
	// // Make sure email is not taken
	// userData = await User.find({ email: email });
	// if (userData.length > 0) {
	// 	req.flash("error", "This email been used for a different account");
	// 	return res.redirect("/register");
	// }

	// Hash the password and store the user info in the db
	const hash = await bcrypt.hash(password, salt);

	// Create a new user
	const user = new User({ password, username, email });
	// store the user in DB
	await user.save();
	req.flash("success", "User created Successfully !");
	res.redirect("/login");
	let info = await transporter.sendMail({
		to: email,
		from: "cubekingsland@gmail.com",
		subject: "Thank you for signing with us",
		html: `<h1> Welcome to our App, you successfully signed up </h1>`,
	});
	console.log(info);
})
 
exports.getLogout = asyncHandler(async (req, res, next) => { 
  // send a message 
  // req.flash('success', 'Logged out Successfully !')
    await req.session.destroy();
    res.redirect('/')
})

exports.getReset = async (req, res) => { 
  res.render('auth/reset.hbs', { title: 'Reset Password' });
}

exports.postReset = asyncHandler(async (req, res, next) => {

  // Get the entered user email 
  const email = req.body.email;

  // Create the token using crypto library 
  const token = crypto.randomBytes(32).toString('hex') 
  
  // Find the user by his email 
  const user = await User.findOne({ email: email })
  
  // if there is no user send error 
  if (!user) { 
    req.flash('error', 'No account with this email');
    return res.redirect('/reset');
  }

  // Update his reset token and its expiration date to his document in db
  user.resetToken = token; 
  user.resetTokenExpiration = Date.now() + 3600000; // current time+ 1hr

  // save the user in db 
  await user.save();
  req.flash('success', 'Check your email !')
  res.redirect('/');
  const info = await transporter.sendMail({
    to: email, 
    from: 'cubekingsland@gmail.com', 
    subject: ' Password Reset', 
    html: `
      <p> You requested a password Reset </p>
      <p> Click the link <a href="http://localhost:5000/reset/${token}"> Reset Link </a> to reset your password </p>
    `
  })
  console.log(info);
})
 
exports.getNewPassword = asyncHandler(async (req, res) => { 
  const token = req.params.token; 

  const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
  if (!user) { 
    return res.redirect('/login');
  }

  res.render('auth/newPassword.hbs', {title:'Reset Password', userId: user._id, token})

})


exports.postNewPassword = asyncHandler(async (req, res) => {

  // parse form fields
  const { password, token, userId } = req.body;

  const user = await User.findOne({ _id: userId, resetToken: token, resetTokenExpiration: { $gt: Date.now() } })

  if (user) { 
    // Encrypt the password 
    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiration = undefined;
    await user.save()
    req.flash('success', 'Password reset successfully !');
    res.redirect('/login')
  }
  


})