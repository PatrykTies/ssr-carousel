module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/App.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-3354999716",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3354999716",
    __self: this
  }, "*{font-family:Menlo,Monaco,'Lucida Console','Liberation Mono', 'DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22bad9;}p{font-size:14px;line-height:24px;}article{margin:0 auto;max-width:650px;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIsQUFLMkIsQUFHVCxBQUlLLEFBR0MsQUFJRCxBQUlLLEFBUU0sQUFJWixTQTFCSyxJQTJCcEIsQ0F2QkEsQUFPa0IsQ0FKQyxVQWdCZ0IsRUF0Qm5DLEdBV0EsRUFKQSw2REFPMkIsTUFTM0IsbUJBUlcsU0FDRyxXQXBCZCxDQXFCZSwwRUFDRyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvUkVBQ1Qvd2l0aC1hcG9sbG8tYXBwL2NvbXBvbmVudHMvQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgJ0x1Y2lkYSBDb25zb2xlJywgJ0xpYmVyYXRpb24gTW9ubycsXG4gICAgICAgICAgJ0RlamFWdSBTYW5zIE1vbm8nLCAnQml0c3RyZWFtIFZlcmEgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICBtb25vc3BhY2UsIHNlcmlmO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjJiYWQ5O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBhcnRpY2xlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYWQ5O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5ZGI3O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgICB9XG4gICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9tYWluPlxuKVxuIl19 */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/App.js */"));
});

/***/ }),

/***/ "./components/Arrows.jsx":
/*!*******************************!*\
  !*** ./components/Arrows.jsx ***!
  \*******************************/
/*! exports provided: LeftArrow, RightArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftArrow", function() { return LeftArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightArrow", function() { return RightArrow; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/Arrows.jsx";



var LeftArrow = function LeftArrow(_ref) {
  var customLeftArrow = _ref.customLeftArrow,
      getState = _ref.getState,
      previous = _ref.previous;

  if (customLeftArrow) {
    return react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](customLeftArrow, {
      onClick: function onClick() {
        return previous();
      },
      carouselState: getState()
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    onClick: function onClick() {
      return previous();
    },
    className: "jsx-1485216868" + " " + "react-multiple-carousel__arrow react-multiple-carousel__arrow--left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1485216868",
    __self: this
  }, ".react-multiple-carousel__arrow.jsx-1485216868{position:absolute;outline:none;-webkit-transition:all 0.5s;transition:all 0.5s;border-radius:35px;z-index:1000;border:none;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer;}.react-multiple-carousel__arrow.jsx-1485216868:hover{background:rgba(0,0,0,0.8);}.react-multiple-carousel__arrow.jsx-1485216868::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative;}.react-multiple-carousel__arrow--left.jsx-1485216868{left:calc(4% + 1px);}.react-multiple-carousel__arrow--left.jsx-1485216868::before{content:\"<\";}.react-multiple-carousel__arrow--right.jsx-1485216868{right:calc(4% + 1px);}.react-multiple-carousel__arrow--right.jsx-1485216868::before{content:\">\";left:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Fycm93cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tCLEFBRzZCLEFBYVksQUFHZixBQVVLLEFBR1IsQUFHUyxBQUdULFlBTGQsQUFNWSxHQW5CQyxHQWhCRSxFQTBCZixDQU1BLENBSUEsSUFuQmdCLENBSmhCLElBWnNCLFNBaUJDLHFCQUNILGtCQWpCQyxBQWtCVCxVQUNRLFNBbEJMLFNBbUJmLElBbEJjLFlBQ2tCLDJCQUNmLGVBQ0MsZ0JBQ04sVUFDSyxlQUNqQiIsImZpbGUiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9SRUFDVC93aXRoLWFwb2xsby1hcHAvY29tcG9uZW50cy9BcnJvd3MuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExlZnRBcnJvdyA9ICh7IGN1c3RvbUxlZnRBcnJvdywgZ2V0U3RhdGUsIHByZXZpb3VzIH0pID0+IHtcbiAgaWYgKGN1c3RvbUxlZnRBcnJvdykge1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY3VzdG9tTGVmdEFycm93LCB7XG4gICAgICBvbkNsaWNrOiAoKSA9PiBwcmV2aW91cygpLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogZ2V0U3RhdGUoKVxuICAgIH0pO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwicmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93IHJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tbGVmdFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBwcmV2aW91cygpfVxuICAgID5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgbWluLXdpZHRoOiA0M3B4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdzpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3c6OmJlZm9yZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiByZXZpY29ucztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0IHtcbiAgICAgICAgICBsZWZ0OiBjYWxjKDQlICsgMXB4KTtcbiAgICAgICAgfVxuICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0OjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiPFwiO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLXJpZ2h0IHtcbiAgICAgICAgICByaWdodDogY2FsYyg0JSArIDFweCk7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHQ6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCI+XCI7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbmNvbnN0IFJpZ2h0QXJyb3cgPSAoeyBjdXN0b21SaWdodEFycm93LCBuZXh0LCBnZXRTdGF0ZSB9KSA9PiB7XG4gIGlmIChjdXN0b21SaWdodEFycm93KSB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjdXN0b21SaWdodEFycm93LCB7XG4gICAgICBvbkNsaWNrOiAoKSA9PiBuZXh0KCksXG4gICAgICBjYXJvdXNlbFN0YXRlOiBnZXRTdGF0ZSgpXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJyZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cgcmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1yaWdodFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBuZXh0KCl9XG4gICAgPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBtaW4td2lkdGg6IDQzcHg7XG4gICAgICAgICAgbWluLWhlaWdodDogNDNweDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93OmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdzo6YmVmb3JlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHJldmljb25zO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLWxlZnQge1xuICAgICAgICAgIGxlZnQ6IGNhbGMoNCUgKyAxcHgpO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLWxlZnQ6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCI8XCI7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHQge1xuICAgICAgICAgIHJpZ2h0OiBjYWxjKDQlICsgMXB4KTtcbiAgICAgICAgfVxuICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1yaWdodDo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIj5cIjtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgeyBMZWZ0QXJyb3csIFJpZ2h0QXJyb3cgfTtcbiJdfQ== */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/Arrows.jsx */"));
};

var RightArrow = function RightArrow(_ref2) {
  var customRightArrow = _ref2.customRightArrow,
      next = _ref2.next,
      getState = _ref2.getState;

  if (customRightArrow) {
    return react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](customRightArrow, {
      onClick: function onClick() {
        return next();
      },
      carouselState: getState()
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    onClick: function onClick() {
      return next();
    },
    className: "jsx-1485216868" + " " + "react-multiple-carousel__arrow react-multiple-carousel__arrow--right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1485216868",
    __self: this
  }, ".react-multiple-carousel__arrow.jsx-1485216868{position:absolute;outline:none;-webkit-transition:all 0.5s;transition:all 0.5s;border-radius:35px;z-index:1000;border:none;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer;}.react-multiple-carousel__arrow.jsx-1485216868:hover{background:rgba(0,0,0,0.8);}.react-multiple-carousel__arrow.jsx-1485216868::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative;}.react-multiple-carousel__arrow--left.jsx-1485216868{left:calc(4% + 1px);}.react-multiple-carousel__arrow--left.jsx-1485216868::before{content:\"<\";}.react-multiple-carousel__arrow--right.jsx-1485216868{right:calc(4% + 1px);}.react-multiple-carousel__arrow--right.jsx-1485216868::before{content:\">\";left:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Fycm93cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VrQixBQUc2QixBQWFZLEFBR2YsQUFVSyxBQUdSLEFBR1MsQUFHVCxZQUxkLEFBTVksR0FuQkMsR0FoQkUsRUEwQmYsQ0FNQSxDQUlBLElBbkJnQixDQUpoQixJQVpzQixTQWlCQyxxQkFDSCxrQkFqQkMsQUFrQlQsVUFDUSxTQWxCTCxTQW1CZixJQWxCYyxZQUNrQiwyQkFDZixlQUNDLGdCQUNOLFVBQ0ssZUFDakIiLCJmaWxlIjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvUkVBQ1Qvd2l0aC1hcG9sbG8tYXBwL2NvbXBvbmVudHMvQXJyb3dzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMZWZ0QXJyb3cgPSAoeyBjdXN0b21MZWZ0QXJyb3csIGdldFN0YXRlLCBwcmV2aW91cyB9KSA9PiB7XG4gIGlmIChjdXN0b21MZWZ0QXJyb3cpIHtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGN1c3RvbUxlZnRBcnJvdywge1xuICAgICAgb25DbGljazogKCkgPT4gcHJldmlvdXMoKSxcbiAgICAgIGNhcm91c2VsU3RhdGU6IGdldFN0YXRlKClcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdyByZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLWxlZnRcIlxuICAgICAgb25DbGljaz17KCkgPT4gcHJldmlvdXMoKX1cbiAgICA+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIG1pbi13aWR0aDogNDNweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0M3B4O1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3c6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgfVxuICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93OjpiZWZvcmUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LWZhbWlseTogcmV2aWNvbnM7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tbGVmdCB7XG4gICAgICAgICAgbGVmdDogY2FsYyg0JSArIDFweCk7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tbGVmdDo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIjxcIjtcbiAgICAgICAgfVxuICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1yaWdodCB7XG4gICAgICAgICAgcmlnaHQ6IGNhbGMoNCUgKyAxcHgpO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLXJpZ2h0OjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiPlwiO1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5jb25zdCBSaWdodEFycm93ID0gKHsgY3VzdG9tUmlnaHRBcnJvdywgbmV4dCwgZ2V0U3RhdGUgfSkgPT4ge1xuICBpZiAoY3VzdG9tUmlnaHRBcnJvdykge1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY3VzdG9tUmlnaHRBcnJvdywge1xuICAgICAgb25DbGljazogKCkgPT4gbmV4dCgpLFxuICAgICAgY2Fyb3VzZWxTdGF0ZTogZ2V0U3RhdGUoKVxuICAgIH0pO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwicmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93IHJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHRcIlxuICAgICAgb25DbGljaz17KCkgPT4gbmV4dCgpfVxuICAgID5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgbWluLXdpZHRoOiA0M3B4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdzpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3c6OmJlZm9yZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiByZXZpY29ucztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0IHtcbiAgICAgICAgICBsZWZ0OiBjYWxjKDQlICsgMXB4KTtcbiAgICAgICAgfVxuICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0OjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiPFwiO1xuICAgICAgICB9XG4gICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLXJpZ2h0IHtcbiAgICAgICAgICByaWdodDogY2FsYyg0JSArIDFweCk7XG4gICAgICAgIH1cbiAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHQ6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCI+XCI7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IHsgTGVmdEFycm93LCBSaWdodEFycm93IH07XG4iXX0= */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/Arrows.jsx */"));
};



/***/ }),

/***/ "./components/Carousel.jsx":
/*!*********************************!*\
  !*** ./components/Carousel.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _CarouselItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CarouselItems */ "./components/CarouselItems.jsx");
/* harmony import */ var _Arrows__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Arrows */ "./components/Arrows.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./components/utils/index.js");









var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/Carousel.jsx";





var defaultTransitionDuration = 400;
var defaultTransition = "transform 400ms ease-in-out";

