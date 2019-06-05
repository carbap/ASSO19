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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Kernel_1 = __webpack_require__(/*! ./model/Kernel */ \"./app/model/Kernel.js\");\r\nconst UI_1 = __webpack_require__(/*! ./view/UI */ \"./app/view/UI.js\");\r\nconst Controller_1 = __webpack_require__(/*! ./controller/Controller */ \"./app/controller/Controller.js\");\r\nwindow.onload = () => {\r\n    var core1 = \"code from core1\"; // TO DO: replace by document.getElementById\r\n    var core2 = \"code from core2\";\r\n    var core3 = \"code from core3\";\r\n    var model = new Kernel_1.Kernel(core1, core2, core3);\r\n    var canvas = null;\r\n    var compileButton = document.getElementById('compile');\r\n    var nextButton = document.getElementById('next');\r\n    var runButton = document.getElementById('run');\r\n    var view = new UI_1.UI(canvas, compileButton, nextButton, runButton);\r\n    var controller = new Controller_1.Controller(model, view);\r\n    if (compileButton)\r\n        compileButton.addEventListener(\"click\", controller.compile);\r\n    if (nextButton)\r\n        nextButton.addEventListener(\"click\", controller.next);\r\n    if (runButton)\r\n        runButton.addEventListener(\"click\", controller.run);\r\n};\r\n/*function instructionSubmission(event: any){\r\n    event.preventDefault();\r\n    let instruction = (<HTMLInputElement> document.getElementById('instruction')).value;\r\n    // app.qualquerCoisaQueQueremosChamarAqui()\r\n    console.log(\"EXECUTOUUUUU\");\r\n}*/ \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcz85ZmVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEtlcm5lbF8xID0gcmVxdWlyZShcIi4vbW9kZWwvS2VybmVsXCIpO1xyXG5jb25zdCBVSV8xID0gcmVxdWlyZShcIi4vdmlldy9VSVwiKTtcclxuY29uc3QgQ29udHJvbGxlcl8xID0gcmVxdWlyZShcIi4vY29udHJvbGxlci9Db250cm9sbGVyXCIpO1xyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgdmFyIGNvcmUxID0gXCJjb2RlIGZyb20gY29yZTFcIjsgLy8gVE8gRE86IHJlcGxhY2UgYnkgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWRcclxuICAgIHZhciBjb3JlMiA9IFwiY29kZSBmcm9tIGNvcmUyXCI7XHJcbiAgICB2YXIgY29yZTMgPSBcImNvZGUgZnJvbSBjb3JlM1wiO1xyXG4gICAgdmFyIG1vZGVsID0gbmV3IEtlcm5lbF8xLktlcm5lbChjb3JlMSwgY29yZTIsIGNvcmUzKTtcclxuICAgIHZhciBjYW52YXMgPSBudWxsO1xyXG4gICAgdmFyIGNvbXBpbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGlsZScpO1xyXG4gICAgdmFyIG5leHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG4gICAgdmFyIHJ1bkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdydW4nKTtcclxuICAgIHZhciB2aWV3ID0gbmV3IFVJXzEuVUkoY2FudmFzLCBjb21waWxlQnV0dG9uLCBuZXh0QnV0dG9uLCBydW5CdXR0b24pO1xyXG4gICAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcl8xLkNvbnRyb2xsZXIobW9kZWwsIHZpZXcpO1xyXG4gICAgaWYgKGNvbXBpbGVCdXR0b24pXHJcbiAgICAgICAgY29tcGlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udHJvbGxlci5jb21waWxlKTtcclxuICAgIGlmIChuZXh0QnV0dG9uKVxyXG4gICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRyb2xsZXIubmV4dCk7XHJcbiAgICBpZiAocnVuQnV0dG9uKVxyXG4gICAgICAgIHJ1bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udHJvbGxlci5ydW4pO1xyXG59O1xyXG4vKmZ1bmN0aW9uIGluc3RydWN0aW9uU3VibWlzc2lvbihldmVudDogYW55KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgaW5zdHJ1Y3Rpb24gPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVjdGlvbicpKS52YWx1ZTtcclxuICAgIC8vIGFwcC5xdWFscXVlckNvaXNhUXVlUXVlcmVtb3NDaGFtYXJBcXVpKClcclxuICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUT1VVVVVVXCIpO1xyXG59Ki8gXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/app.js\n");

/***/ }),

