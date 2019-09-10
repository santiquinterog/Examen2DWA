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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\n\r\nvar header = document.createElement(\"header\");\r\nheader.setAttribute(\"class\", \"header\");\r\nvar title = document.createTextNode(\"Sign language\");\r\nheader.appendChild(title);\r\ndocument.body.appendChild(header);\r\n\r\n\r\nvar main = document.createElement(\"main\");\r\n\r\nvar divP = document.createElement(\"div\");\r\ndivP.setAttribute(\"class\", \"divP\");\r\nmain.appendChild(divP);\r\n\r\nvar divS = document.createElement(\"div\");\r\ndivS.setAttribute(\"class\", \"divS\");\r\nmain.appendChild(divS);\r\n\r\nvar letra1 = document.createElement(\"div\");\r\nvar texto1 = document.createTextNode(\"V\");\r\nletra1.appendChild(texto1);\r\nletra1.setAttribute(\"class\", \"divLetra\");\r\nvar letra2 = document.createElement(\"div\");\r\nvar texto2 = document.createTextNode(\"T\");\r\nletra2.appendChild(texto2);\r\nletra2.setAttribute(\"class\", \"divLetra\");\r\nvar letra3 = document.createElement(\"div\");\r\nvar texto3 = document.createTextNode(\"R\");\r\nletra3.appendChild(texto3);\r\nletra3.setAttribute(\"class\", \"divLetra\");\r\nvar letra4 = document.createElement(\"div\");\r\nvar texto4 = document.createTextNode(\"E\");\r\nletra4.appendChild(texto4);\r\nletra4.setAttribute(\"class\", \"divLetra\");\r\nvar letra5 = document.createElement(\"div\");\r\nvar texto5 = document.createTextNode(\"W\");\r\nletra5.appendChild(texto5);\r\nletra5.setAttribute(\"class\", \"divLetra\");\r\nvar letra6 = document.createElement(\"div\");\r\nvar texto6 = document.createTextNode(\"O\");\r\nletra6.appendChild(texto6);\r\nletra6.setAttribute(\"class\", \"divLetra\");\r\nvar letra7 = document.createElement(\"div\");\r\nvar texto7 = document.createTextNode(\"L\");\r\nletra7.appendChild(texto7);\r\nletra7.setAttribute(\"class\", \"divLetra\");\r\nvar letra8 = document.createElement(\"div\");\r\nvar texto8 = document.createTextNode(\"I\");\r\nletra8.appendChild(texto8);\r\nletra8.setAttribute(\"class\", \"divLetra\");\r\n\r\ndivS.appendChild(letra1);\r\ndivS.appendChild(letra2);\r\ndivS.appendChild(letra3);\r\ndivS.appendChild(letra4);\r\ndivS.appendChild(letra5);\r\ndivS.appendChild(letra6);\r\ndivS.appendChild(letra7);\r\ndivS.appendChild(letra8);\r\n\r\n\r\n\r\ndocument.body.appendChild(main);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG52YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuaGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyXCIpO1xyXG52YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNpZ24gbGFuZ3VhZ2VcIik7XHJcbmhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcblxyXG52YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG5cclxudmFyIGRpdlAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZQLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGl2UFwiKTtcclxubWFpbi5hcHBlbmRDaGlsZChkaXZQKTtcclxuXHJcbnZhciBkaXZTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZGl2Uy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpdlNcIik7XHJcbm1haW4uYXBwZW5kQ2hpbGQoZGl2Uyk7XHJcblxyXG52YXIgbGV0cmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudmFyIHRleHRvMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVlwiKTtcclxubGV0cmExLmFwcGVuZENoaWxkKHRleHRvMSk7XHJcbmxldHJhMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpdkxldHJhXCIpO1xyXG52YXIgbGV0cmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudmFyIHRleHRvMiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVFwiKTtcclxubGV0cmEyLmFwcGVuZENoaWxkKHRleHRvMik7XHJcbmxldHJhMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpdkxldHJhXCIpO1xyXG52YXIgbGV0cmEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudmFyIHRleHRvMyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUlwiKTtcclxubGV0cmEzLmFwcGVuZENoaWxkKHRleHRvMyk7XHJcbmxldHJhMy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpdkxldHJhXCIpO1xyXG52YXIgbGV0cmE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudmFyIHRleHRvNCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRVwiKTtcclxubGV0cmE0LmFwcGVuZENoaWxkKHRleHRvNCk7XHJcbmxldHJhNC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpdkxldHJhXCIpO1xyXG52YXIgbGV0cmE1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudmFyIHRleHRvNSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiV1wiKTtcclxubGV0cmE1LmFwcGVuZENoaWxkKHRleHRvNSk7XHJcbmxldHJhNS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpdkxldHJhXCIpO1xyXG52YXIgbGV0cmE2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudmFyIHRleHRvNiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiT1wiKTtcclxubGV0cmE2LmFwcGVuZENoaWxkKHRleHRvNik7XHJcbmxldHJhNi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpdkxldHJhXCIpO1xyXG52YXIgbGV0cmE3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudmFyIHRleHRvNyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTFwiKTtcclxubGV0cmE3LmFwcGVuZENoaWxkKHRleHRvNyk7XHJcbmxldHJhNy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpdkxldHJhXCIpO1xyXG52YXIgbGV0cmE4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudmFyIHRleHRvOCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSVwiKTtcclxubGV0cmE4LmFwcGVuZENoaWxkKHRleHRvOCk7XHJcbmxldHJhOC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpdkxldHJhXCIpO1xyXG5cclxuZGl2Uy5hcHBlbmRDaGlsZChsZXRyYTEpO1xyXG5kaXZTLmFwcGVuZENoaWxkKGxldHJhMik7XHJcbmRpdlMuYXBwZW5kQ2hpbGQobGV0cmEzKTtcclxuZGl2Uy5hcHBlbmRDaGlsZChsZXRyYTQpO1xyXG5kaXZTLmFwcGVuZENoaWxkKGxldHJhNSk7XHJcbmRpdlMuYXBwZW5kQ2hpbGQobGV0cmE2KTtcclxuZGl2Uy5hcHBlbmRDaGlsZChsZXRyYTcpO1xyXG5kaXZTLmFwcGVuZENoaWxkKGxldHJhOCk7XHJcblxyXG5cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });