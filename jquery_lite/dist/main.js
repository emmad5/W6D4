/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  constructor(HTMLElements) {\n    this.HTMLElements = HTMLElements;\n  }\n  \n  html(string) {\n    if (string === null) {\n      return this.HTMLElements[0].innerHTML;\n    } else {\n      this.HTMLElements.forEach( (el) => {\n        el.innerHTML = string;\n      });\n    }\n  }\n  \n  \n  empty() {\n    this.html('');\n  }\n  \n  append(element) {\n    if (element instanceof DomNodeCollection){\n      this.HTMLElements.forEach( (el) => {\n        element.HTMLElements.forEach ( (elmt) => {\n          el.appendChild(elmt);\n        });\n      });\n    } else if (typeof element === 'object') {\n      this.HTMLElements.forEach( (el) => {\n        el.appendChild(element);\n      });\n    } else {\n      this.HTMLElements.forEach( (el) => {\n        el.innerHTML += element;\n      });\n    }\n  }\n  \n  attr (attribute) {\n    this.HTMLElements.forEach( (el) => {\n      el.outerHTML += attribute;\n    });\n  }\n  \n  addClass(string) {\n    this.HTMLElements.forEach( (el) => {\n      el.class += string;\n    });\n  }\n  \n  removeClass(string) {\n    this.HTMLElements.forEach( (el) => {\n      if (string === null) {\n        el.class = '';\n      } else {\n        el.class -= string;\n      }\n    });\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nwindow.$l = (selector) => {\n  if (typeof selector === 'object') {\n    return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0___default.a([selector]);\n    \n  } else if (typeof selector === 'string'){\n    const array = Array.from(document.querySelectorAll(selector));\n    return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0___default.a(array);\n  }\n  //So: our core function can receive either a single HTMLElement\n  // or a string with a CSS selector \n  // and in either case the return value will be a DOMNodeCollection.\n};\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });