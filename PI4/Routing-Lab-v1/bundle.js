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

/***/ "./src/Kinvey.js":
/*!***********************!*\
  !*** ./src/Kinvey.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Kinvey)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/** @format */\nvar Kinvey = /*#__PURE__*/function () {\n  function Kinvey(app_id, app_secret) {\n    _classCallCheck(this, Kinvey);\n\n    this.app_id = app_id;\n    this.app_secret = app_secret;\n  } //  Test Kinvey app\n  //  data is the username/pass object\n\n\n  _createClass(Kinvey, [{\n    key: \"test\",\n    value: function test(data) {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/appdata/\".concat(_this.app_id);\n        var username = data.username,\n            password = data.password;\n        var headers = {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Basic \" + btoa(username + \":\" + password)\n        };\n        fetch(url, {\n          method: \"GET\",\n          headers: headers\n        }).then(function (res) {\n          if (res.ok) {\n            return res.json();\n          }\n\n          throw res;\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(res);\n        });\n      });\n    } // LOGIN USER\n\n  }, {\n    key: \"login\",\n    value: function login(data) {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/user/\".concat(_this2.app_id, \"/login\");\n        var username = data.username,\n            password = data.password;\n        var headers = {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Basic \" + btoa(username + \":\" + password)\n        };\n        fetch(url, {\n          method: \"POST\",\n          headers: headers,\n          body: JSON.stringify(data)\n        }).then(function (res) {\n          if (res.ok) {\n            return res.json();\n          }\n\n          throw res;\n        }).then(function (data) {\n          return resolve(data._kmd.authtoken);\n        })[\"catch\"](function (err) {\n          return reject(res);\n        });\n      });\n    } // Signup\n\n  }, {\n    key: \"signup\",\n    value: function signup(data) {\n      var _this3 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/user/\".concat(_this3.app_id);\n        var headers = {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Basic \" + btoa(_this3.app_id + \":\" + _this3.app_secret)\n        };\n        fetch(url, {\n          method: \"POST\",\n          headers: headers,\n          body: JSON.stringify(data)\n        }).then(function (res) {\n          if (res.ok) {\n            return res.json();\n          }\n\n          throw res;\n        }).then(function (data) {\n          return resolve(data._kmd.authtoken);\n        })[\"catch\"](function (err) {\n          return reject(res);\n        });\n      });\n    } // Logout a user\n\n  }, {\n    key: \"logout\",\n    value: function logout(authToken) {\n      var _this4 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/user/\".concat(_this4.app_id, \"/_logout\");\n        var headers = {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Kinvey \" + authToken\n        };\n        fetch(url, {\n          method: \"POST\",\n          headers: headers\n        }).then(function (res) {\n          if (res.status === 204) {\n            resolve({\n              msg: \"User logged Out\"\n            });\n          }\n        })[\"catch\"](function (err) {\n          return reject(res);\n        });\n      });\n    }\n  }, {\n    key: \"get\",\n    value: function get(endpoint, authToken, loginData) {\n      var _this5 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/appdata/\".concat(_this5.app_id, \"/\").concat(endpoint);\n        var headers;\n\n        if (loginData) {\n          var username = loginData.username,\n              password = loginData.password;\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Basic \" + btoa(username + \":\" + password)\n          };\n        }\n\n        if (authToken) {\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Kinvey \" + authToken\n          };\n        }\n\n        fetch(url, {\n          method: \"GET\",\n          headers: headers\n        }).then(function (res) {\n          if (res.ok) return res.json();\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"post\",\n    value: function post(endpoint, data, authToken, loginData) {\n      var _this6 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/appdata/\".concat(_this6.app_id, \"/\").concat(endpoint);\n        var headers;\n\n        if (loginData) {\n          var username = loginData.username,\n              password = loginData.password;\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Basic \" + btoa(username + \":\" + password)\n          };\n        }\n\n        if (authToken) {\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Kinvey \" + authToken\n          };\n        }\n\n        fetch(url, {\n          method: \"POST\",\n          headers: headers,\n          body: JSON.stringify(data)\n        }).then(function (res) {\n          if (res.status === 201) return res.json();\n          throw res;\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(endPoint, id, authToken, loginData) {\n      var _this7 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/appdata/\".concat(_this7.app_id, \"/\").concat(endPoint, \"/\").concat(id);\n        var headers;\n\n        if (loginData) {\n          var username = loginData.username,\n              password = loginData.password;\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Basic \" + btoa(username + \":\" + password)\n          };\n        }\n\n        if (authToken) {\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Kinvey \" + authToken\n          };\n        }\n\n        fetch(url, {\n          method: \"DELETE\",\n          headers: headers\n        }).then(function (res) {\n          if (res.ok) return res.json();\n          throw res;\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"edit\",\n    value: function edit(endPoint, id, data, authToken, loginData) {\n      var _this8 = this;\n\n      return new Promise(function (resolve, reject) {\n        var url = \"https://baas.kinvey.com/appdata/\".concat(_this8.app_id, \"/\").concat(endPoint, \"/\").concat(id);\n        var headers;\n\n        if (loginData) {\n          var username = loginData.username,\n              password = loginData.password;\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Basic \" + btoa(username + \":\" + password)\n          };\n          console.log(headers);\n        }\n\n        if (authToken) {\n          headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Kinvey \" + authToken\n          };\n        }\n\n        fetch(url, {\n          method: \"PUT\",\n          headers: headers,\n          body: JSON.stringify(data)\n        }).then(function (res) {\n          if (res.ok) return res.json();\n          throw res;\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }]);\n\n  return Kinvey;\n}();\n\n\n\n//# sourceURL=webpack://08.-js-applications-routing-lab-resources/./src/Kinvey.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Kinvey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kinvey */ \"./src/Kinvey.js\");\n/* harmony import */ var _controllers_furCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/furCtrl */ \"./src/controllers/furCtrl.js\");\n/* harmony import */ var _controllers_authCtrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/authCtrl */ \"./src/controllers/authCtrl.js\");\n// Link Kinvey DB\n\nwindow.db = new _Kinvey__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"kid_ryNwWsM9F\", \"8a4311885b5c4715a2cee67476f70458\");\n\n\nvar app = Sammy(\"#container\", function () {\n  // Configure sammy with HBS\n  this.use(\"Handlebars\", \"hbs\"); //@route  GET /\n  //@desc   render Home Page\n  //@access Public\n\n  this.get(\"/\", _controllers_furCtrl__WEBPACK_IMPORTED_MODULE_1__.getHome); //@route  GET /furniture/create\n  //@desc   render create page\n  //@access Private\n\n  this.get(\"/create\", _controllers_furCtrl__WEBPACK_IMPORTED_MODULE_1__.getCreate); //@route  GET /login\n  //@desc   render login page\n  //@access Public\n\n  this.get(\"/login\", _controllers_authCtrl__WEBPACK_IMPORTED_MODULE_2__.getLogin); //@route  POST /login\n  //@desc   login a User\n  //@access Private\n  // this.get(\"/login\", postLogin);\n  //@route  GET /signup\n  //@desc   render the signup page\n  //@access Public\n\n  this.get(\"/signup\", _controllers_authCtrl__WEBPACK_IMPORTED_MODULE_2__.getSignup); //@route  POST /signup\n  //@desc   signup the user \n  //@access Private\n\n  this.post(\"/signup\", _controllers_authCtrl__WEBPACK_IMPORTED_MODULE_2__.postSignup);\n}); // load the initial route\n\napp.run(\"/login\");\n\n//# sourceURL=webpack://08.-js-applications-routing-lab-resources/./src/app.js?");

/***/ }),

