webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CarouselItems.jsx":
/*!**************************************!*\
  !*** ./components/CarouselItems.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
      className: "jsx-421877563" + " " + "react-multi-carousel-item ".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getIfSlideIsVisbile"])(index, state) ? "react-multi-carousel-item--active" : "", " ").concat(itemClass),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, child, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "421877563",
      __self: this
    }, ".react-multi-carousel-item--active.jsx-421877563{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}.react-multi-carousel-item.jsx-421877563{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;}@media all and (-ms-high-contrast:none), (-ms-high-contrast:active){.react-multi-carousel-item.jsx-421877563{-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;}.react-multi-carousel-track.jsx-421877563{overflow:visible !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsSXRlbXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEMEIsQUFHdUMsQUFHUSxBQU1ELEFBR0csNEJBQzlCLDRDQVpGLGlCQVNFLE9BTjJCLDhEQUM3QiIsImZpbGUiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9SRUFDVC93aXRoLWFwb2xsby1hcHAvY29tcG9uZW50cy9DYXJvdXNlbEl0ZW1zLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBnZXRJbml0aWFsU3RhdGUsIGdldElmU2xpZGVJc1Zpc2JpbGUgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBDYXJvdXNlbEl0ZW1zID0gKHsgcHJvcHMsIHN0YXRlLCBnb1RvU2xpZGUsIGNsb25lcyB9KSA9PiB7XG4gIGNvbnN0IHsgaXRlbVdpZHRoIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBjaGlsZHJlbiwgaW5maW5pdGUsIGl0ZW1DbGFzcywgcGFydGlhbFZpc2JpbGUgfSA9IHByb3BzO1xuICBjb25zdCB7XG4gICAgZmxleEJpc2lzLFxuICAgIHNob3VsZFJlbmRlck9uU1NSLFxuICAgIGRvbUZ1bGx5TG9hZGVkLFxuICAgIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlcixcbiAgICBzaG91bGRSZW5kZXJBdEFsbFxuICB9ID0gZ2V0SW5pdGlhbFN0YXRlKHN0YXRlLCBwcm9wcyk7XG4gIGlmICghc2hvdWxkUmVuZGVyQXRBbGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7KGluZmluaXRlID8gY2xvbmVzIDogUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikpLm1hcChcbiAgICAgICAgKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgZGF0YS1pbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuZm9jdXNPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgZ29Ub1NsaWRlKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXtnZXRJZlNsaWRlSXNWaXNiaWxlKGluZGV4LCBzdGF0ZSkgPyBcImZhbHNlXCIgOiBcInRydWVcIn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmbGV4OiBzaG91bGRSZW5kZXJPblNTUiA/IGAxIDAgJHtmbGV4QmlzaXN9JWAgOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBkb21GdWxseUxvYWRlZFxuICAgICAgICAgICAgICAgICAgPyBgJHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzYmlsZSAmJiBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVdpZHRoIC0gcGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW1XaWR0aFxuICAgICAgICAgICAgICAgICAgICB9cHhgXG4gICAgICAgICAgICAgICAgICA6IFwiYXV0b1wiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0gJHtcbiAgICAgICAgICAgICAgICBnZXRJZlNsaWRlSXNWaXNiaWxlKGluZGV4LCBzdGF0ZSlcbiAgICAgICAgICAgICAgICAgID8gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgIH0gJHtpdGVtQ2xhc3N9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkfVxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSxcbiAgICAgICAgICAgICAgICAgICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtdHJhY2sge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxJdGVtcztcbiJdfQ== */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/CarouselItems.jsx */"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselItems);

/***/ })

})
//# sourceMappingURL=index.js.3a16a737068d4b5da4df.hot-update.js.map