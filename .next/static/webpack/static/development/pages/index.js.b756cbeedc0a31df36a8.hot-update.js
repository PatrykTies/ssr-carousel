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
      className: "jsx-3640520105" + " " + "react-multi-carousel-item ".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getIfSlideIsVisbile"])(index, state) ? "react-multi-carousel-item--active" : "", " ").concat(itemClass),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, child, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3640520105",
      __self: this
    }, ".react-multi-carousel-item--active.jsx-3640520105{-webkit-transform:scaleY(1.2);-ms-transform:scaleY(1.2);transform:scaleY(1.2);}.react-multi-carousel-item.jsx-3640520105{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;}@media all and (-ms-high-contrast:none), (-ms-high-contrast:active){.react-multi-carousel-item.jsx-3640520105{-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;}.react-multi-carousel-track.jsx-3640520105{overflow:visible !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsSXRlbXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEMEIsQUFHeUMsQUFHTSxBQU1ELEFBR0csNEJBQzlCLGtEQVpGLFdBU0UsT0FOMkIsOERBQzdCIiwiZmlsZSI6Ii9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsSXRlbXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGdldEluaXRpYWxTdGF0ZSwgZ2V0SWZTbGlkZUlzVmlzYmlsZSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IENhcm91c2VsSXRlbXMgPSAoeyBwcm9wcywgc3RhdGUsIGdvVG9TbGlkZSwgY2xvbmVzIH0pID0+IHtcbiAgY29uc3QgeyBpdGVtV2lkdGggfSA9IHN0YXRlO1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbmZpbml0ZSwgaXRlbUNsYXNzLCBwYXJ0aWFsVmlzYmlsZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHtcbiAgICBmbGV4QmlzaXMsXG4gICAgc2hvdWxkUmVuZGVyT25TU1IsXG4gICAgZG9tRnVsbHlMb2FkZWQsXG4gICAgcGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyLFxuICAgIHNob3VsZFJlbmRlckF0QWxsXG4gIH0gPSBnZXRJbml0aWFsU3RhdGUoc3RhdGUsIHByb3BzKTtcbiAgaWYgKCFzaG91bGRSZW5kZXJBdEFsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsoaW5maW5pdGUgPyBjbG9uZXMgOiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKSkubWFwKFxuICAgICAgICAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBkYXRhLWluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5mb2N1c09uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICBnb1RvU2xpZGUoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e2dldElmU2xpZGVJc1Zpc2JpbGUoaW5kZXgsIHN0YXRlKSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZsZXg6IHNob3VsZFJlbmRlck9uU1NSID8gYDEgMCAke2ZsZXhCaXNpc30lYCA6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGRvbUZ1bGx5TG9hZGVkXG4gICAgICAgICAgICAgICAgICA/IGAke1xuICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWxWaXNiaWxlICYmIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtV2lkdGggLSBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbVdpZHRoXG4gICAgICAgICAgICAgICAgICAgIH1weGBcbiAgICAgICAgICAgICAgICAgIDogXCJhdXRvXCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSAke1xuICAgICAgICAgICAgICAgIGdldElmU2xpZGVJc1Zpc2JpbGUoaW5kZXgsIHN0YXRlKVxuICAgICAgICAgICAgICAgICAgPyBcInJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgfSAke2l0ZW1DbGFzc31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksXG4gICAgICAgICAgICAgICAgICAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLXRyYWNrIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsSXRlbXM7XG4iXX0= */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/CarouselItems.jsx */"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselItems);

/***/ })

})
//# sourceMappingURL=index.js.b756cbeedc0a31df36a8.hot-update.js.map