var Carousel =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Carousel, _Component);

  function Carousel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Carousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Carousel).call(this, props));
    _this.containerRef = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.state = {
      itemWidth: 0,
      slidesToShow: 0,
      currentSlide: 0,
      totalItems: react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.count(props.children),
      deviceType: "",
      domLoaded: false,
      transform: 0,
      containerWidth: 0
    };
    _this.isMouseMoveEvent = _this.isMouseMoveEvent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onResize = _this.onResize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleDown = _this.handleDown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleMove = _this.handleMove.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleOut = _this.handleOut.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onKeyUp = _this.onKeyUp.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleEnter = _this.handleEnter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setIsInThrottle = _this.setIsInThrottle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.next = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["throttle"])(_this.next.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle);
    _this.previous = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["throttle"])(_this.previous.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle);
    _this.goToSlide = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["throttle"])(_this.goToSlide.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle);
    _this.onMove = false;
    _this.initialX = 0;
    _this.lastX = 0;
    _this.isAnimationAllowed = false;
    _this.direction = "";
    _this.initialY = 0;
    _this.isInThrottle = false;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Carousel, [{
    key: "setIsInThrottle",
    value: function setIsInThrottle() {
      var isInThrottle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isInThrottle = isInThrottle;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        domLoaded: true
      });
      this.setItemsToShow();
      window.addEventListener("resize", this.onResize);
      this.onResize(true);

      if (this.props.keyBoardControl) {
        window.addEventListener("keyup", this.onKeyUp);
      }

      if (this.props.autoPlay && this.props.autoPlaySpeed) {
        this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed);
      }
    }
  }, {
    key: "setItemsToShow",
    value: function setItemsToShow(shouldCorrectItemPosition) {
      var _this2 = this;

      var responsive = this.props.responsive;

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(responsive).forEach(function (item) {
        var _responsive$item = responsive[item],
            breakpoint = _responsive$item.breakpoint,
            items = _responsive$item.items;
        var max = breakpoint.max,
            min = breakpoint.min;

        if (window.innerWidth >= min && window.innerWidth <= max) {
          _this2.setState({
            slidesToShow: items,
            deviceType: item
          });

          _this2.setContainerAndItemWidth(items, shouldCorrectItemPosition);
        }
      });
    } // this is for resizing only or the first time when we entered client-side from server-side.

  }, {
    key: "setContainerAndItemWidth",
    value: function setContainerAndItemWidth(slidesToShow, shouldCorrectItemPosition) {
      var _this3 = this;

      if (this.containerRef && this.containerRef.current) {
        var containerWidth = this.containerRef.current.offsetWidth;
        var itemWidth = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getItemClientSideWidth"])(this.props, slidesToShow, containerWidth);
        this.setState({
          containerWidth: containerWidth,
          itemWidth: itemWidth
        }, function () {
          if (_this3.props.infinite) {
            _this3.setClones(slidesToShow, itemWidth, shouldCorrectItemPosition);
          }
        });

        if (shouldCorrectItemPosition) {
          this.correctItemsPosition(itemWidth);
        }
      }
    }
  }, {
    key: "correctItemsPosition",
    value: function correctItemsPosition(itemWidth, isAnimationAllowed) {
      /*
      For swipe, drag and resizing, they changed the position of the carousel, but the position are not always correct.
      Hence, this is to make sure our items are in the correct place.
      */
      if (isAnimationAllowed) {
        this.isAnimationAllowed = true;
      }

      if (!isAnimationAllowed && this.isAnimationAllowed) {
        this.isAnimationAllowed = false;
      }

      this.setState({
        transform: -(itemWidth * this.state.currentSlide)
      });
    }
  }, {
    key: "onResize",
    value: function onResize(value) {
      // value here can be html event or a boolean.
      // if its in infinite mode, we want to keep the current slide index no matter what.
      // if its not infinite mode, keeping the current slide index has already been taken care of
      var infinite = this.props.infinite;
      var shouldCorrectItemPosition;

      if (!infinite) {
        shouldCorrectItemPosition = false;
      } else {
        if (typeof value === "boolean" && value) {
          shouldCorrectItemPosition = false;
        } else {
          shouldCorrectItemPosition = true;
        }
      }

      this.setItemsToShow(shouldCorrectItemPosition);
    }
  }, {
    key: "isMouseMoveEvent",
    value: function isMouseMoveEvent(e) {
      return  true && "clientY" in e;
    }
  }, {
    key: "resetMoveStatus",
    value: function resetMoveStatus() {
      this.onMove = false;
      this.initialX = 0;
      this.lastX = 0;
      this.direction = "";
      this.initialY = 0;
    }
  }, {
    key: "handleDown",
    value: function handleDown(e) {
      if (!this.isMouseMoveEvent(e) && !this.props.swipeable || this.isMouseMoveEvent(e) && !this.props.draggable || this.isInThrottle) {
        return;
      }

      var _ref = this.isMouseMoveEvent(e) ? e : e.touches[0],
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      this.onMove = true;
      this.initialX = clientX;
      this.initialY = clientY;
      this.lastX = clientX;
      this.isAnimationAllowed = false;
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      if (!this.isMouseMoveEvent(e) && !this.props.swipeable || this.isMouseMoveEvent(e) && !this.props.draggable || Object(_utils__WEBPACK_IMPORTED_MODULE_13__["notEnoughChildren"])(this.state, this.props)) {
        return;
      }

      var _ref2 = this.isMouseMoveEvent(e) ? e : e.touches[0],
          clientX = _ref2.clientX,
          clientY = _ref2.clientY;

      var diffX = this.initialX - clientX;
      var diffY = this.initialY - clientY;

      if (!this.isMouseMoveEvent(e) && this.autoPlay && this.props.autoPlay) {
        clearInterval(this.autoPlay);
        this.autoPlay = undefined;
      }

      if (this.onMove) {
        if (!(Math.abs(diffX) > Math.abs(diffY))) {
          // prevent swiping up and down moves the carousel.
          return;
        }

        var _populateSlidesOnMous = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["populateSlidesOnMouseTouchMove"])(this.state, this.props, this.initialX, this.lastX, clientX),
            direction = _populateSlidesOnMous.direction,
            nextPosition = _populateSlidesOnMous.nextPosition,
            canContinue = _populateSlidesOnMous.canContinue;

        if (direction) {
          this.direction = direction;

          if (canContinue && nextPosition !== undefined) {
            // nextPosition can be 0;
            this.setState({
              transform: nextPosition
            });
          }
        }

        this.lastX = clientX;
      }
    }
  }, {
    key: "handleOut",
    value: function handleOut(e) {
      if (this.props.autoPlay && !this.autoPlay) {
        this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed);
      }

      var shouldDisableOnMobile = e.type === "touchend" && !this.props.swipeable;
      var shouldDisableOnDesktop = (e.type === "mouseleave" || e.type === "mouseup") && !this.props.draggable;

      if (shouldDisableOnMobile || shouldDisableOnDesktop) {
        return;
      }

      if (this.onMove) {
        if (this.direction === "right") {
          var canGoNext = this.initialX - this.lastX >= this.props.minimumTouchDrag;

          if (canGoNext) {
            var slidesHavePassed = Math.round((this.initialX - this.lastX) / this.state.itemWidth);
            this.next(slidesHavePassed);
          } else {
            this.correctItemsPosition(this.state.itemWidth, true);
          }
        }

        if (this.direction === "left") {
          var _canGoNext = this.lastX - this.initialX > this.props.minimumTouchDrag;

          if (_canGoNext) {
            var _slidesHavePassed = Math.round((this.lastX - this.initialX) / this.state.itemWidth);

            this.previous(_slidesHavePassed);
          } else {
            this.correctItemsPosition(this.state.itemWidth, true);
          }
        }

        this.resetMoveStatus();
      }
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      switch (e.keyCode) {
        case 37:
          return this.previous();

        case 39:
          return this.next();
      }
    }
  }, {
    key: "handleEnter",
    value: function handleEnter() {
      if (this.autoPlay && this.props.autoPlay) {
        clearInterval(this.autoPlay);
        this.autoPlay = undefined;
      }
    }
  }, {
    key: "goToSlide",
    value: function goToSlide(slide) {
      var _this4 = this;

      if (this.isInThrottle) {
        return;
      }

      var itemWidth = this.state.itemWidth;
      var _this$props = this.props,
          afterChange = _this$props.afterChange,
          beforeChange = _this$props.beforeChange;
      var previousSlide = this.state.currentSlide;

      if (typeof beforeChange === "function") {
        beforeChange(slide, this.getState());
      }

      this.isAnimationAllowed = true;
      this.setState({
        currentSlide: slide,
        transform: -(itemWidth * slide)
      }, function () {
        if (_this4.props.infinite) {
          _this4.correctClonesPosition({
            domLoaded: true
          });
        }

        if (typeof afterChange === "function") {
          setTimeout(function () {
            afterChange(previousSlide, _this4.getState());
          }, _this4.props.transitionDuration || defaultTransitionDuration);
        }
      });
    }
  }, {
    key: "getState",
    value: function getState() {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        onMove: this.onMove,
        direction: this.direction
      });
    }
  }, {
    key: "next",
    value: function next() {
      var _this5 = this;

      var slidesHavePassed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _this$props2 = this.props,
          afterChange = _this$props2.afterChange,
          beforeChange = _this$props2.beforeChange;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_13__["notEnoughChildren"])(this.state, this.props)) {
        return;
      }
      /*
      two cases:
      1. We are not over-sliding.
      2. We are sliding over to what we have, that means nextslides > this.props.children.length. (does not apply to the inifnite mode)
      */


      var _populateNextSlides = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["populateNextSlides"])(this.state, this.props, slidesHavePassed),
          nextSlides = _populateNextSlides.nextSlides,
          nextPosition = _populateNextSlides.nextPosition;

      var previousSlide = this.state.currentSlide;

      if (nextSlides === undefined || nextPosition === undefined) {
        // they can be 0.
        return;
      }

      if (typeof beforeChange === "function") {
        beforeChange(nextSlides, this.getState());
      }

      this.isAnimationAllowed = true;
      this.setState({
        transform: nextPosition,
        currentSlide: nextSlides
      }, function () {
        if (typeof afterChange === "function") {
          setTimeout(function () {
            afterChange(previousSlide, _this5.getState());
          }, _this5.props.transitionDuration || defaultTransitionDuration);
        }
      });
    }
  }, {
    key: "previous",
    value: function previous() {
      var _this6 = this;

      var slidesHavePassed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _this$props3 = this.props,
          afterChange = _this$props3.afterChange,
          beforeChange = _this$props3.beforeChange;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_13__["notEnoughChildren"])(this.state, this.props)) {
        return;
      }

      var _populatePreviousSlid = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["populatePreviousSlides"])(this.state, this.props, slidesHavePassed),
          nextSlides = _populatePreviousSlid.nextSlides,
          nextPosition = _populatePreviousSlid.nextPosition;

      if (nextSlides === undefined || nextPosition === undefined) {
        // they can be 0, which goes back to the first slide.
        return;
      }

      var previousSlide = this.state.currentSlide;

      if (typeof beforeChange === "function") {
        beforeChange(nextSlides, this.getState());
      }

      this.isAnimationAllowed = true;
      this.setState({
        transform: nextPosition,
        currentSlide: nextSlides
      }, function () {
        if (typeof afterChange === "function") {
          setTimeout(function () {
            afterChange(previousSlide, _this6.getState());
          }, _this6.props.transitionDuration || defaultTransitionDuration);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.onResize);

      if (this.props.keyBoardControl) {
        window.removeEventListener("keyup", this.onKeyUp);
      }

      if (this.props.autoPlay && this.autoPlay) {
        clearInterval(this.autoPlay);
        this.autoPlay = undefined;
      }
    }
  }, {
    key: "renderCarouselItems",
    value: function renderCarouselItems() {
      var clones = [];

      if (this.props.infinite) {
        var childrenArr = react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.toArray(this.props.children);
        clones = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getClones"])(this.state.slidesToShow, childrenArr);
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_CarouselItems__WEBPACK_IMPORTED_MODULE_11__["default"], {
        clones: clones,
        goToSlide: this.goToSlide,
        state: this.state,
        props: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      });
    }
  }, {
    key: "renderLeftArrow",
    value: function renderLeftArrow() {
      var _this7 = this;

      var customLeftArrow = this.props.customLeftArrow;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Arrows__WEBPACK_IMPORTED_MODULE_12__["LeftArrow"], {
        customLeftArrow: customLeftArrow,
        getState: function getState() {
          return _this7.getState();
        },
        previous: this.previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      });
    }
  }, {
    key: "renderRightArrow",
    value: function renderRightArrow() {
      var _this8 = this;

      var customRightArrow = this.props.customRightArrow;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Arrows__WEBPACK_IMPORTED_MODULE_12__["RightArrow"], {
        customRightArrow: customRightArrow,
        getState: function getState() {
          return _this8.getState();
        },
        next: this.next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          deviceType = _this$props4.deviceType,
          arrows = _this$props4.arrows,
          removeArrowOnDeviceType = _this$props4.removeArrowOnDeviceType,
          infinite = _this$props4.infinite,
          containerClass = _this$props4.containerClass,
          sliderClass = _this$props4.sliderClass,
          customTransition = _this$props4.customTransition,
          partialVisbile = _this$props4.partialVisbile,
          centerMode = _this$props4.centerMode,
          additionalTransfrom = _this$props4.additionalTransfrom,
          renderDotsOutside = _this$props4.renderDotsOutside,
          className = _this$props4.className;

      var _getInitialState = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getInitialState"])(this.state, this.props),
          shouldRenderOnSSR = _getInitialState.shouldRenderOnSSR,
          paritialVisibilityGutter = _getInitialState.paritialVisibilityGutter,
          shouldRenderAtAll = _getInitialState.shouldRenderAtAll;

      var isLeftEndReach = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["isInLeftEnd"])(this.state);
      var isRightEndReach = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["isInRightEnd"])(this.state);
      var shouldShowArrows = arrows && !(removeArrowOnDeviceType && (deviceType && removeArrowOnDeviceType.indexOf(deviceType) > -1 || this.state.deviceType && removeArrowOnDeviceType.indexOf(this.state.deviceType) > -1)) && !Object(_utils__WEBPACK_IMPORTED_MODULE_13__["notEnoughChildren"])(this.state, this.props) && shouldRenderAtAll;
      var disableLeftArrow = !infinite && isLeftEndReach;
      var disableRightArrow = !infinite && isRightEndReach; // this lib supports showing next set of items paritially as well as center mode which shows both.

      var currentTransform = partialVisbile ? Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getTransformForPartialVsibile"])(this.state, paritialVisibilityGutter, this.props) : centerMode ? Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getTransformForCenterMode"])(this.state, this.props) : this.state.transform;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        ref: this.containerRef,
        className: "jsx-257792136" + " " + "react-multi-carousel-list ".concat(containerClass, " ").concat(className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        style: {
          transition: this.isAnimationAllowed ? customTransition || defaultTransition : "none",
          overflow: shouldRenderOnSSR ? "hidden" : "unset",
          transform: "translate3d(".concat(currentTransform + additionalTransfrom, "px,0,0)")
        },
        onMouseMove: this.handleMove,
        onMouseDown: this.handleDown,
        onMouseUp: this.handleOut,
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleOut,
        onTouchStart: this.handleDown,
        onTouchMove: this.handleMove,
        onTouchEnd: this.handleOut,
        className: "jsx-257792136" + " " + "react-multi-carousel-track ".concat(sliderClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, this.renderCarouselItems()), shouldShowArrows && !disableLeftArrow && this.renderLeftArrow(), this.renderRightArrow()), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "257792136",
        __self: this
      }, "@font-face{font-family:\"revicons\";fallback:fallback;src:url(\"./revicons.woff\") format(\"woff\"), url(\"./revicons.ttf\") format(\"ttf\"), url(\"./revicons.eot\") format(\"ttf\");}.react-multi-carousel-list.jsx-257792136{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative;border:solid 2px yellow;margin:0 150px 0 150px;}.react-multi-carousel-track.jsx-257792136{list-style:none;padding:20px 0 0 0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform,transition;}.react-multiple-carousel__arrow.jsx-257792136{position:absolute;outline:none;-webkit-transition:all 0.5s;transition:all 0.5s;border-radius:35px;z-index:1000;border:none;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer;}.react-multiple-carousel__arrow.jsx-257792136:hover{background:rgba(0,0,0,0.8);}.react-multiple-carousel__arrow.jsx-257792136::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative;}.react-multiple-carousel__arrow--left.jsx-257792136{left:calc(4% + 1px);}.react-multiple-carousel__arrow--left.jsx-257792136::before{content:\"e824\";}.react-multiple-carousel__arrow--right.jsx-257792136{right:calc(4% + 1px);}.react-multiple-carousel__arrow--right.jsx-257792136::before{content:\"e825\";}.react-multi-carousel-dot-list.jsx-257792136{position:absolute;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:0;right:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:auto;padding:0;margin:0;list-style:none;text-align:center;}.react-multi-carousel-dot.jsx-257792136 button.jsx-257792136{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;padding:5px 5px 5px 5px;box-shadow:none;-webkit-transition:background 0.5s;transition:background 0.5s;border-width:2px;border-style:solid;border-color:grey;padding:0;margin:0;margin-right:6px;outline:0;cursor:pointer;}.react-multi-carousel-dot.jsx-257792136 button.jsx-257792136:hover{background:#080808;}.react-multi-carousel-dot--active.jsx-257792136 button.jsx-257792136{background:#080808;}.react-multi-carousel-item.jsx-257792136{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;}@media all and (-ms-high-contrast:none), (-ms-high-contrast:active){.react-multi-carousel-item.jsx-257792136{-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;}.react-multi-carousel-track.jsx-257792136{overflow:visible !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzZ0JvQixBQUdvQyxBQU9WLEFBUUcsQUFXRSxBQWFZLEFBR2YsQUFVSyxBQUdMLEFBR00sQUFHTixBQUlHLEFBYUcsQUFrQkYsQUFHQSxBQUdTLEFBTUQsQUFHRyxlQXBFbkIsQUFhYixBQU1BLENBOUNxQixFQVdOLEFBdUNKLENBK0JYLEFBR0EsQ0EvQ0EsQ0FNQSxBQW9CYSxFQTlFTyxHQTJDSixDQUpoQixBQTJCZSxDQTZDYixHQXBGb0IsQ0FvRFIsR0EvREgsS0E0QlksQ0F6Q2dCLEdBY3hCLEFBK0RLLGlCQW5DQSxDQW9DUixVQUNjLEVBM0VMLEtBcUJBLEFBa0JULFVBQ1EsQUE2RGxCLE9BekJnQixBQW1CVyxFQXpFZCxHQXNDTixNQW5CVCxDQW9CVSxHQXRDSSxDQXNEZSxJQWZKLEVBbkRKLEtBYVcsMkJBQ2YsT0E1QmpCLENBbUdBLE9BdEVrQixFQXpCQSxPQTZFQyxPQW5EUCxFQXpCUSxJQVVBLElBZ0JILEFBbURJLFVBNUVLLElBVUksQ0FnQjlCLElBbURvQixLQWpCTixVQTNEVyxFQTREYixDQWlCQSxTQWhCRCxDQWlCQSxRQWhCTyxDQWlCQyxDQTlFbkIsY0E4RG9CLEVBaUJSLFVBQ0ssTUFqQmpCLFNBa0JBLFlBeEU2Qiw4REFDTyxpQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvUkVBQ1Qvd2l0aC1hcG9sbG8tYXBwL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsSXRlbXMgZnJvbSBcIi4vQ2Fyb3VzZWxJdGVtc1wiO1xuaW1wb3J0IHsgTGVmdEFycm93LCBSaWdodEFycm93IH0gZnJvbSBcIi4vQXJyb3dzXCI7XG5pbXBvcnQge1xuICB0aHJvdHRsZSxcbiAgZ2V0Q2xvbmVzLFxuICBjaGVja0Nsb25lc1Bvc2l0aW9uLCAvLyBoYW5kbGUgd2hlbiB0aGVyZSBhcmUgY2xvbmVzIGFwcGVhciBvbiB0aGUgc2NyZWVuLCBvbmx5IGFwcGx5IHRvIGluZmluaXRlIG1vZGUuXG4gIGdldEluaXRpYWxTdGF0ZSxcbiAgZ2V0VHJhbnNmb3JtRm9yQ2VudGVyTW9kZSxcbiAgZ2V0VHJhbnNmb3JtRm9yUGFydGlhbFZzaWJpbGUsXG4gIHRocm93RXJyb3IsXG4gIGdldEl0ZW1DbGllbnRTaWRlV2lkdGgsXG4gIHBvcHVsYXRlTmV4dFNsaWRlcyxcbiAgcG9wdWxhdGVQcmV2aW91c1NsaWRlcyxcbiAgcG9wdWxhdGVTbGlkZXNPbk1vdXNlVG91Y2hNb3ZlLFxuICBpc0luTGVmdEVuZCxcbiAgaXNJblJpZ2h0RW5kLFxuICBnZXRJbml0aWFsU2xpZGVJbkluaWZ0ZU1vZGUsXG4gIG5vdEVub3VnaENoaWxkcmVuXG59IGZyb20gXCIuL3V0aWxzXCI7XG5jb25zdCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uID0gNDAwO1xuY29uc3QgZGVmYXVsdFRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dFwiO1xuXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2xpZGVzVG9TbGlkZTogMSxcbiAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgIHN3aXBlYWJsZTogdHJ1ZSxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgY29udGFpbmVyQ2xhc3M6IFwiXCIsXG4gICAgc2xpZGVyQ2xhc3M6IFwiXCIsXG4gICAgaXRlbUNsYXNzOiBcIlwiLFxuICAgIGtleUJvYXJkQ29udHJvbDogdHJ1ZSxcbiAgICBhdXRvUGxheVNwZWVkOiAzMDAwLFxuICAgIHNob3dEb3RzOiBmYWxzZSxcbiAgICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG4gICAgbWluaW11bVRvdWNoRHJhZzogODAsXG4gICAgZG90TGlzdENsYXNzOiBcIlwiLFxuICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgIGFkZGl0aW9uYWxUcmFuc2Zyb206IDBcbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jb250YWluZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXRlbVdpZHRoOiAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAwLFxuICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgdG90YWxJdGVtczogUmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pLFxuICAgICAgZGV2aWNlVHlwZTogXCJcIixcbiAgICAgIGRvbUxvYWRlZDogZmFsc2UsXG4gICAgICB0cmFuc2Zvcm06IDAsXG4gICAgICBjb250YWluZXJXaWR0aDogMFxuICAgIH07XG4gICAgdGhpcy5pc01vdXNlTW92ZUV2ZW50ID0gdGhpcy5pc01vdXNlTW92ZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURvd24gPSB0aGlzLmhhbmRsZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdmUgPSB0aGlzLmhhbmRsZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU91dCA9IHRoaXMuaGFuZGxlT3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleVVwID0gdGhpcy5vbktleVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFbnRlciA9IHRoaXMuaGFuZGxlRW50ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldElzSW5UaHJvdHRsZSA9IHRoaXMuc2V0SXNJblRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXh0ID0gdGhyb3R0bGUoXG4gICAgICB0aGlzLm5leHQuYmluZCh0aGlzKSxcbiAgICAgIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdGhpcy5zZXRJc0luVGhyb3R0bGVcbiAgICApO1xuICAgIHRoaXMucHJldmlvdXMgPSB0aHJvdHRsZShcbiAgICAgIHRoaXMucHJldmlvdXMuYmluZCh0aGlzKSxcbiAgICAgIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdGhpcy5zZXRJc0luVGhyb3R0bGVcbiAgICApO1xuICAgIHRoaXMuZ29Ub1NsaWRlID0gdGhyb3R0bGUoXG4gICAgICB0aGlzLmdvVG9TbGlkZS5iaW5kKHRoaXMpLFxuICAgICAgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0aGlzLnNldElzSW5UaHJvdHRsZVxuICAgICk7XG4gICAgdGhpcy5vbk1vdmUgPSBmYWxzZTtcbiAgICB0aGlzLmluaXRpYWxYID0gMDtcbiAgICB0aGlzLmxhc3RYID0gMDtcbiAgICB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJcIjtcbiAgICB0aGlzLmluaXRpYWxZID0gMDtcbiAgICB0aGlzLmlzSW5UaHJvdHRsZSA9IGZhbHNlO1xuICB9XG4gIHNldElzSW5UaHJvdHRsZShpc0luVGhyb3R0bGUgPSBmYWxzZSkge1xuICAgIHRoaXMuaXNJblRocm90dGxlID0gaXNJblRocm90dGxlO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkb21Mb2FkZWQ6IHRydWUgfSk7XG4gICAgdGhpcy5zZXRJdGVtc1RvU2hvdygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xuICAgIHRoaXMub25SZXNpemUodHJ1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMua2V5Qm9hcmRDb250cm9sKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMub25LZXlVcCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmF1dG9QbGF5ICYmIHRoaXMucHJvcHMuYXV0b1BsYXlTcGVlZCkge1xuICAgICAgdGhpcy5hdXRvUGxheSA9IHNldEludGVydmFsKHRoaXMubmV4dCwgdGhpcy5wcm9wcy5hdXRvUGxheVNwZWVkKTtcbiAgICB9XG4gIH1cbiAgc2V0SXRlbXNUb1Nob3coc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbikge1xuICAgIGNvbnN0IHsgcmVzcG9uc2l2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgeyBicmVha3BvaW50LCBpdGVtcyB9ID0gcmVzcG9uc2l2ZVtpdGVtXTtcbiAgICAgIGNvbnN0IHsgbWF4LCBtaW4gfSA9IGJyZWFrcG9pbnQ7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gbWluICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IG1heCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVzVG9TaG93OiBpdGVtcywgZGV2aWNlVHlwZTogaXRlbSB9KTtcbiAgICAgICAgdGhpcy5zZXRDb250YWluZXJBbmRJdGVtV2lkdGgoaXRlbXMsIHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIHRoaXMgaXMgZm9yIHJlc2l6aW5nIG9ubHkgb3IgdGhlIGZpcnN0IHRpbWUgd2hlbiB3ZSBlbnRlcmVkIGNsaWVudC1zaWRlIGZyb20gc2VydmVyLXNpZGUuXG4gIHNldENvbnRhaW5lckFuZEl0ZW1XaWR0aChzbGlkZXNUb1Nob3csIHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5jb250YWluZXJSZWYgJiYgdGhpcy5jb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgICAgY29uc3QgaXRlbVdpZHRoID0gZ2V0SXRlbUNsaWVudFNpZGVXaWR0aChcbiAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgc2xpZGVzVG9TaG93LFxuICAgICAgICBjb250YWluZXJXaWR0aFxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluZXJXaWR0aCxcbiAgICAgICAgICBpdGVtV2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLmluZmluaXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldENsb25lcyhzbGlkZXNUb1Nob3csIGl0ZW1XaWR0aCwgc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb3JyZWN0SXRlbXNQb3NpdGlvbihpdGVtV2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb3JyZWN0SXRlbXNQb3NpdGlvbihpdGVtV2lkdGgsIGlzQW5pbWF0aW9uQWxsb3dlZCkge1xuICAgIC8qXG4gICAgRm9yIHN3aXBlLCBkcmFnIGFuZCByZXNpemluZywgdGhleSBjaGFuZ2VkIHRoZSBwb3NpdGlvbiBvZiB0aGUgY2Fyb3VzZWwsIGJ1dCB0aGUgcG9zaXRpb24gYXJlIG5vdCBhbHdheXMgY29ycmVjdC5cbiAgICBIZW5jZSwgdGhpcyBpcyB0byBtYWtlIHN1cmUgb3VyIGl0ZW1zIGFyZSBpbiB0aGUgY29ycmVjdCBwbGFjZS5cbiAgICAqL1xuICAgIGlmIChpc0FuaW1hdGlvbkFsbG93ZWQpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFpc0FuaW1hdGlvbkFsbG93ZWQgJiYgdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWQpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdHJhbnNmb3JtOiAtKGl0ZW1XaWR0aCAqIHRoaXMuc3RhdGUuY3VycmVudFNsaWRlKVxuICAgIH0pO1xuICB9XG4gIG9uUmVzaXplKHZhbHVlKSB7XG4gICAgLy8gdmFsdWUgaGVyZSBjYW4gYmUgaHRtbCBldmVudCBvciBhIGJvb2xlYW4uXG4gICAgLy8gaWYgaXRzIGluIGluZmluaXRlIG1vZGUsIHdlIHdhbnQgdG8ga2VlcCB0aGUgY3VycmVudCBzbGlkZSBpbmRleCBubyBtYXR0ZXIgd2hhdC5cbiAgICAvLyBpZiBpdHMgbm90IGluZmluaXRlIG1vZGUsIGtlZXBpbmcgdGhlIGN1cnJlbnQgc2xpZGUgaW5kZXggaGFzIGFscmVhZHkgYmVlbiB0YWtlbiBjYXJlIG9mXG4gICAgY29uc3QgeyBpbmZpbml0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbjtcbiAgICBpZiAoIWluZmluaXRlKSB7XG4gICAgICBzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiICYmIHZhbHVlKSB7XG4gICAgICAgIHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldEl0ZW1zVG9TaG93KHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24pO1xuICB9XG4gIGlzTW91c2VNb3ZlRXZlbnQoZSkge1xuICAgIHJldHVybiBcImNsaWVudFhcIiAmJiBcImNsaWVudFlcIiBpbiBlO1xuICB9XG4gIHJlc2V0TW92ZVN0YXR1cygpIHtcbiAgICB0aGlzLm9uTW92ZSA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdGlhbFggPSAwO1xuICAgIHRoaXMubGFzdFggPSAwO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJcIjtcbiAgICB0aGlzLmluaXRpYWxZID0gMDtcbiAgfVxuICBoYW5kbGVEb3duKGUpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNNb3VzZU1vdmVFdmVudChlKSAmJiAhdGhpcy5wcm9wcy5zd2lwZWFibGUpIHx8XG4gICAgICAodGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpICYmICF0aGlzLnByb3BzLmRyYWdnYWJsZSkgfHxcbiAgICAgIHRoaXMuaXNJblRocm90dGxlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gdGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpID8gZSA6IGUudG91Y2hlc1swXTtcbiAgICB0aGlzLm9uTW92ZSA9IHRydWU7XG4gICAgdGhpcy5pbml0aWFsWCA9IGNsaWVudFg7XG4gICAgdGhpcy5pbml0aWFsWSA9IGNsaWVudFk7XG4gICAgdGhpcy5sYXN0WCA9IGNsaWVudFg7XG4gICAgdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWQgPSBmYWxzZTtcbiAgfVxuICBoYW5kbGVNb3ZlKGUpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNNb3VzZU1vdmVFdmVudChlKSAmJiAhdGhpcy5wcm9wcy5zd2lwZWFibGUpIHx8XG4gICAgICAodGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpICYmICF0aGlzLnByb3BzLmRyYWdnYWJsZSkgfHxcbiAgICAgIG5vdEVub3VnaENoaWxkcmVuKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gdGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpID8gZSA6IGUudG91Y2hlc1swXTtcblxuICAgIGNvbnN0IGRpZmZYID0gdGhpcy5pbml0aWFsWCAtIGNsaWVudFg7XG4gICAgY29uc3QgZGlmZlkgPSB0aGlzLmluaXRpYWxZIC0gY2xpZW50WTtcbiAgICBpZiAoIXRoaXMuaXNNb3VzZU1vdmVFdmVudChlKSAmJiB0aGlzLmF1dG9QbGF5ICYmIHRoaXMucHJvcHMuYXV0b1BsYXkpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvUGxheSk7XG4gICAgICB0aGlzLmF1dG9QbGF5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbk1vdmUpIHtcbiAgICAgIGlmICghKE1hdGguYWJzKGRpZmZYKSA+IE1hdGguYWJzKGRpZmZZKSkpIHtcbiAgICAgICAgLy8gcHJldmVudCBzd2lwaW5nIHVwIGFuZCBkb3duIG1vdmVzIHRoZSBjYXJvdXNlbC5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIG5leHRQb3NpdGlvbixcbiAgICAgICAgY2FuQ29udGludWVcbiAgICAgIH0gPSBwb3B1bGF0ZVNsaWRlc09uTW91c2VUb3VjaE1vdmUoXG4gICAgICAgIHRoaXMuc3RhdGUsXG4gICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgIHRoaXMuaW5pdGlhbFgsXG4gICAgICAgIHRoaXMubGFzdFgsXG4gICAgICAgIGNsaWVudFhcbiAgICAgICk7XG4gICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICBpZiAoY2FuQ29udGludWUgJiYgbmV4dFBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBuZXh0UG9zaXRpb24gY2FuIGJlIDA7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRyYW5zZm9ybTogbmV4dFBvc2l0aW9uIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RYID0gY2xpZW50WDtcbiAgICB9XG4gIH1cbiAgaGFuZGxlT3V0KGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvUGxheSAmJiAhdGhpcy5hdXRvUGxheSkge1xuICAgICAgdGhpcy5hdXRvUGxheSA9IHNldEludGVydmFsKHRoaXMubmV4dCwgdGhpcy5wcm9wcy5hdXRvUGxheVNwZWVkKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkRGlzYWJsZU9uTW9iaWxlID1cbiAgICAgIGUudHlwZSA9PT0gXCJ0b3VjaGVuZFwiICYmICF0aGlzLnByb3BzLnN3aXBlYWJsZTtcbiAgICBjb25zdCBzaG91bGREaXNhYmxlT25EZXNrdG9wID1cbiAgICAgIChlLnR5cGUgPT09IFwibW91c2VsZWF2ZVwiIHx8IGUudHlwZSA9PT0gXCJtb3VzZXVwXCIpICYmXG4gICAgICAhdGhpcy5wcm9wcy5kcmFnZ2FibGU7XG4gICAgaWYgKHNob3VsZERpc2FibGVPbk1vYmlsZSB8fCBzaG91bGREaXNhYmxlT25EZXNrdG9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm9uTW92ZSkge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgY29uc3QgY2FuR29OZXh0ID1cbiAgICAgICAgICB0aGlzLmluaXRpYWxYIC0gdGhpcy5sYXN0WCA+PSB0aGlzLnByb3BzLm1pbmltdW1Ub3VjaERyYWc7XG4gICAgICAgIGlmIChjYW5Hb05leHQpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZXNIYXZlUGFzc2VkID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAgICh0aGlzLmluaXRpYWxYIC0gdGhpcy5sYXN0WCkgLyB0aGlzLnN0YXRlLml0ZW1XaWR0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5uZXh0KHNsaWRlc0hhdmVQYXNzZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29ycmVjdEl0ZW1zUG9zaXRpb24odGhpcy5zdGF0ZS5pdGVtV2lkdGgsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbnN0IGNhbkdvTmV4dCA9XG4gICAgICAgICAgdGhpcy5sYXN0WCAtIHRoaXMuaW5pdGlhbFggPiB0aGlzLnByb3BzLm1pbmltdW1Ub3VjaERyYWc7XG4gICAgICAgIGlmIChjYW5Hb05leHQpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZXNIYXZlUGFzc2VkID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAgICh0aGlzLmxhc3RYIC0gdGhpcy5pbml0aWFsWCkgLyB0aGlzLnN0YXRlLml0ZW1XaWR0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5wcmV2aW91cyhzbGlkZXNIYXZlUGFzc2VkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvcnJlY3RJdGVtc1Bvc2l0aW9uKHRoaXMuc3RhdGUuaXRlbVdpZHRoLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5yZXNldE1vdmVTdGF0dXMoKTtcbiAgICB9XG4gIH1cbiAgb25LZXlVcChlKSB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMzc6XG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCk7XG4gICAgICBjYXNlIDM5OlxuICAgICAgICByZXR1cm4gdGhpcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUVudGVyKCkge1xuICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMucHJvcHMuYXV0b1BsYXkpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvUGxheSk7XG4gICAgICB0aGlzLmF1dG9QbGF5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBnb1RvU2xpZGUoc2xpZGUpIHtcbiAgICBpZiAodGhpcy5pc0luVGhyb3R0bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBpdGVtV2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBhZnRlckNoYW5nZSwgYmVmb3JlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByZXZpb3VzU2xpZGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZTtcbiAgICBpZiAodHlwZW9mIGJlZm9yZUNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBiZWZvcmVDaGFuZ2Uoc2xpZGUsIHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgfVxuICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBjdXJyZW50U2xpZGU6IHNsaWRlLFxuICAgICAgICB0cmFuc2Zvcm06IC0oaXRlbVdpZHRoICogc2xpZGUpXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbmZpbml0ZSkge1xuICAgICAgICAgIHRoaXMuY29ycmVjdENsb25lc1Bvc2l0aW9uKHsgZG9tTG9hZGVkOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWZ0ZXJDaGFuZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWZ0ZXJDaGFuZ2UocHJldmlvdXNTbGlkZSwgdGhpcy5nZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9LCB0aGlzLnByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICBvbk1vdmU6IHRoaXMub25Nb3ZlLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvblxuICAgIH07XG4gIH1cbiAgbmV4dChzbGlkZXNIYXZlUGFzc2VkID0gMCkge1xuICAgIGNvbnN0IHsgYWZ0ZXJDaGFuZ2UsIGJlZm9yZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobm90RW5vdWdoQ2hpbGRyZW4odGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLypcbiAgICB0d28gY2FzZXM6XG4gICAgMS4gV2UgYXJlIG5vdCBvdmVyLXNsaWRpbmcuXG4gICAgMi4gV2UgYXJlIHNsaWRpbmcgb3ZlciB0byB3aGF0IHdlIGhhdmUsIHRoYXQgbWVhbnMgbmV4dHNsaWRlcyA+IHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoLiAoZG9lcyBub3QgYXBwbHkgdG8gdGhlIGluaWZuaXRlIG1vZGUpXG4gICAgKi9cbiAgICBjb25zdCB7IG5leHRTbGlkZXMsIG5leHRQb3NpdGlvbiB9ID0gcG9wdWxhdGVOZXh0U2xpZGVzKFxuICAgICAgdGhpcy5zdGF0ZSxcbiAgICAgIHRoaXMucHJvcHMsXG4gICAgICBzbGlkZXNIYXZlUGFzc2VkXG4gICAgKTtcbiAgICBjb25zdCBwcmV2aW91c1NsaWRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGU7XG4gICAgaWYgKG5leHRTbGlkZXMgPT09IHVuZGVmaW5lZCB8fCBuZXh0UG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdGhleSBjYW4gYmUgMC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBiZWZvcmVDaGFuZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYmVmb3JlQ2hhbmdlKG5leHRTbGlkZXMsIHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgfVxuICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICB0cmFuc2Zvcm06IG5leHRQb3NpdGlvbixcbiAgICAgICAgY3VycmVudFNsaWRlOiBuZXh0U2xpZGVzXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGFmdGVyQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlKHByZXZpb3VzU2xpZGUsIHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfSwgdGhpcy5wcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfHwgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG4gIHByZXZpb3VzKHNsaWRlc0hhdmVQYXNzZWQgPSAwKSB7XG4gICAgY29uc3QgeyBhZnRlckNoYW5nZSwgYmVmb3JlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChub3RFbm91Z2hDaGlsZHJlbih0aGlzLnN0YXRlLCB0aGlzLnByb3BzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IG5leHRTbGlkZXMsIG5leHRQb3NpdGlvbiB9ID0gcG9wdWxhdGVQcmV2aW91c1NsaWRlcyhcbiAgICAgIHRoaXMuc3RhdGUsXG4gICAgICB0aGlzLnByb3BzLFxuICAgICAgc2xpZGVzSGF2ZVBhc3NlZFxuICAgICk7XG4gICAgaWYgKG5leHRTbGlkZXMgPT09IHVuZGVmaW5lZCB8fCBuZXh0UG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdGhleSBjYW4gYmUgMCwgd2hpY2ggZ29lcyBiYWNrIHRvIHRoZSBmaXJzdCBzbGlkZS5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNTbGlkZSA9IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlO1xuICAgIGlmICh0eXBlb2YgYmVmb3JlQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJlZm9yZUNoYW5nZShuZXh0U2xpZGVzLCB0aGlzLmdldFN0YXRlKCkpO1xuICAgIH1cbiAgICB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiBuZXh0UG9zaXRpb24sXG4gICAgICAgIGN1cnJlbnRTbGlkZTogbmV4dFNsaWRlc1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhZnRlckNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhZnRlckNoYW5nZShwcmV2aW91c1NsaWRlLCB0aGlzLmdldFN0YXRlKCkpO1xuICAgICAgICAgIH0sIHRoaXMucHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcbiAgICBpZiAodGhpcy5wcm9wcy5rZXlCb2FyZENvbnRyb2wpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b1BsYXkgJiYgdGhpcy5hdXRvUGxheSkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9QbGF5KTtcbiAgICAgIHRoaXMuYXV0b1BsYXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJlbmRlckNhcm91c2VsSXRlbXMoKSB7XG4gICAgbGV0IGNsb25lcyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLmluZmluaXRlKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbkFyciA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgICBjbG9uZXMgPSBnZXRDbG9uZXModGhpcy5zdGF0ZS5zbGlkZXNUb1Nob3csIGNoaWxkcmVuQXJyKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJvdXNlbEl0ZW1zXG4gICAgICAgIGNsb25lcz17Y2xvbmVzfVxuICAgICAgICBnb1RvU2xpZGU9e3RoaXMuZ29Ub1NsaWRlfVxuICAgICAgICBzdGF0ZT17dGhpcy5zdGF0ZX1cbiAgICAgICAgcHJvcHM9e3RoaXMucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmVuZGVyTGVmdEFycm93KCkge1xuICAgIGNvbnN0IHsgY3VzdG9tTGVmdEFycm93IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGVmdEFycm93XG4gICAgICAgIGN1c3RvbUxlZnRBcnJvdz17Y3VzdG9tTGVmdEFycm93fVxuICAgICAgICBnZXRTdGF0ZT17KCkgPT4gdGhpcy5nZXRTdGF0ZSgpfVxuICAgICAgICBwcmV2aW91cz17dGhpcy5wcmV2aW91c31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZW5kZXJSaWdodEFycm93KCkge1xuICAgIGNvbnN0IHsgY3VzdG9tUmlnaHRBcnJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJpZ2h0QXJyb3dcbiAgICAgICAgY3VzdG9tUmlnaHRBcnJvdz17Y3VzdG9tUmlnaHRBcnJvd31cbiAgICAgICAgZ2V0U3RhdGU9eygpID0+IHRoaXMuZ2V0U3RhdGUoKX1cbiAgICAgICAgbmV4dD17dGhpcy5uZXh0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRldmljZVR5cGUsXG4gICAgICBhcnJvd3MsXG4gICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZSxcbiAgICAgIGluZmluaXRlLFxuICAgICAgY29udGFpbmVyQ2xhc3MsXG4gICAgICBzbGlkZXJDbGFzcyxcbiAgICAgIGN1c3RvbVRyYW5zaXRpb24sXG4gICAgICBwYXJ0aWFsVmlzYmlsZSxcbiAgICAgIGNlbnRlck1vZGUsXG4gICAgICBhZGRpdGlvbmFsVHJhbnNmcm9tLFxuICAgICAgcmVuZGVyRG90c091dHNpZGUsXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzaG91bGRSZW5kZXJPblNTUixcbiAgICAgIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlcixcbiAgICAgIHNob3VsZFJlbmRlckF0QWxsXG4gICAgfSA9IGdldEluaXRpYWxTdGF0ZSh0aGlzLnN0YXRlLCB0aGlzLnByb3BzKTtcbiAgICBjb25zdCBpc0xlZnRFbmRSZWFjaCA9IGlzSW5MZWZ0RW5kKHRoaXMuc3RhdGUpO1xuICAgIGNvbnN0IGlzUmlnaHRFbmRSZWFjaCA9IGlzSW5SaWdodEVuZCh0aGlzLnN0YXRlKTtcbiAgICBjb25zdCBzaG91bGRTaG93QXJyb3dzID1cbiAgICAgIGFycm93cyAmJlxuICAgICAgIShcbiAgICAgICAgcmVtb3ZlQXJyb3dPbkRldmljZVR5cGUgJiZcbiAgICAgICAgKChkZXZpY2VUeXBlICYmIHJlbW92ZUFycm93T25EZXZpY2VUeXBlLmluZGV4T2YoZGV2aWNlVHlwZSkgPiAtMSkgfHxcbiAgICAgICAgICAodGhpcy5zdGF0ZS5kZXZpY2VUeXBlICYmXG4gICAgICAgICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZS5pbmRleE9mKHRoaXMuc3RhdGUuZGV2aWNlVHlwZSkgPiAtMSkpXG4gICAgICApICYmXG4gICAgICAhbm90RW5vdWdoQ2hpbGRyZW4odGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykgJiZcbiAgICAgIHNob3VsZFJlbmRlckF0QWxsO1xuICAgIGNvbnN0IGRpc2FibGVMZWZ0QXJyb3cgPSAhaW5maW5pdGUgJiYgaXNMZWZ0RW5kUmVhY2g7XG4gICAgY29uc3QgZGlzYWJsZVJpZ2h0QXJyb3cgPSAhaW5maW5pdGUgJiYgaXNSaWdodEVuZFJlYWNoO1xuICAgIC8vIHRoaXMgbGliIHN1cHBvcnRzIHNob3dpbmcgbmV4dCBzZXQgb2YgaXRlbXMgcGFyaXRpYWxseSBhcyB3ZWxsIGFzIGNlbnRlciBtb2RlIHdoaWNoIHNob3dzIGJvdGguXG4gICAgY29uc3QgY3VycmVudFRyYW5zZm9ybSA9IHBhcnRpYWxWaXNiaWxlXG4gICAgICA/IGdldFRyYW5zZm9ybUZvclBhcnRpYWxWc2liaWxlKFxuICAgICAgICAgIHRoaXMuc3RhdGUsXG4gICAgICAgICAgcGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyLFxuICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgKVxuICAgICAgOiBjZW50ZXJNb2RlXG4gICAgICA/IGdldFRyYW5zZm9ybUZvckNlbnRlck1vZGUodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcylcbiAgICAgIDogdGhpcy5zdGF0ZS50cmFuc2Zvcm07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWN0LW11bHRpLWNhcm91c2VsLWxpc3QgJHtjb250YWluZXJDbGFzc30gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICByZWY9e3RoaXMuY29udGFpbmVyUmVmfVxuICAgICAgICA+XG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBjbGFzc05hbWU9e2ByZWFjdC1tdWx0aS1jYXJvdXNlbC10cmFjayAke3NsaWRlckNsYXNzfWB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZFxuICAgICAgICAgICAgICAgID8gY3VzdG9tVHJhbnNpdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgIDogXCJub25lXCIsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBzaG91bGRSZW5kZXJPblNTUiA/IFwiaGlkZGVuXCIgOiBcInVuc2V0XCIsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7Y3VycmVudFRyYW5zZm9ybSArXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbX1weCwwLDApYFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRsZU1vdmV9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVEb3dufVxuICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU91dH1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVPdXR9XG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRG93bn1cbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXt0aGlzLmhhbmRsZU1vdmV9XG4gICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZU91dH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJvdXNlbEl0ZW1zKCl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7c2hvdWxkU2hvd0Fycm93cyAmJiAhZGlzYWJsZUxlZnRBcnJvdyAmJiB0aGlzLnJlbmRlckxlZnRBcnJvdygpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclJpZ2h0QXJyb3coKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInJldmljb25zXCI7XG4gICAgICAgICAgICBmYWxsYmFjazogZmFsbGJhY2s7XG4gICAgICAgICAgICBzcmM6IHVybChcIi4vcmV2aWNvbnMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICAgICAgICB1cmwoXCIuL3Jldmljb25zLnR0ZlwiKSBmb3JtYXQoXCJ0dGZcIiksXG4gICAgICAgICAgICAgIHVybChcIi4vcmV2aWNvbnMuZW90XCIpIGZvcm1hdChcInR0ZlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggeWVsbG93O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDE1MHB4IDAgMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC10cmFjayB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDAgMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIHRyYW5zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQzcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdzpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3c6OmJlZm9yZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJldmljb25zO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoNCUgKyAxcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcXGU4MjRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IGNhbGMoNCUgKyAxcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1yaWdodDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlODI1XCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC1saXN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90IGJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdCBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA4MDgwODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC0tYWN0aXZlIGJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDgwODA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLFxuICAgICAgICAgICAgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC10cmFjayB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl19 */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/Carousel.jsx */"));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Carousel, "defaultProps", {
  slidesToSlide: 1,
  infinite: false,
  draggable: true,
  swipeable: true,
  arrows: true,
  containerClass: "",
  sliderClass: "",
  itemClass: "",
  keyBoardControl: true,
  autoPlaySpeed: 3000,
  showDots: false,
  renderDotsOutside: false,
  minimumTouchDrag: 80,
  dotListClass: "",
  focusOnSelect: false,
  centerMode: false,
  additionalTransfrom: 0
});

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/CarouselIndex.jsx":
/*!**************************************!*\
  !*** ./components/CarouselIndex.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Carousel */ "./components/Carousel.jsx");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Image */ "./components/Image.jsx");





