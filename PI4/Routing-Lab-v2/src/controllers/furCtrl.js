/** @format */

import { clearStates, isAuth } from "../utilites";

export function getHome() {
	const viewData = { msgs, homeActive:true, loggedIn:isAuth() };
	this.loadPartials({
		navbar: "./views/partials/navbar.hbs",
		notifications: "./views/partials/notifications.hbs",
	}).then(function () {
    this.render("./views/app/home.hbs", viewData).swap();
    clearStates(viewData);
	});
}

export function getCreate() {
	const viewData = { msgs, loggedIn: isAuth(), createActive:true};
	this.loadPartials({
		navbar: "./views/partials/navbar.hbs",
		notifications: "./views/partials/notifications.hbs",
	}).then(function () {
    this.render("./views/app/create.hbs", viewData).swap();
     clearStates(viewData);
	});
}

export function getProfile() {
	const viewData = { msgs , profileActive:true, loggedIn:isAuth()};
	this.loadPartials({
		navbar: "./views/partials/navbar.hbs",
		notifications: "./views/partials/notifications.hbs",
	}).then(function () {
    this.render("./views/app/profile.hbs", viewData).swap();
     clearStates(viewData);
	});
}
