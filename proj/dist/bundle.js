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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//import {Command} from './command'\r\n//var app = new Command();\r\nfunction instructionSubmission(event) {\r\n    event.preventDefault();\r\n    let instruction = document.getElementById('instruction').value;\r\n    // app.qualquerCoisaQueQueremosChamarAqui()\r\n    console.log(\"EXECUTOUUUUU\");\r\n}\r\nwindow.onload = () => {\r\n    var formElem = document.getElementById('REPL_form');\r\n    if (formElem) {\r\n        formElem.addEventListener(\"submit\", instructionSubmission, false);\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcz85ZmVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG4vL2ltcG9ydCB7Q29tbWFuZH0gZnJvbSAnLi9jb21tYW5kJ1xyXG4vL3ZhciBhcHAgPSBuZXcgQ29tbWFuZCgpO1xyXG5mdW5jdGlvbiBpbnN0cnVjdGlvblN1Ym1pc3Npb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdHJ1Y3Rpb24nKS52YWx1ZTtcclxuICAgIC8vIGFwcC5xdWFscXVlckNvaXNhUXVlUXVlcmVtb3NDaGFtYXJBcXVpKClcclxuICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUT1VVVVVVXCIpO1xyXG59XHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgZm9ybUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUkVQTF9mb3JtJyk7XHJcbiAgICBpZiAoZm9ybUVsZW0pIHtcclxuICAgICAgICBmb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGluc3RydWN0aW9uU3VibWlzc2lvbiwgZmFsc2UpO1xyXG4gICAgfVxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/app.js\n");

/***/ })

/******/ });