var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/CarouselIndex.jsx";





var CarouselIndex =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CarouselIndex, _Component);

  function CarouselIndex() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CarouselIndex);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CarouselIndex).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CarouselIndex, [{
    key: "render",
    value: function render() {
      var _this = this;

      var images = ["https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"];
      var texts = ["Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.", "Fixing CSS load order/style.chunk.css incorrect in Nextjs", "React Carousel with Server Side Rendering Support – Part 1", "React Carousel with Server Side Rendering Support – Part 2", "Flutter Xcode couldn’t find any iOS App Development provisioning profiles"];
      var fakerData = Array(images.length).fill(0).map(function (item, index) {
        return {
          image: images[index],
          headline: "w3js -> web front-end studio",
          description: texts[index] || texts[0]
        };
      });
      var responsive = {
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 5,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 5,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 3,
          slidesToSlide: 1
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_7__["default"]
      /*
      swipeable={false}
      draggable={false}
      */
      , {
        responsive: responsive,
        ssr: true,
        infinite: false,
        beforeChange: function beforeChange() {
          return _this.setState({
            isMoving: true
          });
        },
        afterChange: function afterChange() {
          return _this.setState({
            isMoving: false
          });
        },
        containerClass: "first-carousel-container container",
        deviceType: this.props.deviceType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, fakerData.slice(0, 9).map(function (card, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
          url: card.image,
          alt: card.headline,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3424682077",
        __self: this
      }, ".image-item.jsx-3424682077{padding:10px;}.container.jsx-3424682077{margin-top:20px;}.container-with-dots.jsx-3424682077{margin-top:20px;padding-bottom:10px;}.react-multi-carousel-dot-list.jsx-3424682077{bottom:0px !important;}#__next.jsx-3424682077{overflow:scroll;margin-bottom:40px;}.react-multi-carousel-dot.jsx-3424682077 button.jsx-3424682077{border-color:grey !important;}a.jsx-3424682077{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.first-carousel-container.jsx-3424682077{margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsSW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFb0IsQUFHMEIsQUFHRyxBQUdBLEFBSU0sQUFHTixBQUlhLEFBSWYsQUFJSyxhQXhCckIsQ0FxQnVCLEVBbEJ2QixBQUdzQixBQU9ELEdBWXJCLEdBZkEsT0FPQSxNQUhBLENBUEEsNEJBZUEiLCJmaWxlIjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvUkVBQ1Qvd2l0aC1hcG9sbG8tYXBwL2NvbXBvbmVudHMvQ2Fyb3VzZWxJbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4vQ2Fyb3VzZWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuY2xhc3MgQ2Fyb3VzZWxJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbWFnZXMgPSBbXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ5OTg5NDc2LTY5YTkyZmE1N2MzNj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9NjBcIixcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDkzOTY1MzUtYzExZDVjNTViOWRmP2l4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9NjBcIixcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTAxMzM3MzAtNjk1NDczZTU0NGJlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT02MFwiLFxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MDE2NzE2NC0xYjY3YzJiZTM5NzM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTYwXCIsXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUwMzM4ODYxLWI3Y2ZlYWY4ZmZkOD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9NjBcIixcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTAyMjM2NDAtMjMwOTdmYzcxY2IyP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT02MFwiLFxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MDM1MzE3NS1hMzYxMTg2ODA4NmI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTYwXCIsXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUwMzMwMDM5LWE1NGUxNWVkOWQzMz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9NjBcIixcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDk3MzczMjgtOGI5ZjMyNTJiOTI3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT02MFwiLFxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0OTgzMzI4NC02YTdkZjkxYzFmNjU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTYwXCIsXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ5OTg1OTA4LTU5N2EwOWVmMGE3Yz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9NjBcIixcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTAwNjQ4MjQtOGY5OTMwNDFmZmQzP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT02MFwiXG4gICAgXTtcbiAgICBjb25zdCB0ZXh0cyA9IFtcbiAgICAgIFwiQXBwZW5kaW5nIGN1cnJlbmN5IHNpZ24gdG8gYSBwdXJjaGFzZSBmb3JtIGluIHlvdXIgZS1jb21tZXJjZSBzaXRlIHVzaW5nIHBsYWluIEphdmFTY3JpcHQuXCIsXG4gICAgICBcIkZpeGluZyBDU1MgbG9hZCBvcmRlci9zdHlsZS5jaHVuay5jc3MgaW5jb3JyZWN0IGluIE5leHRqc1wiLFxuICAgICAgXCJSZWFjdCBDYXJvdXNlbCB3aXRoIFNlcnZlciBTaWRlIFJlbmRlcmluZyBTdXBwb3J0IOKAkyBQYXJ0IDFcIixcbiAgICAgIFwiUmVhY3QgQ2Fyb3VzZWwgd2l0aCBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmcgU3VwcG9ydCDigJMgUGFydCAyXCIsXG4gICAgICBcIkZsdXR0ZXIgWGNvZGUgY291bGRu4oCZdCBmaW5kIGFueSBpT1MgQXBwIERldmVsb3BtZW50IHByb3Zpc2lvbmluZyBwcm9maWxlc1wiXG4gICAgXTtcbiAgICBjb25zdCBmYWtlckRhdGEgPSBBcnJheShpbWFnZXMubGVuZ3RoKVxuICAgICAgLmZpbGwoMClcbiAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW1hZ2U6IGltYWdlc1tpbmRleF0sXG4gICAgICAgICAgaGVhZGxpbmU6IFwidzNqcyAtPiB3ZWIgZnJvbnQtZW5kIHN0dWRpb1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0ZXh0c1tpbmRleF0gfHwgdGV4dHNbMF1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gICAgICBkZXNrdG9wOiB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICAgICAgaXRlbXM6IDUsXG4gICAgICAgIHNsaWRlc1RvU2xpZGU6IDFcbiAgICAgIH0sXG4gICAgICB0YWJsZXQ6IHtcbiAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXG4gICAgICAgIGl0ZW1zOiA1LFxuICAgICAgICBzbGlkZXNUb1NsaWRlOiAxXG4gICAgICB9LFxuICAgICAgbW9iaWxlOiB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgICAgICBpdGVtczogMyxcbiAgICAgICAgc2xpZGVzVG9TbGlkZTogMVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgIC8qXG4gICAgICAgIHN3aXBlYWJsZT17ZmFsc2V9XG4gICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICovXG4gICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICBzc3JcbiAgICAgICAgICBpbmZpbml0ZT17ZmFsc2V9XG4gICAgICAgICAgYmVmb3JlQ2hhbmdlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNNb3Zpbmc6IHRydWUgfSl9XG4gICAgICAgICAgYWZ0ZXJDaGFuZ2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc01vdmluZzogZmFsc2UgfSl9XG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJmaXJzdC1jYXJvdXNlbC1jb250YWluZXIgY29udGFpbmVyXCJcbiAgICAgICAgICBkZXZpY2VUeXBlPXt0aGlzLnByb3BzLmRldmljZVR5cGV9XG4gICAgICAgID5cbiAgICAgICAgICB7ZmFrZXJEYXRhLnNsaWNlKDAsIDkpLm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8SW1hZ2UgdXJsPXtjYXJkLmltYWdlfSBhbHQ9e2NhcmQuaGVhZGxpbmV9IGtleT17aW5kZXh9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmltYWdlLWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyLXdpdGgtZG90cyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3QtbGlzdCB7XG4gICAgICAgICAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90IGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlyc3QtY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/CarouselIndex.jsx */"));
    }
  }]);

  return CarouselIndex;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CarouselIndex);

