const root = document.getElementById('app');

const nav = `
<a href="#" onclick="render('/')">Home</a>
<a href="#" onclick="render('/about')">About</a>
<a href="#" onclick="render('/contact')">Contact </a>
`;

const routes = {
	"/": `${nav} <h1> Home Page </h1>`,
	"/contact": `${nav} <h1> Contact Page </h1>`,
	"/about": `${nav} <h1> About Page </h1>`,
};


function render(pathname) { 
  // change the url to the new url based on the path name 
  history.pushState({}, pathname, location.origin + pathname)
  // Reflect the content in the DOM
  root.innerHTML = routes[pathname]

}

window.onpopstate = () => { 
  root.innerHTML = routes[location.pathname]
}

render('/')

