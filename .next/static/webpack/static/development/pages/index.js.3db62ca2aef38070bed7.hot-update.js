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
      className: "jsx-64294728" + " " + "react-multi-carousel-item ".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getIfSlideIsVisbile"])(index, state) ? "react-multi-carousel-item--active" : "", " ").concat(itemClass),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, child, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "64294728",
      __self: this
    }, ".react-multi-carousel-item--active.jsx-64294728{display:none;}.react-multi-carousel-item.jsx-64294728{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;}@media all and (-ms-high-contrast:none), (-ms-high-contrast:active){.react-multi-carousel-item.jsx-64294728{-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;}.react-multi-carousel-track.jsx-64294728{overflow:visible !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsSXRlbXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEMEIsQUFHZ0MsQUFHZSxBQU1ELEFBR0csYUFYaEMsZUFZRSw2REFIQSxPQU4yQiw4REFDN0IiLCJmaWxlIjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvUkVBQ1Qvd2l0aC1hcG9sbG8tYXBwL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZ2V0SW5pdGlhbFN0YXRlLCBnZXRJZlNsaWRlSXNWaXNiaWxlIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgQ2Fyb3VzZWxJdGVtcyA9ICh7IHByb3BzLCBzdGF0ZSwgZ29Ub1NsaWRlLCBjbG9uZXMgfSkgPT4ge1xuICBjb25zdCB7IGl0ZW1XaWR0aCB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGluZmluaXRlLCBpdGVtQ2xhc3MsIHBhcnRpYWxWaXNiaWxlIH0gPSBwcm9wcztcbiAgY29uc3Qge1xuICAgIGZsZXhCaXNpcyxcbiAgICBzaG91bGRSZW5kZXJPblNTUixcbiAgICBkb21GdWxseUxvYWRlZCxcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXIsXG4gICAgc2hvdWxkUmVuZGVyQXRBbGxcbiAgfSA9IGdldEluaXRpYWxTdGF0ZShzdGF0ZSwgcHJvcHMpO1xuICBpZiAoIXNob3VsZFJlbmRlckF0QWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyhpbmZpbml0ZSA/IGNsb25lcyA6IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pKS5tYXAoXG4gICAgICAgIChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGRhdGEtaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLmZvY3VzT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgIGdvVG9TbGlkZShpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17Z2V0SWZTbGlkZUlzVmlzYmlsZShpbmRleCwgc3RhdGUpID8gXCJmYWxzZVwiIDogXCJ0cnVlXCJ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZmxleDogc2hvdWxkUmVuZGVyT25TU1IgPyBgMSAwICR7ZmxleEJpc2lzfSVgIDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogZG9tRnVsbHlMb2FkZWRcbiAgICAgICAgICAgICAgICAgID8gYCR7XG4gICAgICAgICAgICAgICAgICAgICAgcGFydGlhbFZpc2JpbGUgJiYgcGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1XaWR0aCAtIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgfXB4YFxuICAgICAgICAgICAgICAgICAgOiBcImF1dG9cIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtICR7XG4gICAgICAgICAgICAgICAgZ2V0SWZTbGlkZUlzVmlzYmlsZShpbmRleCwgc3RhdGUpXG4gICAgICAgICAgICAgICAgICA/IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICB9ICR7aXRlbUNsYXNzfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSxcbiAgICAgICAgICAgICAgICAgICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtdHJhY2sge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxJdGVtcztcbiJdfQ== */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/CarouselItems.jsx */"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselItems);

/***/ })

})
//# sourceMappingURL=index.js.3db62ca2aef38070bed7.hot-update.js.map