/***/ }),

/***/ "./components/CarouselItems.jsx":
/*!**************************************!*\
  !*** ./components/CarouselItems.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./components/utils/index.js");
var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/CarouselItems.jsx";




var CarouselItems = function CarouselItems(_ref) {
  var props = _ref.props,
      state = _ref.state,
      goToSlide = _ref.goToSlide,
      clones = _ref.clones;
  var itemWidth = state.itemWidth;
  var children = props.children,
      infinite = props.infinite,
      itemClass = props.itemClass,
      partialVisbile = props.partialVisbile;

  var _getInitialState = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getInitialState"])(state, props),
      flexBisis = _getInitialState.flexBisis,
      shouldRenderOnSSR = _getInitialState.shouldRenderOnSSR,
      domFullyLoaded = _getInitialState.domFullyLoaded,
      paritialVisibilityGutter = _getInitialState.paritialVisibilityGutter,
      shouldRenderAtAll = _getInitialState.shouldRenderAtAll;

  if (!shouldRenderAtAll) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, (infinite ? clones : react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(children)).map(function (child, index) {
    console.log(child, index);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
      key: index,
      "data-index": index,
      onClick: function onClick() {
        if (props.focusOnSelect) {
          goToSlide(index);
        }
      },
      "aria-hidden": Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getIfSlideIsVisbile"])(index, state) ? "false" : "true",
      style: {
        flex: shouldRenderOnSSR ? "1 0 ".concat(flexBisis, "%") : "auto",
        position: "relative",
        width: domFullyLoaded ? "".concat(partialVisbile && paritialVisibilityGutter ? itemWidth - paritialVisibilityGutter : itemWidth, "px") : "auto"
      },
      className: "jsx-1555128225" + " " + "react-multi-carousel-item ".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getIfSlideIsVisbile"])(index, state) ? "react-multi-carousel-item--active" : "", " ").concat(itemClass),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, child, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1555128225",
      __self: this
    }, ".react-multi-carousel-item--active.jsx-1555128225{height:400px;-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}.react-multi-carousel-item.jsx-1555128225{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;}@media all and (-ms-high-contrast:none), (-ms-high-contrast:active){.react-multi-carousel-item.jsx-1555128225{-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;}.react-multi-carousel-track.jsx-1555128225{overflow:visible !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsSXRlbXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEMEIsQUFHZ0MsQUFJZSxBQU1ELEFBR0csYUFaVixlQWFwQix5REFaRixJQVNFLE9BTjJCLDhEQUM3QiIsImZpbGUiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9SRUFDVC93aXRoLWFwb2xsby1hcHAvY29tcG9uZW50cy9DYXJvdXNlbEl0ZW1zLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBnZXRJbml0aWFsU3RhdGUsIGdldElmU2xpZGVJc1Zpc2JpbGUgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBDYXJvdXNlbEl0ZW1zID0gKHsgcHJvcHMsIHN0YXRlLCBnb1RvU2xpZGUsIGNsb25lcyB9KSA9PiB7XG4gIGNvbnN0IHsgaXRlbVdpZHRoIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBjaGlsZHJlbiwgaW5maW5pdGUsIGl0ZW1DbGFzcywgcGFydGlhbFZpc2JpbGUgfSA9IHByb3BzO1xuICBjb25zdCB7XG4gICAgZmxleEJpc2lzLFxuICAgIHNob3VsZFJlbmRlck9uU1NSLFxuICAgIGRvbUZ1bGx5TG9hZGVkLFxuICAgIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlcixcbiAgICBzaG91bGRSZW5kZXJBdEFsbFxuICB9ID0gZ2V0SW5pdGlhbFN0YXRlKHN0YXRlLCBwcm9wcyk7XG4gIGlmICghc2hvdWxkUmVuZGVyQXRBbGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7KGluZmluaXRlID8gY2xvbmVzIDogUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikpLm1hcChcbiAgICAgICAgKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNoaWxkLCBpbmRleCk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBkYXRhLWluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5mb2N1c09uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICBnb1RvU2xpZGUoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e2dldElmU2xpZGVJc1Zpc2JpbGUoaW5kZXgsIHN0YXRlKSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZsZXg6IHNob3VsZFJlbmRlck9uU1NSID8gYDEgMCAke2ZsZXhCaXNpc30lYCA6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGRvbUZ1bGx5TG9hZGVkXG4gICAgICAgICAgICAgICAgICA/IGAke1xuICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWxWaXNiaWxlICYmIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtV2lkdGggLSBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbVdpZHRoXG4gICAgICAgICAgICAgICAgICAgIH1weGBcbiAgICAgICAgICAgICAgICAgIDogXCJhdXRvXCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSAke1xuICAgICAgICAgICAgICAgIGdldElmU2xpZGVJc1Zpc2JpbGUoaW5kZXgsIHN0YXRlKVxuICAgICAgICAgICAgICAgICAgPyBcInJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgfSAke2l0ZW1DbGFzc31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSxcbiAgICAgICAgICAgICAgICAgICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtdHJhY2sge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxJdGVtcztcbiJdfQ== */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/CarouselItems.jsx */"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselItems);

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/ErrorMessage.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
    className: "jsx-160792485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, message, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "160792485",
    __self: this
  }, "aside.jsx-160792485{padding:1.5em;font-size:14px;color:white;background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0IsQUFHdUIsY0FDQyxlQUNILFlBQ1MscUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IG1lc3NhZ2UgfSkgPT4gKFxuICA8YXNpZGU+XG4gICAge21lc3NhZ2V9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYXNpZGUge1xuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYXNpZGU+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/ErrorMessage.js */"));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/Header.js";





