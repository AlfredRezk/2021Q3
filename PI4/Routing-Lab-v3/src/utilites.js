/** @format */

export function clearStates(viewData) {
	msgs = [];
  sharedData = {};
  viewData = {}
  
}

export function isAuth() {
	if (sessionStorage.getItem("loggedIn")) return true;
	else false;
}