/***/ "./src/controllers/authCtrl.js":
/*!*************************************!*\
  !*** ./src/controllers/authCtrl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLogin\": () => (/* binding */ getLogin),\n/* harmony export */   \"getSignup\": () => (/* binding */ getSignup),\n/* harmony export */   \"postSignup\": () => (/* binding */ postSignup)\n/* harmony export */ });\nfunction getLogin() {\n  this.loadPartials({\n    navbar: \"./views/partials/navbar.hbs\",\n    notifications: \"./views/partials/notifications.hbs\"\n  }).then(function () {\n    this.render(\"./views/auth/login.hbs\", {}).swap();\n  });\n}\nfunction getSignup() {\n  this.loadPartials({\n    navbar: \"./views/partials/navbar.hbs\",\n    notifications: \"./views/partials/notifications.hbs\"\n  }).then(function () {\n    this.render(\"./views/auth/signup.hbs\", {}).swap();\n  });\n}\nfunction postSignup() {\n  var _this$params = this.params,\n      email = _this$params.email,\n      password = _this$params.password,\n      password2 = _this$params.password2;\n  console.log(email, password);\n  db.signup({\n    username: email,\n    password: password\n  }).then(function () {\n    console.log(res);\n  });\n}\n\n//# sourceURL=webpack://08.-js-applications-routing-lab-resources/./src/controllers/authCtrl.js?");

/***/ }),

/***/ "./src/controllers/furCtrl.js":
/*!************************************!*\
  !*** ./src/controllers/furCtrl.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHome\": () => (/* binding */ getHome),\n/* harmony export */   \"getCreate\": () => (/* binding */ getCreate)\n/* harmony export */ });\nfunction getHome() {\n  this.loadPartials({\n    navbar: \"./views/partials/navbar.hbs\",\n    notifications: \"./views/partials/notifications.hbs\"\n  }).then(function () {\n    this.render(\"./views/app/home.hbs\", {}).swap();\n  });\n}\nfunction getCreate() {\n  this.loadPartials({\n    navbar: \"./views/partials/navbar.hbs\",\n    notifications: \"./views/partials/notifications.hbs\"\n  }).then(function () {\n    this.render(\"./views/app/create.hbs\", {}).swap();\n  });\n}\n\n//# sourceURL=webpack://08.-js-applications-routing-lab-resources/./src/controllers/furCtrl.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;