var Header = function Header(_ref) {
  var pathname = _ref.router.pathname;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3970066506",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3970066506" + " " + ((pathname === '/' ? 'is-active' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3970066506" + " " + ((pathname === '/about' ? 'is-active' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3970066506",
    __self: this
  }, "header.jsx-3970066506{margin-bottom:25px;}a.jsx-3970066506{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;}.is-active.jsx-3970066506{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXZ0IsQUFHNEIsQUFHSixBQUtXLGVBSlIsSUFIcEIsY0FJdUIsMkJBSXZCLHVCQUhBIiwiZmlsZSI6Ii9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgSGVhZGVyID0gKHsgcm91dGVyOiB7IHBhdGhuYW1lIH0gfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nID8gJ2lzLWFjdGl2ZScgOiAnJ30+SG9tZTwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnID8gJ2lzLWFjdGl2ZScgOiAnJ30+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhlYWRlcilcbiJdfQ== */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ }),

/***/ "./components/Image.jsx":
/*!******************************!*\
  !*** ./components/Image.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/Image.jsx";


var Image = function Image(_ref) {
  var url = _ref.url,
      alt = _ref.alt;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    draggable: false,
    style: {
      width: "100%",
      height: "100%",
      position: "relative"
    },
    src: url,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: allPostsQuery, allPostsQueryVars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPostsQuery", function() { return allPostsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPostsQueryVars", function() { return allPostsQueryVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _PostUpvoter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostUpvoter */ "./components/PostUpvoter.js");



var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/PostList.js";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n    _allPostsMeta {\n      count\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var allPostsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
var allPostsQueryVars = {
  skip: 0,
  first: 10
};
function PostList() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
    query: allPostsQuery,
    variables: allPostsQueryVars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        _ref$data = _ref.data,
        allPosts = _ref$data.allPosts,
        _allPostsMeta = _ref$data._allPostsMeta,
        fetchMore = _ref.fetchMore;
    if (error) return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      message: "Error loading posts.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
    if (loading) return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Loading");
    var areMorePosts = allPosts.length < _allPostsMeta.count;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
      className: "jsx-3530367944",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
      className: "jsx-3530367944",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, allPosts.map(function (post, index) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
        key: post.id,
        className: "jsx-3530367944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "jsx-3530367944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "jsx-3530367944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, index + 1, ". "), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: post.url,
        className: "jsx-3530367944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, post.title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PostUpvoter__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: post.id,
        votes: post.votes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })));
    })), areMorePosts ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      onClick: function onClick() {
        return loadMorePosts(allPosts, fetchMore);
      },
      className: "jsx-3530367944",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "3530367944",
      __self: this
    }, "section.jsx-3530367944{padding-bottom:20px;}li.jsx-3530367944{display:block;margin-bottom:10px;}div.jsx-3530367944{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-3530367944{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}span.jsx-3530367944{font-size:14px;margin-right:5px;}ul.jsx-3530367944{margin:0;padding:0;}button.jsx-3530367944:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL1Bvc3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEd0IsQUFHcUMsQUFHTixBQUlLLEFBSUosQUFPQSxBQUlOLEFBSVMsU0FIUixLQW5CUyxDQVFELEFBT0QsSUFLbkIsQ0F2QkEsWUFtQkEsQ0FmQSxBQVF1QixzQ0FjRixZQWJGLE9BY1UsR0FwQmQsT0FPSixTQUNYLFFBYTJELGtEQXBCM0QsT0FxQmEsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvUkVBQ1Qvd2l0aC1hcG9sbG8tYXBwL2NvbXBvbmVudHMvUG9zdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuaW1wb3J0IFBvc3RVcHZvdGVyIGZyb20gJy4vUG9zdFVwdm90ZXInXG5cbmV4cG9ydCBjb25zdCBhbGxQb3N0c1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBhbGxQb3N0cygkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgYWxsUG9zdHMob3JkZXJCeTogY3JlYXRlZEF0X0RFU0MsIGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHZvdGVzXG4gICAgICB1cmxcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgICBfYWxsUG9zdHNNZXRhIHtcbiAgICAgIGNvdW50XG4gICAgfVxuICB9XG5gXG5leHBvcnQgY29uc3QgYWxsUG9zdHNRdWVyeVZhcnMgPSB7XG4gIHNraXA6IDAsXG4gIGZpcnN0OiAxMFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0TGlzdCAoKSB7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5IHF1ZXJ5PXthbGxQb3N0c1F1ZXJ5fSB2YXJpYWJsZXM9e2FsbFBvc3RzUXVlcnlWYXJzfT5cbiAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YTogeyBhbGxQb3N0cywgX2FsbFBvc3RzTWV0YSB9LCBmZXRjaE1vcmUgfSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9J0Vycm9yIGxvYWRpbmcgcG9zdHMuJyAvPlxuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuXG4gICAgICAgIGNvbnN0IGFyZU1vcmVQb3N0cyA9IGFsbFBvc3RzLmxlbmd0aCA8IF9hbGxQb3N0c01ldGEuY291bnRcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2FsbFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpbmRleCArIDF9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QudXJsfT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDxQb3N0VXB2b3RlciBpZD17cG9zdC5pZH0gdm90ZXM9e3Bvc3Qudm90ZXN9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7YXJlTW9yZVBvc3RzID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlUG9zdHMoYWxsUG9zdHMsIGZldGNoTW9yZSl9PlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnU2hvdyBNb3JlJ317JyAnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApXG59XG5cbmZ1bmN0aW9uIGxvYWRNb3JlUG9zdHMgKGFsbFBvc3RzLCBmZXRjaE1vcmUpIHtcbiAgZmV0Y2hNb3JlKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IGFsbFBvc3RzLmxlbmd0aFxuICAgIH0sXG4gICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICBhbGxQb3N0czogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFBvc3RzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsUG9zdHNdXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/PostList.js */"));
  });
}

