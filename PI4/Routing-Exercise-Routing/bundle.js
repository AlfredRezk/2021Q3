/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _kinvey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kinvey */ \"./scripts/kinvey.js\");\n/* harmony import */ var _controllers_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/catalog */ \"./scripts/controllers/catalog.js\");\n/* harmony import */ var _controllers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/user */ \"./scripts/controllers/user.js\");\n\n\n\nwindow.db = new _kinvey__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"kid_ryNwWsM9F\", \"8a4311885b5c4715a2cee67476f70458\");\nvar app = Sammy('#main', function () {\n  this.use('Handlebars', 'hbs');\n  this.get('/', _controllers_catalog__WEBPACK_IMPORTED_MODULE_1__.getHome);\n  this.get('/about', _controllers_catalog__WEBPACK_IMPORTED_MODULE_1__.getAbout);\n  this.get('/login', _controllers_user__WEBPACK_IMPORTED_MODULE_2__.getLogin);\n  this.post('/login', _controllers_user__WEBPACK_IMPORTED_MODULE_2__.postLogin);\n  this.get('/register', _controllers_user__WEBPACK_IMPORTED_MODULE_2__.getRegister);\n});\napp.run('/');\n\n//# sourceURL=webpack://routing-exercise-routing/./scripts/app.js?");

/***/ }),

/***/ "./scripts/controllers/catalog.js":
/*!****************************************!*\
  !*** ./scripts/controllers/catalog.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHome\": () => (/* binding */ getHome),\n/* harmony export */   \"getAbout\": () => (/* binding */ getAbout)\n/* harmony export */ });\nfunction getHome() {\n  this.loadPartials({\n    header: '../templates/common/header.hbs',\n    footer: '../templates/common/footer.hbs'\n  }).then(function () {\n    this.render('../templates/home/home.hbs').swap();\n  });\n}\nfunction getAbout() {\n  this.loadPartials({\n    header: \"../templates/common/header.hbs\",\n    footer: \"../templates/common/footer.hbs\"\n  }).then(function () {\n    this.render(\"../templates/about/about.hbs\").swap();\n  });\n}\n\n//# sourceURL=webpack://routing-exercise-routing/./scripts/controllers/catalog.js?");

/***/ }),

/***/ "./scripts/controllers/user.js":
/*!*************************************!*\
  !*** ./scripts/controllers/user.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLogin\": () => (/* binding */ getLogin),\n/* harmony export */   \"postLogin\": () => (/* binding */ postLogin),\n/* harmony export */   \"getRegister\": () => (/* binding */ getRegister)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'memfs/lib/volume'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/** @format */\n\nfunction getLogin() {\n  this.loadPartials({\n    header: \"../templates/common/header.hbs\",\n    footer: \"../templates/common/footer.hbs\",\n    loginForm: '../templates/login/loginForm.hbs'\n  }).then(function () {\n    this.render(\"../templates/login/loginPage.hbs\").swap();\n  });\n}\nfunction postLogin() {\n  var _this = this;\n\n  var _this$params = this.params,\n      username = _this$params.username,\n      password = _this$params.password;\n  db.login({\n    username: username,\n    password: password\n  }).then(function (res) {\n    sessionStorage.setItem('user', res._id);\n    sessionStorage.setItem('loggedIn', res._kmd.authtoken);\n    sessionStorage.setItem('username', res.username);\n\n    _this.redirect('/');\n  })[\"catch\"](function (err) {\n    _this.redirect('/login');\n  });\n}\nfunction getRegister() {\n  this.loadPartials({\n    header: \"../templates/common/header.hbs\",\n    footer: \"../templates/common/footer.hbs\",\n    registerForm: \"../templates/register/registerForm.hbs\"\n  }).then(function () {\n    this.render(\"../templates/register/registerPage.hbs\").swap();\n  });\n}\n\n//# sourceURL=webpack://routing-exercise-routing/./scripts/controllers/user.js?");

/***/ }),