/***/ "./app/controller/Controller.js":
/*!**************************************!*\
  !*** ./app/controller/Controller.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Controller {\r\n    constructor(model, view) {\r\n        this.model = model;\r\n        this.view = view;\r\n    }\r\n    compile() {\r\n        if (this.model.compile()) {\r\n            // this.view.activate step and run buttons\r\n        }\r\n        else {\r\n            // this.view.disactivate step and run buttons\r\n        }\r\n    }\r\n    next() {\r\n        this.model.runNext();\r\n    }\r\n    run() {\r\n        this.model.runAll();\r\n    }\r\n}\r\nexports.Controller = Controller;\r\n/*\r\nwindow.onload = () => {\r\n    \r\n    var runButton = document.getElementById('run');\r\n    if(runButton) {\r\n        runButton.addEventListener(\"click\", instructionSubmission, false);\r\n    }\r\n}*/ \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29udHJvbGxlci9Db250cm9sbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRyb2xsZXIvQ29udHJvbGxlci5qcz8xNmIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgIH1cclxuICAgIGNvbXBpbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuY29tcGlsZSgpKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudmlldy5hY3RpdmF0ZSBzdGVwIGFuZCBydW4gYnV0dG9uc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy52aWV3LmRpc2FjdGl2YXRlIHN0ZXAgYW5kIHJ1biBidXR0b25zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLnJ1bk5leHQoKTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLnJ1bkFsbCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29udHJvbGxlciA9IENvbnRyb2xsZXI7XHJcbi8qXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHZhciBydW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnVuJyk7XHJcbiAgICBpZihydW5CdXR0b24pIHtcclxuICAgICAgICBydW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluc3RydWN0aW9uU3VibWlzc2lvbiwgZmFsc2UpO1xyXG4gICAgfVxyXG59Ki8gXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/controller/Controller.js\n");

/***/ }),