function loadMorePosts(allPosts, fetchMore) {
  fetchMore({
    variables: {
      skip: allPosts.length
    },
    updateQuery: function updateQuery(previousResult, _ref2) {
      var fetchMoreResult = _ref2.fetchMoreResult;

      if (!fetchMoreResult) {
        return previousResult;
      }

      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, previousResult, {
        // Append the new posts results to the old one
        allPosts: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(previousResult.allPosts), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fetchMoreResult.allPosts))
      });
    }
  });
}

/***/ }),

/***/ "./components/PostUpvoter.js":
/*!***********************************!*\
  !*** ./components/PostUpvoter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostUpvoter; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/PostUpvoter.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation updatePost($id: ID!, $votes: Int) {\n        updatePost(id: $id, votes: $votes) {\n          id\n          __typename\n          votes\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




function PostUpvoter(_ref) {
  var votes = _ref.votes,
      id = _ref.id;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: function onClick() {
        return upvotePost(votes, id, client);
      },
      className: "jsx-889187495",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, votes, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "889187495",
      __self: this
    }, "button.jsx-889187495{background-color:transparent;border:1px solid #e4e4e4;color:#000;}button.jsx-889187495:active{background-color:transparent;}button.jsx-889187495:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-color:transparent transparent #000000 transparent;border-style:solid;border-width:0 4px 6px 4px;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL1Bvc3RVcHZvdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVzQixBQUc0QyxBQUtBLEFBR1gsNkJBUE8sQUFLM0IseUJBSmEsV0FDYixNQU0yRCx5REFDdEMsbUJBQ1EsMkJBQ2hCLFdBQ0YsU0FDUSxpQkFDVCxRQUNWIiwiZmlsZSI6Ii9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL1Bvc3RVcHZvdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VXB2b3RlciAoeyB2b3RlcywgaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwdm90ZVBvc3Qodm90ZXMsIGlkLCBjbGllbnQpfT5cbiAgICAgICAgICB7dm90ZXN9XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMDAwMDAwIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgNHB4IDZweCA0cHg7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICApXG59XG5cbmZ1bmN0aW9uIHVwdm90ZVBvc3QgKHZvdGVzLCBpZCwgY2xpZW50KSB7XG4gIGNsaWVudC5tdXRhdGUoe1xuICAgIG11dGF0aW9uOiBncWxgXG4gICAgICBtdXRhdGlvbiB1cGRhdGVQb3N0KCRpZDogSUQhLCAkdm90ZXM6IEludCkge1xuICAgICAgICB1cGRhdGVQb3N0KGlkOiAkaWQsIHZvdGVzOiAkdm90ZXMpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIF9fdHlwZW5hbWVcbiAgICAgICAgICB2b3Rlc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkLFxuICAgICAgdm90ZXM6IHZvdGVzICsgMVxuICAgIH0sXG4gICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICBfX3R5cGVuYW1lOiAnTXV0YXRpb24nLFxuICAgICAgdXBkYXRlUG9zdDoge1xuICAgICAgICBfX3R5cGVuYW1lOiAnUG9zdCcsXG4gICAgICAgIGlkLFxuICAgICAgICB2b3Rlczogdm90ZXMgKyAxXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIl19 */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/PostUpvoter.js */"));
  });
}

