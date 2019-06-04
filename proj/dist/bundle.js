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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst controller_1 = __webpack_require__(/*! ./controller */ \"./app/controller.js\");\r\nvar controller = new controller_1.Controller(\"aaa\");\r\ncontroller.print();\r\n/*\r\nfunction instructionSubmission(event: any){\r\n    event.preventDefault();\r\n    let instruction = (<HTMLInputElement> document.getElementById('instruction')).value;\r\n    // app.qualquerCoisaQueQueremosChamarAqui()\r\n    console.log(\"EXECUTOUUUUU\");\r\n}\r\n\r\nwindow.onload = () => {\r\n    \r\n    var formElem = document.getElementById('REPL_form');\r\n    if(formElem) {\r\n        formElem.addEventListener(\"submit\", instructionSubmission, false);\r\n    }\r\n}*/ \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcz85ZmVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJcIik7XHJcbnZhciBjb250cm9sbGVyID0gbmV3IGNvbnRyb2xsZXJfMS5Db250cm9sbGVyKFwiYWFhXCIpO1xyXG5jb250cm9sbGVyLnByaW50KCk7XHJcbi8qXHJcbmZ1bmN0aW9uIGluc3RydWN0aW9uU3VibWlzc2lvbihldmVudDogYW55KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgaW5zdHJ1Y3Rpb24gPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVjdGlvbicpKS52YWx1ZTtcclxuICAgIC8vIGFwcC5xdWFscXVlckNvaXNhUXVlUXVlcmVtb3NDaGFtYXJBcXVpKClcclxuICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUT1VVVVVVXCIpO1xyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICB2YXIgZm9ybUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUkVQTF9mb3JtJyk7XHJcbiAgICBpZihmb3JtRWxlbSkge1xyXG4gICAgICAgIGZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaW5zdHJ1Y3Rpb25TdWJtaXNzaW9uLCBmYWxzZSk7XHJcbiAgICB9XHJcbn0qLyBcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/app.js\n");

/***/ }),

/***/ "./app/controller.js":
/*!***************************!*\
  !*** ./app/controller.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Controller {\r\n    constructor(prop) {\r\n        this.prop = prop;\r\n    }\r\n    print() {\r\n        console.log(this.prop);\r\n    }\r\n}\r\nexports.Controller = Controller;\r\n/*\r\nwindow.onload = () => {\r\n    \r\n    var runButton = document.getElementById('run');\r\n    if(runButton) {\r\n        runButton.addEventListener(\"click\", instructionSubmission, false);\r\n    }\r\n}*/ \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9jb250cm9sbGVyLmpzPzA0NjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wID0gcHJvcDtcclxuICAgIH1cclxuICAgIHByaW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db250cm9sbGVyID0gQ29udHJvbGxlcjtcclxuLypcclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgdmFyIHJ1bkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdydW4nKTtcclxuICAgIGlmKHJ1bkJ1dHRvbikge1xyXG4gICAgICAgIHJ1bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5zdHJ1Y3Rpb25TdWJtaXNzaW9uLCBmYWxzZSk7XHJcbiAgICB9XHJcbn0qLyBcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/controller.js\n");

/***/ })

/******/ });