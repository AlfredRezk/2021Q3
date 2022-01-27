/** @format */

const express = require("express");
const { body, validationResult , sanitizeParam} = require("express-validator");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/register.html");
});

app.post(
	"/",
	[
		body("username")
      .trim()
      .not()
			.isEmpty()
			.withMessage("Username is Empty")
			.isLength({ min: 3, max: 24 })
			.withMessage("Username Field incorrect"),
		body("email").normalizeEmail()
			.not()
			.isEmpty()
			.withMessage("Email is Empty")
			.isEmail()
			.withMessage("Incorrect email format"),
		body("password")
			.not()
			.isEmpty()
			// .isAlphanumeric()
			.isLength({ min: 8, max: 20 }),
	],
	(req, res) => {
		// const { username, password, password2, email } = req.body;

		const errors = validationResult(req).array();

		console.log(errors);
		// let val;

		// val = !validator.isEmpty(username) && validator.isLength(username, { min: 3, max: 24 })
		// val = val && !validator.isEmpty(email) && validator.isEmail(email);
		// val = val && !validator.isEmail(password) && validator.isLength(password,{ min: 5, max: 16 })
		// console.log(val);
		res.redirect("/");
	}
);


app.get('/products/:prodId', sanitizeParam('prodId').trim(), (req, res) => {


  const errors = validationResult(req);
  console.log(errors)
  console.log(req.params.prodId)
})

app.listen(3000);