function upvotePost(votes, id, client) {
  client.mutate({
    mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject()),
    variables: {
      id: id,
      votes: votes + 1
    },
    optimisticResponse: {
      __typename: 'Mutation',
      updatePost: {
        __typename: 'Post',
        id: id,
        votes: votes + 1
      }
    }
  });
}

/***/ }),

/***/ "./components/Submit.js":
/*!******************************!*\
  !*** ./components/Submit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Submit; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PostList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostList */ "./components/PostList.js");



var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/components/Submit.js";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n      mutation createPost($title: String!, $url: String!) {\n        createPost(title: $title, url: $url) {\n          id\n          title\n          votes\n          url\n          createdAt\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




function Submit() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
      onSubmit: function onSubmit(event) {
        return handleSubmit(event, client);
      },
      className: "jsx-3675017326",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
      className: "jsx-3675017326",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Submit"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      placeholder: "title",
      name: "title",
      type: "text",
      required: true,
      className: "jsx-3675017326",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      placeholder: "url",
      name: "url",
      type: "url",
      required: true,
      className: "jsx-3675017326",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "submit",
      className: "jsx-3675017326",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Submit"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "3675017326",
      __self: this
    }, "form.jsx-3675017326{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}h1.jsx-3675017326{font-size:20px;}input.jsx-3675017326{display:block;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL1N1Ym1pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhc0IsQUFHK0MsQUFLakIsQUFHRCxjQUNLLENBSHJCLGlCQUxzQixDQVN0QixtQkFScUIsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL1N1Ym1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IGFsbFBvc3RzUXVlcnksIGFsbFBvc3RzUXVlcnlWYXJzIH0gZnJvbSAnLi9Qb3N0TGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWl0ICgpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2V2ZW50ID0+IGhhbmRsZVN1Ym1pdChldmVudCwgY2xpZW50KX0+XG4gICAgICAgICAgPGgxPlN1Ym1pdDwvaDE+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd0aXRsZScgbmFtZT0ndGl0bGUnIHR5cGU9J3RleHQnIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd1cmwnIG5hbWU9J3VybCcgdHlwZT0ndXJsJyByZXF1aXJlZCAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICApXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQsIGNsaWVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXRcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgd2luZG93LkZvcm1EYXRhKGZvcm0pXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KCd0aXRsZScpXG4gIGNvbnN0IHVybCA9IGZvcm1EYXRhLmdldCgndXJsJylcbiAgZm9ybS5yZXNldCgpXG5cbiAgY2xpZW50Lm11dGF0ZSh7XG4gICAgbXV0YXRpb246IGdxbGBcbiAgICAgIG11dGF0aW9uIGNyZWF0ZVBvc3QoJHRpdGxlOiBTdHJpbmchLCAkdXJsOiBTdHJpbmchKSB7XG4gICAgICAgIGNyZWF0ZVBvc3QodGl0bGU6ICR0aXRsZSwgdXJsOiAkdXJsKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHZvdGVzXG4gICAgICAgICAgdXJsXG4gICAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczogeyB0aXRsZSwgdXJsIH0sXG4gICAgdXBkYXRlOiAocHJveHksIHsgZGF0YTogeyBjcmVhdGVQb3N0IH0gfSkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHByb3h5LnJlYWRRdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBhbGxQb3N0c1F1ZXJ5LFxuICAgICAgICB2YXJpYWJsZXM6IGFsbFBvc3RzUXVlcnlWYXJzXG4gICAgICB9KVxuICAgICAgcHJveHkud3JpdGVRdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBhbGxQb3N0c1F1ZXJ5LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICBhbGxQb3N0czogW2NyZWF0ZVBvc3QsIC4uLmRhdGEuYWxsUG9zdHNdXG4gICAgICAgIH0sXG4gICAgICAgIHZhcmlhYmxlczogYWxsUG9zdHNRdWVyeVZhcnNcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuIl19 */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/Submit.js */"));
  });
}

function handleSubmit(event, client) {
  event.preventDefault();
  var form = event.target;
  var formData = new window.FormData(form);
  var title = formData.get('title');
  var url = formData.get('url');
  form.reset();
  client.mutate({
    mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject()),
    variables: {
      title: title,
      url: url
    },
    update: function update(proxy, _ref) {
      var createPost = _ref.data.createPost;
      var data = proxy.readQuery({
        query: _PostList__WEBPACK_IMPORTED_MODULE_7__["allPostsQuery"],
        variables: _PostList__WEBPACK_IMPORTED_MODULE_7__["allPostsQueryVars"]
      });
      proxy.writeQuery({
        query: _PostList__WEBPACK_IMPORTED_MODULE_7__["allPostsQuery"],
        data: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data, {
          allPosts: [createPost].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.allPosts))
        }),
        variables: _PostList__WEBPACK_IMPORTED_MODULE_7__["allPostsQueryVars"]
      });
    }
  });
}

/***/ }),

/***/ "./components/utils/clones.js":
/*!************************************!*\
  !*** ./components/utils/clones.js ***!
  \************************************/
/*! exports provided: getOriginalCounterPart, getOriginalIndexLookupTableByClones, getClones, checkClonesPosition, getInitialSlideInInifteMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginalCounterPart", function() { return getOriginalCounterPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginalIndexLookupTableByClones", function() { return getOriginalIndexLookupTableByClones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClones", function() { return getClones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkClonesPosition", function() { return checkClonesPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialSlideInInifteMode", function() { return getInitialSlideInInifteMode; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");


/*
getOriginalCounterPart gets the index of the original children.
For example, we have an array [clones, originalChildren, clones];
Before making the clones, an item's index is 0, but after the clone,
the index is different it could be 4, because we added clones to the array after "componentDidMount".
And this function gets the "index" of the item after the clones.
*/
function getOriginalCounterPart(index, _ref, childrenArr) {
  var slidesToShow = _ref.slidesToShow,
      currentSlide = _ref.currentSlide;

  // this function is only used for "infinite and showDots are true";
  if (childrenArr.length > slidesToShow * 2) {
    var originalCouterPart = index + slidesToShow * 2;
    return originalCouterPart;
  } else {
    if (currentSlide >= childrenArr.length) {
      return childrenArr.length + index;
    } else {
      return index;
    }
  }
}
/*
A slide can have many clones, this produces a hash table structure for us to know 
What is the clone of a particular slide and where it is. Note: a slide can have multiple clones.
This is based on the getclones method below.
*/


function getOriginalIndexLookupTableByClones(slidesToShow, childrenArr) {
  if (childrenArr.length > slidesToShow * 2) {
    var table = {};
    var firstBeginningOfClones = childrenArr.length - slidesToShow * 2;
    var firstEndOfClones = childrenArr.length - firstBeginningOfClones;
    var firstCount = firstBeginningOfClones;

    for (var i = 0; i < firstEndOfClones; i++) {
      table[i] = firstCount;
      firstCount++;
    }

    var secondBeginningOfClones = childrenArr.length + firstEndOfClones;
    var secondEndOfClones = secondBeginningOfClones + childrenArr.slice(0, slidesToShow * 2).length;
    var secondCount = 0;

    for (var _i = secondBeginningOfClones; _i <= secondEndOfClones; _i++) {
      table[_i] = secondCount;
      secondCount++;
    }

    var originalStart = firstEndOfClones;
    var originalEnd = secondBeginningOfClones;
    var originalCounter = 0;

    for (var _i2 = originalStart; _i2 < originalEnd; _i2++) {
      table[_i2] = originalCounter;
      originalCounter++;
    }

    return table;
  } else {
    var _table = {};
    var totalSlides = childrenArr.length * 3; // the origianl children array gets clone 3 times.

    var count = 0;

    for (var _i3 = 0; _i3 < totalSlides; _i3++) {
      _table[_i3] = count;
      count++;

      if (count === childrenArr.length) {
        count = 0;
      }
    }

    return _table;
  }
}
/*
The current setting is if the length of the carousel item is larger than "slidesToShow * 2",
then we clone "slidesToShow * 2" amount of beginning and end items.

Otherwise, it means we only have a few items. Then we clone it 3 times.
*/


function getClones(slidesToShow, childrenArr) {
  var clones;

  if (childrenArr.length > slidesToShow * 2) {
    clones = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(childrenArr.slice(childrenArr.length - slidesToShow * 2, childrenArr.length)), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(childrenArr), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(childrenArr.slice(0, slidesToShow * 2)));
  } else {
    clones = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(childrenArr), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(childrenArr), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(childrenArr));
  }

  return clones;
}

function getInitialSlideInInifteMode(slidesToShow, childrenArr) {
  if (childrenArr.length > slidesToShow * 2) {
    return slidesToShow * 2;
  } else {
    return childrenArr.length;
  }
}
/*
When the user sees the clones, we need to reset the position, and cancel the animation so that it
creates the infinite effects.

The if else statement here is based on the getClones method. Because it decides how many items we are cloning.
*/


function checkClonesPosition(_ref2, childrenArr, props) {
  var currentSlide = _ref2.currentSlide,
      slidesToShow = _ref2.slidesToShow,
      itemWidth = _ref2.itemWidth,
      totalItems = _ref2.totalItems;
  // the one is here for pre-swtiching the position just right before we are one more slide away from the end.
  // this gives us enough time to pre-clone the carousel items.
  var nextSlide = 0;
  var nextPosition = 0;
  var isReachingTheEnd;
  var isReachingTheStart = currentSlide === 0;
  var originalFirstSlide = childrenArr.length - (childrenArr.length - slidesToShow * 2);

  if (childrenArr.length > slidesToShow * 2) {
    isReachingTheEnd = currentSlide >= originalFirstSlide + childrenArr.length;

    if (isReachingTheEnd) {
      nextSlide = currentSlide - childrenArr.length;
      nextPosition = -(itemWidth * nextSlide);
    }

    if (isReachingTheStart) {
      nextSlide = originalFirstSlide + (childrenArr.length - slidesToShow * 2);
      nextPosition = -(itemWidth * nextSlide);
    }
  } else {
    isReachingTheEnd = currentSlide >= childrenArr.length * 2;

    if (isReachingTheEnd) {
      nextSlide = currentSlide - childrenArr.length;
      nextPosition = -(itemWidth * nextSlide);
    }

    if (isReachingTheStart) {
      if (props.showDots) {
        nextSlide = childrenArr.length;
        nextPosition = -(itemWidth * nextSlide);
      } else {
        nextSlide = totalItems - slidesToShow * 2;
        nextPosition = -(itemWidth * nextSlide);
      }
    }
  }

  return {
    isReachingTheEnd: isReachingTheEnd,
    isReachingTheStart: isReachingTheStart,
    nextSlide: nextSlide,
    nextPosition: nextPosition
  };
}



/***/ }),

/***/ "./components/utils/common.js":
/*!************************************!*\
  !*** ./components/utils/common.js ***!
  \************************************/
/*! exports provided: isInLeftEnd, isInRightEnd, getInitialState, getIfSlideIsVisbile, getTransformForCenterMode, getTransformForPartialVsibile, notEnoughChildren, getSlidesToSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInLeftEnd", function() { return isInLeftEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInRightEnd", function() { return isInRightEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialState", function() { return getInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIfSlideIsVisbile", function() { return getIfSlideIsVisbile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformForCenterMode", function() { return getTransformForCenterMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformForPartialVsibile", function() { return getTransformForPartialVsibile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEnoughChildren", function() { return notEnoughChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlidesToSlide", function() { return getSlidesToSlide; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementWidth */ "./components/utils/elementWidth.js");




function getInitialState(state, props) {
  var domLoaded = state.domLoaded,
      slidesToShow = state.slidesToShow,
      containerWidth = state.containerWidth,
      itemWidth = state.itemWidth;
  var deviceType = props.deviceType,
      responsive = props.responsive,
      ssr = props.ssr,
      partialVisbile = props.partialVisbile;
  var flexBisis;
  var domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth);

  if (ssr && deviceType && !domFullyLoaded) {
    flexBisis = Object(_elementWidth__WEBPACK_IMPORTED_MODULE_2__["getWidthFromDeviceType"])(deviceType, responsive);
  }

  var shouldRenderOnSSR = Boolean(ssr && deviceType && !domFullyLoaded && flexBisis);
  var paritialVisibilityGutter = Object(_elementWidth__WEBPACK_IMPORTED_MODULE_2__["getParitialVisibilityGutter"])(responsive, partialVisbile, deviceType, state.deviceType);
  var shouldRenderAtAll = shouldRenderOnSSR || domFullyLoaded;
  return {
    shouldRenderOnSSR: shouldRenderOnSSR,
    flexBisis: flexBisis,
    domFullyLoaded: domFullyLoaded,
    paritialVisibilityGutter: paritialVisibilityGutter,
    shouldRenderAtAll: shouldRenderAtAll
  };
}

function getIfSlideIsVisbile(index, state) {
  var currentSlide = state.currentSlide,
      slidesToShow = state.slidesToShow;
  return index >= currentSlide && index < currentSlide + slidesToShow;
}

function getTransformForCenterMode(state, props) {
  if (state.currentSlide === 0 && !props.infinite) {
    return state.transform;
  } else {
    return state.transform + state.itemWidth / 2;
  }
}

function getTransformForPartialVsibile(state) {
  var paritialVisibilityGutter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var props = arguments.length > 2 ? arguments[2] : undefined;
  var currentSlide = state.currentSlide,
      slidesToShow = state.slidesToShow;
  var isRightEndReach = isInRightEnd(state);
  var shouldRemoveRightGutter = !props.infinite && isRightEndReach;
  var transform = state.transform + currentSlide * paritialVisibilityGutter;

  if (shouldRemoveRightGutter) {
    var remainingWidth = state.containerWidth - (state.itemWidth - paritialVisibilityGutter) * slidesToShow;
    return transform + remainingWidth;
  }

  return transform;
}

