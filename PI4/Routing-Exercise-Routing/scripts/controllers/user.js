/** @format */

import { sendMsg } from "../helper";

export function getLogin() {
	this.loadPartials({
		header: "../templates/common/header.hbs",
		footer: "../templates/common/footer.hbs",
		loginForm: "../templates/login/loginForm.hbs",
	}).then(function () {
		this.render("../templates/login/loginPage.hbs").swap();
	});
}

export function postLogin() {
	const { username, password } = this.params;

	if (!username || !password) {
		sendMsg("error", "Please Fill in the login Form", 2);
		return;
	}

	db.login({ username, password })
		.then((res) => {
			sessionStorage.setItem("user", res._id);
			sessionStorage.setItem("loggedIn", res._kmd.authtoken);
			sessionStorage.setItem("username", res.username);
			this.redirect("/");
		})
		.catch((err) => {
			this.redirect("/login");
		});
}

export function getRegister() {
	this.loadPartials({
		header: "../templates/common/header.hbs",
		footer: "../templates/common/footer.hbs",
		registerForm: "../templates/register/registerForm.hbs",
	}).then(function () {
		this.render("../templates/register/registerPage.hbs").swap();
	});
}

export function postRegister() {
	const { username, password, repeatPassword } = this.params;
	if (!username || !password || !repeatPassword) {
		sendMsg("error", "Please Fill in the register Form", 2);
		return;
	}

	if (password !== repeatPassword) {
		sendMsg("error", "Passwords are not matching ", 2);
		return;
	}
	db.signup({ username, password })
		.then((res) => {
			this.redirect("/login");
		})
		.catch((err) => {
			if (err.status == 409) {
				this.redirect("/register");
			}
		});
}

export function getLogout(){ 
  let token = sessionStorage.getItem('loggedIn');
  db.logout(token).then(res => { 
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('user');
    sendMsg('info', 'Successfully logged out', 2)
    this.redirect('/');
  }).catch(err => { 
    sendMsg('error', err.statusText, 2)
    this.redirect('/')
  })
}