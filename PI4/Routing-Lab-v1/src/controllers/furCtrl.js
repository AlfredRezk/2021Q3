export function getHome() { 
 this.loadPartials({
		navbar: "./views/partials/navbar.hbs",
		notifications: "./views/partials/notifications.hbs",
 }).then(function () {
		this.render("./views/app/home.hbs", {}).swap();
 });
}

export function getCreate() { 
   this.loadPartials({
			navbar: "./views/partials/navbar.hbs",
			notifications: "./views/partials/notifications.hbs",
		}).then(function () {
			this.render("./views/app/create.hbs", {}).swap();
		});
}