function isInLeftEnd(_ref) {
  var currentSlide = _ref.currentSlide;
  return !(currentSlide > 0);
}

function isInRightEnd(_ref2) {
  var currentSlide = _ref2.currentSlide,
      totalItems = _ref2.totalItems,
      slidesToShow = _ref2.slidesToShow;
  return !(currentSlide + slidesToShow < totalItems);
}

function notEnoughChildren(state, props, items) {
  var childrenArr = react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(props.children);
  var slidesToShow = state.slidesToShow;
  return items ? childrenArr.length < items : childrenArr.length < slidesToShow;
}

function getSlidesToSlide(state, props) {
  var domLoaded = state.domLoaded,
      slidesToShow = state.slidesToShow,
      containerWidth = state.containerWidth,
      itemWidth = state.itemWidth;
  var deviceType = props.deviceType,
      responsive = props.responsive;
  var slidesToScroll = props.slidesToSlide || 1;
  var domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth);
  var ssr = props.ssr && props.deviceType && !domFullyLoaded;

  if (ssr) {
    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(responsive).forEach(function (device) {
      var slidesToSlide = responsive[device].slidesToSlide;

      if (deviceType === device && slidesToSlide) {
        slidesToScroll = slidesToSlide;
      }
    });
  }

  if (domFullyLoaded) {
    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(responsive).forEach(function (item) {
      var _responsive$item = responsive[item],
          breakpoint = _responsive$item.breakpoint,
          slidesToSlide = _responsive$item.slidesToSlide;
      var max = breakpoint.max,
          min = breakpoint.min;

      if (slidesToSlide && window.innerWidth >= min && window.innerWidth <= max) {
        slidesToScroll = slidesToSlide;
      }
    });
  }

  return slidesToScroll;
}



/***/ }),

/***/ "./components/utils/elementWidth.js":
/*!******************************************!*\
  !*** ./components/utils/elementWidth.js ***!
  \******************************************/
/*! exports provided: getWidthFromDeviceType, getParitialVisibilityGutter, getItemClientSideWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidthFromDeviceType", function() { return getWidthFromDeviceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParitialVisibilityGutter", function() { return getParitialVisibilityGutter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemClientSideWidth", function() { return getItemClientSideWidth; });
function getParitialVisibilityGutter(responsive, partialVisbile, serverSideDeviceType, clientSideDeviceType) {
  var gutter = 0;
  var deviceType = clientSideDeviceType || serverSideDeviceType;

  if (partialVisbile && deviceType) {
    gutter = responsive[deviceType].paritialVisibilityGutter;
  }

  return gutter;
}

function getWidthFromDeviceType(deviceType, responsive) {
  var itemWidth;

  if (responsive[deviceType]) {
    var items = responsive[deviceType].items;
    itemWidth = (100 / items).toFixed(1);
  }

  return itemWidth;
}

function getItemClientSideWidth(props, slidesToShow, containerWidth) {
  return Math.round(containerWidth / (slidesToShow + (props.centerMode ? 1 : 0)));
}



/***/ }),

/***/ "./components/utils/index.js":
/*!***********************************!*\
  !*** ./components/utils/index.js ***!
  \***********************************/
/*! exports provided: isInLeftEnd, isInRightEnd, getOriginalCounterPart, getClones, getSlidesToSlide, getWidthFromDeviceType, checkClonesPosition, getItemClientSideWidth, getParitialVisibilityGutter, throttle, getInitialState, getIfSlideIsVisbile, getTransformForCenterMode, getTransformForPartialVsibile, throwError, populateNextSlides, populatePreviousSlides, populateSlidesOnMouseTouchMove, notEnoughChildren, getInitialSlideInInifteMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clones */ "./components/utils/clones.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOriginalCounterPart", function() { return _clones__WEBPACK_IMPORTED_MODULE_0__["getOriginalCounterPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClones", function() { return _clones__WEBPACK_IMPORTED_MODULE_0__["getClones"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkClonesPosition", function() { return _clones__WEBPACK_IMPORTED_MODULE_0__["checkClonesPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialSlideInInifteMode", function() { return _clones__WEBPACK_IMPORTED_MODULE_0__["getInitialSlideInInifteMode"]; });

/* harmony import */ var _elementWidth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementWidth */ "./components/utils/elementWidth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWidthFromDeviceType", function() { return _elementWidth__WEBPACK_IMPORTED_MODULE_1__["getWidthFromDeviceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getItemClientSideWidth", function() { return _elementWidth__WEBPACK_IMPORTED_MODULE_1__["getItemClientSideWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParitialVisibilityGutter", function() { return _elementWidth__WEBPACK_IMPORTED_MODULE_1__["getParitialVisibilityGutter"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./components/utils/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInLeftEnd", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["isInLeftEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInRightEnd", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["isInRightEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSlidesToSlide", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["getSlidesToSlide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialState", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["getInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIfSlideIsVisbile", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["getIfSlideIsVisbile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTransformForCenterMode", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["getTransformForCenterMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTransformForPartialVsibile", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["getTransformForPartialVsibile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEnoughChildren", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["notEnoughChildren"]; });

/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./throttle */ "./components/utils/throttle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _throttle__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _throwError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./throwError */ "./components/utils/throwError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _throwError__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./next */ "./components/utils/next.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "populateNextSlides", function() { return _next__WEBPACK_IMPORTED_MODULE_5__["populateNextSlides"]; });

/* harmony import */ var _previous__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./previous */ "./components/utils/previous.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "populatePreviousSlides", function() { return _previous__WEBPACK_IMPORTED_MODULE_6__["populatePreviousSlides"]; });

/* harmony import */ var _mouseOrTouchMove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mouseOrTouchMove */ "./components/utils/mouseOrTouchMove.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "populateSlidesOnMouseTouchMove", function() { return _mouseOrTouchMove__WEBPACK_IMPORTED_MODULE_7__["populateSlidesOnMouseTouchMove"]; });











/***/ }),

/***/ "./components/utils/mouseOrTouchMove.js":
/*!**********************************************!*\
  !*** ./components/utils/mouseOrTouchMove.js ***!
  \**********************************************/
/*! exports provided: populateSlidesOnMouseTouchMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateSlidesOnMouseTouchMove", function() { return populateSlidesOnMouseTouchMove; });
// this is to get the values for handling onTouchMove / onMouseMove;
function populateSlidesOnMouseTouchMove(state, props, initialX, lastX, clientX) {
  var itemWidth = state.itemWidth,
      slidesToShow = state.slidesToShow,
      totalItems = state.totalItems,
      transform = state.transform,
      currentSlide = state.currentSlide;
  var infinite = props.infinite;
  var canContinue = false; // it will be true if we have slides to slide to.

  var direction; // either 'left' or 'right'

  var nextPosition; // making sure we have items to slide back to, prevent oversliding.

  var slidesHavePassedRight = Math.round((initialX - lastX) / itemWidth);
  var slidesHavePassedLeft = Math.round((lastX - initialX) / itemWidth);
  var isMovingRight = initialX > clientX;
  var isMovingLeft = clientX > initialX;

  if (isMovingRight) {
    var isAboutToOverSlide = !(slidesHavePassedRight <= slidesToShow);

    if (!isAboutToOverSlide) {
      direction = "right";
      var translateXLimit = Math.abs(-(itemWidth * (totalItems - slidesToShow)));
      var nextTranslate = transform - (lastX - clientX);
      var isLastSlide = currentSlide === totalItems - slidesToShow;

      if (Math.abs(nextTranslate) <= translateXLimit || isLastSlide && infinite) {
        nextPosition = nextTranslate;
        canContinue = true;
      }
    }
  }

  if (isMovingLeft) {
    var _isAboutToOverSlide = !(slidesHavePassedLeft <= slidesToShow);

    if (!_isAboutToOverSlide) {
      direction = "left";

      var _nextTranslate = transform + (clientX - lastX);

      var isFirstSlide = currentSlide === 0;

      if (_nextTranslate <= 0 || isFirstSlide && infinite) {
        canContinue = true;
        nextPosition = _nextTranslate;
      }
    }
  }

  return {
    direction: direction,
    nextPosition: nextPosition,
    canContinue: canContinue
  };
}



/***/ }),

/***/ "./components/utils/next.js":
/*!**********************************!*\
  !*** ./components/utils/next.js ***!
  \**********************************/
/*! exports provided: populateNextSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateNextSlides", function() { return populateNextSlides; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./components/utils/common.js");

/*
two cases:
1. We are not over-sliding.
2. We are sliding over to what we have, that means nextslides > this.props.children.length. (does not apply to the inifnite mode)
*/

function populateNextSlides(state, props) {
  var slidesHavePassed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var slidesToShow = state.slidesToShow,
      currentSlide = state.currentSlide,
      itemWidth = state.itemWidth,
      totalItems = state.totalItems;
  var slidesToSlide = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getSlidesToSlide"])(state, props);
  var nextSlides;
  var nextPosition; // possibile next number of slides that don't go over what we have, this doesn't apply to the infinite mode.
  // because for inifnite mode this will never happen.

  var nextMaximumSlides = currentSlide + 1 + slidesHavePassed + slidesToShow + (slidesHavePassed > 0 ? 0 : slidesToSlide);

  if (nextMaximumSlides <= totalItems) {
    // It means if we have next slides go back to on the right-hand side.
    nextSlides = currentSlide + slidesHavePassed + (slidesHavePassed > 0 ? 0 : slidesToSlide);
    nextPosition = -(itemWidth * nextSlides);
  } else if (nextMaximumSlides > totalItems && currentSlide !== totalItems - slidesToShow) {
    // This is to prevent oversliding
    // This is not for inifinite mode as for inifinite mode is never over-sliding.
    nextSlides = totalItems - slidesToShow;
    nextPosition = -(itemWidth * nextSlides);
  } else {
    nextSlides = undefined;
    nextPosition = undefined;
  }

  return {
    nextSlides: nextSlides,
    nextPosition: nextPosition
  };
}



/***/ }),

/***/ "./components/utils/previous.js":
/*!**************************************!*\
  !*** ./components/utils/previous.js ***!
  \**************************************/
/*! exports provided: populatePreviousSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populatePreviousSlides", function() { return populatePreviousSlides; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./components/utils/common.js");



/*
two cases:
1. We are not over-sliding.
2. We are sliding over to what we have, that means nextslides < this.props.children.length. (does not apply to the inifnite mode)
*/

function populatePreviousSlides(state, props) {
  var slidesHavePassed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var currentSlide = state.currentSlide,
      itemWidth = state.itemWidth,
      slidesToShow = state.slidesToShow;
  var children = props.children,
      showDots = props.showDots,
      infinite = props.infinite;
  var slidesToSlide = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getSlidesToSlide"])(state, props);
  var nextSlides;
  var nextPosition;
  var nextMaximumSlides = currentSlide - slidesHavePassed - (slidesHavePassed > 0 ? 0 : slidesToSlide);
  var childrenArr = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);
  var additionalSlides = (childrenArr.length - slidesToShow) % slidesToSlide;

  if (nextMaximumSlides >= 0) {
    // It means if we have next slides go back to on the left-hand side.
    nextSlides = nextMaximumSlides;

    if (showDots && !infinite && additionalSlides > 0 && Object(_common__WEBPACK_IMPORTED_MODULE_1__["isInRightEnd"])(state)) {
      nextSlides = currentSlide - additionalSlides;
    }

    nextPosition = -(itemWidth * nextSlides);
  } else if (nextMaximumSlides < 0 && currentSlide !== 0) {
    // prevent oversliding.
    // it means the user has almost scrolling over to what we have.
    // if true, then we go back to the first slide.
    // this is not for infinite mode as infinite mode always has items to go back to.
    nextSlides = 0;
    nextPosition = 0;
  } else {
    nextSlides = undefined;
    nextPosition = undefined;
  }

  return {
    nextSlides: nextSlides,
    nextPosition: nextPosition
  };
}



/***/ }),

/***/ "./components/utils/throttle.js":
/*!**************************************!*\
  !*** ./components/utils/throttle.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var throttle = function throttle(func, limit, setIsInThrottle) {
  var inThrottle;
  return function () {
    var args = arguments;
    var context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;

      if (typeof setIsInThrottle === "function") {
        setIsInThrottle(true);
      }

      setTimeout(function () {
        inThrottle = false;

        if (typeof setIsInThrottle === "function") {
          setIsInThrottle(false);
        }
      }, limit);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (throttle);

/***/ }),

/***/ "./components/utils/throwError.js":
/*!****************************************!*\
  !*** ./components/utils/throwError.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function throwError(state, props) {
  var partialVisbile = props.partialVisbile,
      centerMode = props.centerMode,
      ssr = props.ssr,
      responsive = props.responsive,
      infinite = props.infinite;

  if (partialVisbile && centerMode) {
    throw new Error("center mode can not be used at the same time with partialVisbile");
  }

  if (!responsive) {
    if (ssr) {
      throw new Error("ssr mode need to be used in conjunction with responsive prop");
    } else {
      throw new Error("Responsive prop is needed for deciding the amount of items to show on the screen");
    }
  }

  if (responsive && typeof responsive !== "object") {
    throw new Error("responsive prop must be an object");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (throwError);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Submit */ "./components/Submit.js");
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostList */ "./components/PostList.js");
/* harmony import */ var _components_CarouselIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CarouselIndex */ "./components/CarouselIndex.jsx");
var _jsxFileName = "/Users/admin/Desktop/REACT/with-apollo-app/pages/index.js";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Submit__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CarouselIndex__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Desktop/REACT/with-apollo-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map