/***/ "./scripts/kinvey.js":
/*!***************************!*\
  !*** ./scripts/kinvey.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Kinvey)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Kinvey = /*#__PURE__*/function () {\n  function Kinvey(app_id, app_secret) {\n    _classCallCheck(this, Kinvey);\n\n    this.app_id = app_id;\n    this.app_secret = app_secret;\n  } //  Test Kinvey app\n  //  data is the username/pass object\n\n\n  _createClass(Kinvey, [{\n    key: \"test\",\n    value: function test(data) {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/appdata/\".concat(_this.app_id);\n        var username = data.username,\n            password = data.password;\n        var headers = {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Basic \" + btoa(username + \":\" + password)\n        };\n        fetch(url, {\n          method: \"GET\",\n          headers: headers\n        }).then(function (res) {\n          if (res.ok) {\n            return res.json();\n          }\n\n          throw res;\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(res);\n        });\n      });\n    } // LOGIN USER\n\n  }, {\n    key: \"login\",\n    value: function login(data) {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/user/\".concat(_this2.app_id, \"/login\");\n        var username = data.username,\n            password = data.password;\n        var headers = {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Basic \" + btoa(username + \":\" + password)\n        };\n        fetch(url, {\n          method: \"POST\",\n          headers: headers,\n          body: JSON.stringify(data)\n        }).then(function (res) {\n          if (res.ok) {\n            return res.json();\n          }\n\n          throw res;\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    } // Signup\n\n  }, {\n    key: \"signup\",\n    value: function signup(data) {\n      var _this3 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/user/\".concat(_this3.app_id);\n        var headers = {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Basic \" + btoa(_this3.app_id + \":\" + _this3.app_secret)\n        };\n        fetch(url, {\n          method: \"POST\",\n          headers: headers,\n          body: JSON.stringify(data)\n        }).then(function (res) {\n          if (res.ok) {\n            return res.json();\n          }\n\n          throw res;\n        }).then(function (data) {\n          return resolve(data._kmd.authtoken);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    } // Logout a user\n\n  }, {\n    key: \"logout\",\n    value: function logout(authToken) {\n      var _this4 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/user/\".concat(_this4.app_id, \"/_logout\");\n        var headers = {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Kinvey \" + authToken\n        };\n        fetch(url, {\n          method: \"POST\",\n          headers: headers\n        }).then(function (res) {\n          if (res.status === 204) {\n            resolve({\n              msg: \"User logged Out\"\n            });\n          }\n        })[\"catch\"](function (err) {\n          return reject(res);\n        });\n      });\n    }\n  }, {\n    key: \"get\",\n    value: function get(endpoint, authToken, loginData) {\n      var _this5 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/appdata/\".concat(_this5.app_id, \"/\").concat(endpoint);\n        var headers;\n\n        if (loginData) {\n          var username = loginData.username,\n              password = loginData.password;\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Basic \" + btoa(username + \":\" + password)\n          };\n        }\n\n        if (authToken) {\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Kinvey \" + authToken\n          };\n        }\n\n        fetch(url, {\n          method: \"GET\",\n          headers: headers\n        }).then(function (res) {\n          if (res.ok) return res.json();\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"post\",\n    value: function post(endpoint, data, authToken, loginData) {\n      var _this6 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/appdata/\".concat(_this6.app_id, \"/\").concat(endpoint);\n        var headers;\n\n        if (loginData) {\n          var username = loginData.username,\n              password = loginData.password;\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Basic \" + btoa(username + \":\" + password)\n          };\n        }\n\n        if (authToken) {\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Kinvey \" + authToken\n          };\n        }\n\n        fetch(url, {\n          method: \"POST\",\n          headers: headers,\n          body: JSON.stringify(data)\n        }).then(function (res) {\n          if (res.status === 201) return res.json();\n          throw res;\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(endPoint, id, authToken, loginData) {\n      var _this7 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/appdata/\".concat(_this7.app_id, \"/\").concat(endPoint, \"/\").concat(id);\n        var headers;\n\n        if (loginData) {\n          var username = loginData.username,\n              password = loginData.password;\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Basic \" + btoa(username + \":\" + password)\n          };\n        }\n\n        if (authToken) {\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Kinvey \" + authToken\n          };\n        }\n\n        fetch(url, {\n          method: \"DELETE\",\n          headers: headers\n        }).then(function (res) {\n          if (res.ok) return res.json();\n          throw res;\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"edit\",\n    value: function edit(endPoint, id, data, authToken, loginData) {\n      var _this8 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/appdata/\".concat(_this8.app_id, \"/\").concat(endPoint, \"/\").concat(id);\n        var headers;\n\n        if (loginData) {\n          var username = loginData.username,\n              password = loginData.password;\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Basic \" + btoa(username + \":\" + password)\n          };\n          console.log(headers);\n        }\n\n        if (authToken) {\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Kinvey \" + authToken\n          };\n        }\n\n        fetch(url, {\n          method: \"PUT\",\n          headers: headers,\n          body: JSON.stringify(data)\n        }).then(function (res) {\n          if (res.ok) return res.json();\n          throw res;\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }]);\n\n  return Kinvey;\n}();\n\n\n\n//# sourceURL=webpack://routing-exercise-routing/./scripts/kinvey.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/app.js");
/******/ 	
/******/ })()
;