/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("const app = Sammy('#root', function () {\n  // Tell sammy to use hbs and what is extension of hbs files\n  this.use('Handlebars', 'hbs'); // Home page  \n\n  this.get('/', function () {\n    // load any partials => this.loadPartials()  <-async\n    // render the template => this.render()\n    // Change the DOM content => swap()\n    this.loadPartials({\n      navbar: './views/navbar.hbs'\n    }).then(function (res) {\n      this.render('./views/template.hbs', {\n        title: 'Home Page'\n      }).swap();\n    });\n  }); // About Page \n\n  this.get('/about', function () {\n    this.loadPartials({\n      navbar: './views/navbar.hbs'\n    }).then(function () {\n      this.render(\"./views/template.hbs\", {\n        title: \"About Page\"\n      }).swap();\n    }).catch(err => console.log(err));\n  }); // Contact Page \n\n  this.get('/contact', function () {\n    this.loadPartials({\n      navbar: \"views/navbar.hbs\"\n    }).then(function () {\n      this.render(\"./views/template.hbs\", {\n        title: \"Contact Page\"\n      }).swap();\n    });\n  });\n});\napp.run('/');\n\n//# sourceURL=webpack://sammy-routing/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;