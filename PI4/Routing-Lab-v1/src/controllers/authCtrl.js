	export function getLogin() {
		this.loadPartials({
			navbar: "./views/partials/navbar.hbs",
			notifications: "./views/partials/notifications.hbs",
		}).then(function () {
			this.render("./views/auth/login.hbs", {}).swap();
		});
	}

	export function getSignup() {
		this.loadPartials({
			navbar: "./views/partials/navbar.hbs",
			notifications: "./views/partials/notifications.hbs",
		}).then(function () {
			this.render("./views/auth/signup.hbs", {}).swap();
		});
	}

  export function postSignup() {
		const { email, password, password2 } = this.params;
		db.signup({ username: email, password })
			.then(res=>  {
        this.redirect('/login')
			})
			.catch((err) => {
				if (err.status === 409) {
					this.redirect("/signup");
				}
			});
	}

