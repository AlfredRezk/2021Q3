const User = require('../models/User');
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');
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

exports.postLogin = async(req, res) => { 

  // parse the form 
  const { password, username } = req.body;

  // check if the user exist in my db or not 
  const user = await User.findOne({ username: username })
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

}
exports.postRegister = async(req, res) => {
 
  // parse all form inputs 
  const { email, password, password2, username } = req.body
  // Make sure username is not taken
  let userData = await User.find({ username: username })
  if (userData.length > 0) { 
    req.flash('error', 'Username is taken, try another username');
    return res.redirect('/register')
  }
  // Make sure email is not taken
  userData = await User.find({ email: email })
  if (userData.length > 0) {
    req.flash("error", "This email been used for a different account");
    return res.redirect("/register");
  }

  // // Hash the password and store the user info in the db
  // const hash = await bcrypt.hash(password, salt)

  // Create a new user 
  const user = new User({ password, username, email })
  // store the user in DB 
  await user.save()
  req.flash('success', 'User created Successfully !')
  res.redirect("/login");
  let info = await transporter.sendMail({
    to: email, 
    from: 'cubekingsland@gmail.com', 
    subject: 'Thank you for signing with us', 
    html: `<h1> Welcome to our App, you successfully signed up </h1>`
  })
  console.log(info);

}
 
exports.getLogout = async (req, res) => { 
  // send a message 
  // req.flash('success', 'Logged out Successfully !')
  await req.session.destroy();
  res.redirect('/')

}