/***/ "./app/model/Kernel.js":
/*!*****************************!*\
  !*** ./app/model/Kernel.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Kernel {\r\n    constructor(core1, core2, core3) {\r\n        this.errors = [];\r\n        this.commands = []; //use Iterator\r\n        this.commandIterator = 0; // Index of the next command to be executed\r\n        this.buildSucceeded = false;\r\n        this.runtimeShapes = []; // shapes CREATED by the user and their current state (might have suffered translates, rotations, etc...)\r\n        this.drawnShapes = []; // shapes who have been in a DRAW instruction (the shape state is the one at the time of the DRAW instruction, NOT the updated one)\r\n        this.core1 = core1;\r\n        this.core2 = core2;\r\n        this.core3 = core3;\r\n    }\r\n    compile() {\r\n        // clear errors and commands\r\n        // interpret core1, core2 and core3\r\n        // var expression = new MasterExpression(this.core1)\r\n        // expression.interpret()\r\n        // this will set errors and/or commands\r\n        // example: core1 has errors but core2 hasn't, so both 'errors' and 'commands' will be non-empty\r\n        // if there are errors\r\n        // buildSucceeded = false\r\n        // else (no errors)\r\n        // buildSucceeded = true;\r\n        // sort commands (NOTE: maybe commands should know what core they are from and what line)\r\n        return this.buildSucceeded;\r\n    }\r\n    hasNext() {\r\n        return this.commandIterator >= this.commands.length;\r\n    }\r\n    runNext() {\r\n        // Execute next command\r\n        if (!this.hasNext())\r\n            return;\r\n        this.commands[this.commandIterator].execute();\r\n        this.commandIterator++;\r\n    }\r\n    runAll() {\r\n        // Run all commands from the current point (Iterator)\r\n        while (this.hasNext()) {\r\n            this.runNext();\r\n        }\r\n    }\r\n    getShape() {\r\n    }\r\n    getRuntimeShapes() {\r\n        return this.runtimeShapes;\r\n    }\r\n}\r\nexports.Kernel = Kernel;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbW9kZWwvS2VybmVsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVsL0tlcm5lbC5qcz9iNWZmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEtlcm5lbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb3JlMSwgY29yZTIsIGNvcmUzKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbW1hbmRzID0gW107IC8vdXNlIEl0ZXJhdG9yXHJcbiAgICAgICAgdGhpcy5jb21tYW5kSXRlcmF0b3IgPSAwOyAvLyBJbmRleCBvZiB0aGUgbmV4dCBjb21tYW5kIHRvIGJlIGV4ZWN1dGVkXHJcbiAgICAgICAgdGhpcy5idWlsZFN1Y2NlZWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucnVudGltZVNoYXBlcyA9IFtdOyAvLyBzaGFwZXMgQ1JFQVRFRCBieSB0aGUgdXNlciBhbmQgdGhlaXIgY3VycmVudCBzdGF0ZSAobWlnaHQgaGF2ZSBzdWZmZXJlZCB0cmFuc2xhdGVzLCByb3RhdGlvbnMsIGV0Yy4uLilcclxuICAgICAgICB0aGlzLmRyYXduU2hhcGVzID0gW107IC8vIHNoYXBlcyB3aG8gaGF2ZSBiZWVuIGluIGEgRFJBVyBpbnN0cnVjdGlvbiAodGhlIHNoYXBlIHN0YXRlIGlzIHRoZSBvbmUgYXQgdGhlIHRpbWUgb2YgdGhlIERSQVcgaW5zdHJ1Y3Rpb24sIE5PVCB0aGUgdXBkYXRlZCBvbmUpXHJcbiAgICAgICAgdGhpcy5jb3JlMSA9IGNvcmUxO1xyXG4gICAgICAgIHRoaXMuY29yZTIgPSBjb3JlMjtcclxuICAgICAgICB0aGlzLmNvcmUzID0gY29yZTM7XHJcbiAgICB9XHJcbiAgICBjb21waWxlKCkge1xyXG4gICAgICAgIC8vIGNsZWFyIGVycm9ycyBhbmQgY29tbWFuZHNcclxuICAgICAgICAvLyBpbnRlcnByZXQgY29yZTEsIGNvcmUyIGFuZCBjb3JlM1xyXG4gICAgICAgIC8vIHZhciBleHByZXNzaW9uID0gbmV3IE1hc3RlckV4cHJlc3Npb24odGhpcy5jb3JlMSlcclxuICAgICAgICAvLyBleHByZXNzaW9uLmludGVycHJldCgpXHJcbiAgICAgICAgLy8gdGhpcyB3aWxsIHNldCBlcnJvcnMgYW5kL29yIGNvbW1hbmRzXHJcbiAgICAgICAgLy8gZXhhbXBsZTogY29yZTEgaGFzIGVycm9ycyBidXQgY29yZTIgaGFzbid0LCBzbyBib3RoICdlcnJvcnMnIGFuZCAnY29tbWFuZHMnIHdpbGwgYmUgbm9uLWVtcHR5XHJcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIGVycm9yc1xyXG4gICAgICAgIC8vIGJ1aWxkU3VjY2VlZGVkID0gZmFsc2VcclxuICAgICAgICAvLyBlbHNlIChubyBlcnJvcnMpXHJcbiAgICAgICAgLy8gYnVpbGRTdWNjZWVkZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIHNvcnQgY29tbWFuZHMgKE5PVEU6IG1heWJlIGNvbW1hbmRzIHNob3VsZCBrbm93IHdoYXQgY29yZSB0aGV5IGFyZSBmcm9tIGFuZCB3aGF0IGxpbmUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWNjZWVkZWQ7XHJcbiAgICB9XHJcbiAgICBoYXNOZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRJdGVyYXRvciA+PSB0aGlzLmNvbW1hbmRzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJ1bk5leHQoKSB7XHJcbiAgICAgICAgLy8gRXhlY3V0ZSBuZXh0IGNvbW1hbmRcclxuICAgICAgICBpZiAoIXRoaXMuaGFzTmV4dCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jb21tYW5kc1t0aGlzLmNvbW1hbmRJdGVyYXRvcl0uZXhlY3V0ZSgpO1xyXG4gICAgICAgIHRoaXMuY29tbWFuZEl0ZXJhdG9yKys7XHJcbiAgICB9XHJcbiAgICBydW5BbGwoKSB7XHJcbiAgICAgICAgLy8gUnVuIGFsbCBjb21tYW5kcyBmcm9tIHRoZSBjdXJyZW50IHBvaW50IChJdGVyYXRvcilcclxuICAgICAgICB3aGlsZSAodGhpcy5oYXNOZXh0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5ydW5OZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0U2hhcGUoKSB7XHJcbiAgICB9XHJcbiAgICBnZXRSdW50aW1lU2hhcGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJ1bnRpbWVTaGFwZXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5LZXJuZWwgPSBLZXJuZWw7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/model/Kernel.js\n");

/***/ }),

/***/ "./app/view/UI.js":
/*!************************!*\
  !*** ./app/view/UI.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass UI {\r\n    constructor(canvas, compileButton, stepButton, runButton) {\r\n        this.canvas = canvas;\r\n        this.compileButton = compileButton;\r\n        this.stepButton = stepButton;\r\n        this.runButton = runButton;\r\n    }\r\n    getCanvas() {\r\n        return this.canvas;\r\n    }\r\n}\r\nexports.UI = UI;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvdmlldy9VSS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC92aWV3L1VJLmpzPzM3ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgVUkge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjb21waWxlQnV0dG9uLCBzdGVwQnV0dG9uLCBydW5CdXR0b24pIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmNvbXBpbGVCdXR0b24gPSBjb21waWxlQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuc3RlcEJ1dHRvbiA9IHN0ZXBCdXR0b247XHJcbiAgICAgICAgdGhpcy5ydW5CdXR0b24gPSBydW5CdXR0b247XHJcbiAgICB9XHJcbiAgICBnZXRDYW52YXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVUkgPSBVSTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/view/UI.js\n");

/***/ })

/******/ });