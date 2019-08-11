webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
        className: "jsx-1685729483" + " " + "react-multi-carousel-list ".concat(containerClass, " ").concat(className),
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
        className: "jsx-1685729483" + " " + "react-multi-carousel-track ".concat(sliderClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, this.renderCarouselItems()), shouldShowArrows && !disableLeftArrow && this.renderLeftArrow(), this.renderRightArrow()), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1685729483",
        __self: this
      }, "@font-face{font-family:\"revicons\";fallback:fallback;src:url(\"./revicons.woff\") format(\"woff\"), url(\"./revicons.ttf\") format(\"ttf\"), url(\"./revicons.eot\") format(\"ttf\");}.react-multi-carousel-list.jsx-1685729483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative;border:solid 2px yellow;margin:0 150px 0 150px;}.react-multi-carousel-track.jsx-1685729483{list-style:none;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform,transition;}.react-multiple-carousel__arrow.jsx-1685729483{position:absolute;outline:none;-webkit-transition:all 0.5s;transition:all 0.5s;border-radius:35px;z-index:1000;border:none;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer;}.react-multiple-carousel__arrow.jsx-1685729483:hover{background:rgba(0,0,0,0.8);}.react-multiple-carousel__arrow.jsx-1685729483::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative;}.react-multiple-carousel__arrow--left.jsx-1685729483{left:calc(4% + 1px);}.react-multiple-carousel__arrow--left.jsx-1685729483::before{content:\"e824\";}.react-multiple-carousel__arrow--right.jsx-1685729483{right:calc(4% + 1px);}.react-multiple-carousel__arrow--right.jsx-1685729483::before{content:\"e825\";}.react-multi-carousel-dot-list.jsx-1685729483{position:absolute;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:0;right:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:auto;padding:0;margin:0;list-style:none;text-align:center;}.react-multi-carousel-dot.jsx-1685729483 button.jsx-1685729483{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;padding:5px 5px 5px 5px;box-shadow:none;-webkit-transition:background 0.5s;transition:background 0.5s;border-width:2px;border-style:solid;border-color:grey;padding:0;margin:0;margin-right:6px;outline:0;cursor:pointer;}.react-multi-carousel-dot.jsx-1685729483 button.jsx-1685729483:hover{background:#080808;}.react-multi-carousel-dot--active.jsx-1685729483 button.jsx-1685729483{background:#080808;}.react-multi-carousel-item.jsx-1685729483{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;}@media all and (-ms-high-contrast:none), (-ms-high-contrast:active){.react-multi-carousel-item.jsx-1685729483{-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;}.react-multi-carousel-track.jsx-1685729483{overflow:visible !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzZ0JvQixBQUdvQyxBQU9WLEFBUUcsQUFXRSxBQWFZLEFBR2YsQUFVSyxBQUdMLEFBR00sQUFHTixBQUlHLEFBYUcsQUFrQkYsQUFHQSxBQUdTLEFBTUQsQUFHRyxlQXBFbkIsQUFhYixBQU1BLENBOUNZLEVBV0csQUF1Q0osQ0ErQlgsQUFHQSxDQS9DQSxDQU1BLEFBb0JhLEVBOUVPLEdBZ0JULEFBMkJLLENBSmhCLEFBMkJlLENBNkNiLEdBcEZvQixDQW9EUixHQTlEQyxLQTJCUSxDQXpDZ0IsR0E2RW5CLGlCQW5DQSxDQW9DUixVQUNjLEVBM0VMLEtBcUJBLEFBa0JULFVBQ1EsQUE2RGxCLE9BekJnQixBQW1CVyxFQXpFZCxHQXNDTixNQW5CVCxDQW9CVSxDQWxEVyxFQVlQLENBc0RlLElBZkosT0F0Q08sMkJBQ2YsT0E1QmpCLENBbUdBLE9BdEVrQixFQXpCQSxPQTZFQyxJQWxFQyxHQWVSLEVBekJRLFFBMEJILEFBbURJLEtBbEVTLEtBVkosS0EwQjFCLElBbURvQixLQWpCTixVQTNEVyxFQTREYixDQWlCQSxTQWhCRCxDQWlCQSxRQWhCTyxDQWlCQyxDQTlFbkIsY0E4RG9CLEVBaUJSLFVBQ0ssTUFqQmpCLFNBa0JBLEdBeEU2Qiw4REFDTyxpQ0FDcEMiLCJmaWxlIjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvUkVBQ1Qvd2l0aC1hcG9sbG8tYXBwL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsSXRlbXMgZnJvbSBcIi4vQ2Fyb3VzZWxJdGVtc1wiO1xuaW1wb3J0IHsgTGVmdEFycm93LCBSaWdodEFycm93IH0gZnJvbSBcIi4vQXJyb3dzXCI7XG5pbXBvcnQge1xuICB0aHJvdHRsZSxcbiAgZ2V0Q2xvbmVzLFxuICBjaGVja0Nsb25lc1Bvc2l0aW9uLCAvLyBoYW5kbGUgd2hlbiB0aGVyZSBhcmUgY2xvbmVzIGFwcGVhciBvbiB0aGUgc2NyZWVuLCBvbmx5IGFwcGx5IHRvIGluZmluaXRlIG1vZGUuXG4gIGdldEluaXRpYWxTdGF0ZSxcbiAgZ2V0VHJhbnNmb3JtRm9yQ2VudGVyTW9kZSxcbiAgZ2V0VHJhbnNmb3JtRm9yUGFydGlhbFZzaWJpbGUsXG4gIHRocm93RXJyb3IsXG4gIGdldEl0ZW1DbGllbnRTaWRlV2lkdGgsXG4gIHBvcHVsYXRlTmV4dFNsaWRlcyxcbiAgcG9wdWxhdGVQcmV2aW91c1NsaWRlcyxcbiAgcG9wdWxhdGVTbGlkZXNPbk1vdXNlVG91Y2hNb3ZlLFxuICBpc0luTGVmdEVuZCxcbiAgaXNJblJpZ2h0RW5kLFxuICBnZXRJbml0aWFsU2xpZGVJbkluaWZ0ZU1vZGUsXG4gIG5vdEVub3VnaENoaWxkcmVuXG59IGZyb20gXCIuL3V0aWxzXCI7XG5jb25zdCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uID0gNDAwO1xuY29uc3QgZGVmYXVsdFRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dFwiO1xuXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2xpZGVzVG9TbGlkZTogMSxcbiAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgIHN3aXBlYWJsZTogdHJ1ZSxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgY29udGFpbmVyQ2xhc3M6IFwiXCIsXG4gICAgc2xpZGVyQ2xhc3M6IFwiXCIsXG4gICAgaXRlbUNsYXNzOiBcIlwiLFxuICAgIGtleUJvYXJkQ29udHJvbDogdHJ1ZSxcbiAgICBhdXRvUGxheVNwZWVkOiAzMDAwLFxuICAgIHNob3dEb3RzOiBmYWxzZSxcbiAgICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG4gICAgbWluaW11bVRvdWNoRHJhZzogODAsXG4gICAgZG90TGlzdENsYXNzOiBcIlwiLFxuICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgIGFkZGl0aW9uYWxUcmFuc2Zyb206IDBcbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jb250YWluZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXRlbVdpZHRoOiAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAwLFxuICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgdG90YWxJdGVtczogUmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pLFxuICAgICAgZGV2aWNlVHlwZTogXCJcIixcbiAgICAgIGRvbUxvYWRlZDogZmFsc2UsXG4gICAgICB0cmFuc2Zvcm06IDAsXG4gICAgICBjb250YWluZXJXaWR0aDogMFxuICAgIH07XG4gICAgdGhpcy5pc01vdXNlTW92ZUV2ZW50ID0gdGhpcy5pc01vdXNlTW92ZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURvd24gPSB0aGlzLmhhbmRsZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdmUgPSB0aGlzLmhhbmRsZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU91dCA9IHRoaXMuaGFuZGxlT3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleVVwID0gdGhpcy5vbktleVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFbnRlciA9IHRoaXMuaGFuZGxlRW50ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldElzSW5UaHJvdHRsZSA9IHRoaXMuc2V0SXNJblRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXh0ID0gdGhyb3R0bGUoXG4gICAgICB0aGlzLm5leHQuYmluZCh0aGlzKSxcbiAgICAgIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdGhpcy5zZXRJc0luVGhyb3R0bGVcbiAgICApO1xuICAgIHRoaXMucHJldmlvdXMgPSB0aHJvdHRsZShcbiAgICAgIHRoaXMucHJldmlvdXMuYmluZCh0aGlzKSxcbiAgICAgIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdGhpcy5zZXRJc0luVGhyb3R0bGVcbiAgICApO1xuICAgIHRoaXMuZ29Ub1NsaWRlID0gdGhyb3R0bGUoXG4gICAgICB0aGlzLmdvVG9TbGlkZS5iaW5kKHRoaXMpLFxuICAgICAgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0aGlzLnNldElzSW5UaHJvdHRsZVxuICAgICk7XG4gICAgdGhpcy5vbk1vdmUgPSBmYWxzZTtcbiAgICB0aGlzLmluaXRpYWxYID0gMDtcbiAgICB0aGlzLmxhc3RYID0gMDtcbiAgICB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJcIjtcbiAgICB0aGlzLmluaXRpYWxZID0gMDtcbiAgICB0aGlzLmlzSW5UaHJvdHRsZSA9IGZhbHNlO1xuICB9XG4gIHNldElzSW5UaHJvdHRsZShpc0luVGhyb3R0bGUgPSBmYWxzZSkge1xuICAgIHRoaXMuaXNJblRocm90dGxlID0gaXNJblRocm90dGxlO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkb21Mb2FkZWQ6IHRydWUgfSk7XG4gICAgdGhpcy5zZXRJdGVtc1RvU2hvdygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xuICAgIHRoaXMub25SZXNpemUodHJ1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMua2V5Qm9hcmRDb250cm9sKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMub25LZXlVcCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmF1dG9QbGF5ICYmIHRoaXMucHJvcHMuYXV0b1BsYXlTcGVlZCkge1xuICAgICAgdGhpcy5hdXRvUGxheSA9IHNldEludGVydmFsKHRoaXMubmV4dCwgdGhpcy5wcm9wcy5hdXRvUGxheVNwZWVkKTtcbiAgICB9XG4gIH1cbiAgc2V0SXRlbXNUb1Nob3coc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbikge1xuICAgIGNvbnN0IHsgcmVzcG9uc2l2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgeyBicmVha3BvaW50LCBpdGVtcyB9ID0gcmVzcG9uc2l2ZVtpdGVtXTtcbiAgICAgIGNvbnN0IHsgbWF4LCBtaW4gfSA9IGJyZWFrcG9pbnQ7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gbWluICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IG1heCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVzVG9TaG93OiBpdGVtcywgZGV2aWNlVHlwZTogaXRlbSB9KTtcbiAgICAgICAgdGhpcy5zZXRDb250YWluZXJBbmRJdGVtV2lkdGgoaXRlbXMsIHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIHRoaXMgaXMgZm9yIHJlc2l6aW5nIG9ubHkgb3IgdGhlIGZpcnN0IHRpbWUgd2hlbiB3ZSBlbnRlcmVkIGNsaWVudC1zaWRlIGZyb20gc2VydmVyLXNpZGUuXG4gIHNldENvbnRhaW5lckFuZEl0ZW1XaWR0aChzbGlkZXNUb1Nob3csIHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5jb250YWluZXJSZWYgJiYgdGhpcy5jb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgICAgY29uc3QgaXRlbVdpZHRoID0gZ2V0SXRlbUNsaWVudFNpZGVXaWR0aChcbiAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgc2xpZGVzVG9TaG93LFxuICAgICAgICBjb250YWluZXJXaWR0aFxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluZXJXaWR0aCxcbiAgICAgICAgICBpdGVtV2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLmluZmluaXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldENsb25lcyhzbGlkZXNUb1Nob3csIGl0ZW1XaWR0aCwgc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb3JyZWN0SXRlbXNQb3NpdGlvbihpdGVtV2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb3JyZWN0SXRlbXNQb3NpdGlvbihpdGVtV2lkdGgsIGlzQW5pbWF0aW9uQWxsb3dlZCkge1xuICAgIC8qXG4gICAgRm9yIHN3aXBlLCBkcmFnIGFuZCByZXNpemluZywgdGhleSBjaGFuZ2VkIHRoZSBwb3NpdGlvbiBvZiB0aGUgY2Fyb3VzZWwsIGJ1dCB0aGUgcG9zaXRpb24gYXJlIG5vdCBhbHdheXMgY29ycmVjdC5cbiAgICBIZW5jZSwgdGhpcyBpcyB0byBtYWtlIHN1cmUgb3VyIGl0ZW1zIGFyZSBpbiB0aGUgY29ycmVjdCBwbGFjZS5cbiAgICAqL1xuICAgIGlmIChpc0FuaW1hdGlvbkFsbG93ZWQpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFpc0FuaW1hdGlvbkFsbG93ZWQgJiYgdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWQpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdHJhbnNmb3JtOiAtKGl0ZW1XaWR0aCAqIHRoaXMuc3RhdGUuY3VycmVudFNsaWRlKVxuICAgIH0pO1xuICB9XG4gIG9uUmVzaXplKHZhbHVlKSB7XG4gICAgLy8gdmFsdWUgaGVyZSBjYW4gYmUgaHRtbCBldmVudCBvciBhIGJvb2xlYW4uXG4gICAgLy8gaWYgaXRzIGluIGluZmluaXRlIG1vZGUsIHdlIHdhbnQgdG8ga2VlcCB0aGUgY3VycmVudCBzbGlkZSBpbmRleCBubyBtYXR0ZXIgd2hhdC5cbiAgICAvLyBpZiBpdHMgbm90IGluZmluaXRlIG1vZGUsIGtlZXBpbmcgdGhlIGN1cnJlbnQgc2xpZGUgaW5kZXggaGFzIGFscmVhZHkgYmVlbiB0YWtlbiBjYXJlIG9mXG4gICAgY29uc3QgeyBpbmZpbml0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbjtcbiAgICBpZiAoIWluZmluaXRlKSB7XG4gICAgICBzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiICYmIHZhbHVlKSB7XG4gICAgICAgIHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldEl0ZW1zVG9TaG93KHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24pO1xuICB9XG4gIGlzTW91c2VNb3ZlRXZlbnQoZSkge1xuICAgIHJldHVybiBcImNsaWVudFhcIiAmJiBcImNsaWVudFlcIiBpbiBlO1xuICB9XG4gIHJlc2V0TW92ZVN0YXR1cygpIHtcbiAgICB0aGlzLm9uTW92ZSA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdGlhbFggPSAwO1xuICAgIHRoaXMubGFzdFggPSAwO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJcIjtcbiAgICB0aGlzLmluaXRpYWxZID0gMDtcbiAgfVxuICBoYW5kbGVEb3duKGUpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNNb3VzZU1vdmVFdmVudChlKSAmJiAhdGhpcy5wcm9wcy5zd2lwZWFibGUpIHx8XG4gICAgICAodGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpICYmICF0aGlzLnByb3BzLmRyYWdnYWJsZSkgfHxcbiAgICAgIHRoaXMuaXNJblRocm90dGxlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gdGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpID8gZSA6IGUudG91Y2hlc1swXTtcbiAgICB0aGlzLm9uTW92ZSA9IHRydWU7XG4gICAgdGhpcy5pbml0aWFsWCA9IGNsaWVudFg7XG4gICAgdGhpcy5pbml0aWFsWSA9IGNsaWVudFk7XG4gICAgdGhpcy5sYXN0WCA9IGNsaWVudFg7XG4gICAgdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWQgPSBmYWxzZTtcbiAgfVxuICBoYW5kbGVNb3ZlKGUpIHtcbiAgICBpZiAoXG4gICAgICAoIXRoaXMuaXNNb3VzZU1vdmVFdmVudChlKSAmJiAhdGhpcy5wcm9wcy5zd2lwZWFibGUpIHx8XG4gICAgICAodGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpICYmICF0aGlzLnByb3BzLmRyYWdnYWJsZSkgfHxcbiAgICAgIG5vdEVub3VnaENoaWxkcmVuKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gdGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpID8gZSA6IGUudG91Y2hlc1swXTtcblxuICAgIGNvbnN0IGRpZmZYID0gdGhpcy5pbml0aWFsWCAtIGNsaWVudFg7XG4gICAgY29uc3QgZGlmZlkgPSB0aGlzLmluaXRpYWxZIC0gY2xpZW50WTtcbiAgICBpZiAoIXRoaXMuaXNNb3VzZU1vdmVFdmVudChlKSAmJiB0aGlzLmF1dG9QbGF5ICYmIHRoaXMucHJvcHMuYXV0b1BsYXkpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvUGxheSk7XG4gICAgICB0aGlzLmF1dG9QbGF5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbk1vdmUpIHtcbiAgICAgIGlmICghKE1hdGguYWJzKGRpZmZYKSA+IE1hdGguYWJzKGRpZmZZKSkpIHtcbiAgICAgICAgLy8gcHJldmVudCBzd2lwaW5nIHVwIGFuZCBkb3duIG1vdmVzIHRoZSBjYXJvdXNlbC5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIG5leHRQb3NpdGlvbixcbiAgICAgICAgY2FuQ29udGludWVcbiAgICAgIH0gPSBwb3B1bGF0ZVNsaWRlc09uTW91c2VUb3VjaE1vdmUoXG4gICAgICAgIHRoaXMuc3RhdGUsXG4gICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgIHRoaXMuaW5pdGlhbFgsXG4gICAgICAgIHRoaXMubGFzdFgsXG4gICAgICAgIGNsaWVudFhcbiAgICAgICk7XG4gICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICBpZiAoY2FuQ29udGludWUgJiYgbmV4dFBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBuZXh0UG9zaXRpb24gY2FuIGJlIDA7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRyYW5zZm9ybTogbmV4dFBvc2l0aW9uIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RYID0gY2xpZW50WDtcbiAgICB9XG4gIH1cbiAgaGFuZGxlT3V0KGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvUGxheSAmJiAhdGhpcy5hdXRvUGxheSkge1xuICAgICAgdGhpcy5hdXRvUGxheSA9IHNldEludGVydmFsKHRoaXMubmV4dCwgdGhpcy5wcm9wcy5hdXRvUGxheVNwZWVkKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkRGlzYWJsZU9uTW9iaWxlID1cbiAgICAgIGUudHlwZSA9PT0gXCJ0b3VjaGVuZFwiICYmICF0aGlzLnByb3BzLnN3aXBlYWJsZTtcbiAgICBjb25zdCBzaG91bGREaXNhYmxlT25EZXNrdG9wID1cbiAgICAgIChlLnR5cGUgPT09IFwibW91c2VsZWF2ZVwiIHx8IGUudHlwZSA9PT0gXCJtb3VzZXVwXCIpICYmXG4gICAgICAhdGhpcy5wcm9wcy5kcmFnZ2FibGU7XG4gICAgaWYgKHNob3VsZERpc2FibGVPbk1vYmlsZSB8fCBzaG91bGREaXNhYmxlT25EZXNrdG9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm9uTW92ZSkge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgY29uc3QgY2FuR29OZXh0ID1cbiAgICAgICAgICB0aGlzLmluaXRpYWxYIC0gdGhpcy5sYXN0WCA+PSB0aGlzLnByb3BzLm1pbmltdW1Ub3VjaERyYWc7XG4gICAgICAgIGlmIChjYW5Hb05leHQpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZXNIYXZlUGFzc2VkID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAgICh0aGlzLmluaXRpYWxYIC0gdGhpcy5sYXN0WCkgLyB0aGlzLnN0YXRlLml0ZW1XaWR0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5uZXh0KHNsaWRlc0hhdmVQYXNzZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29ycmVjdEl0ZW1zUG9zaXRpb24odGhpcy5zdGF0ZS5pdGVtV2lkdGgsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbnN0IGNhbkdvTmV4dCA9XG4gICAgICAgICAgdGhpcy5sYXN0WCAtIHRoaXMuaW5pdGlhbFggPiB0aGlzLnByb3BzLm1pbmltdW1Ub3VjaERyYWc7XG4gICAgICAgIGlmIChjYW5Hb05leHQpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZXNIYXZlUGFzc2VkID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAgICh0aGlzLmxhc3RYIC0gdGhpcy5pbml0aWFsWCkgLyB0aGlzLnN0YXRlLml0ZW1XaWR0aFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5wcmV2aW91cyhzbGlkZXNIYXZlUGFzc2VkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvcnJlY3RJdGVtc1Bvc2l0aW9uKHRoaXMuc3RhdGUuaXRlbVdpZHRoLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5yZXNldE1vdmVTdGF0dXMoKTtcbiAgICB9XG4gIH1cbiAgb25LZXlVcChlKSB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMzc6XG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCk7XG4gICAgICBjYXNlIDM5OlxuICAgICAgICByZXR1cm4gdGhpcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUVudGVyKCkge1xuICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMucHJvcHMuYXV0b1BsYXkpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvUGxheSk7XG4gICAgICB0aGlzLmF1dG9QbGF5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBnb1RvU2xpZGUoc2xpZGUpIHtcbiAgICBpZiAodGhpcy5pc0luVGhyb3R0bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBpdGVtV2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBhZnRlckNoYW5nZSwgYmVmb3JlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByZXZpb3VzU2xpZGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZTtcbiAgICBpZiAodHlwZW9mIGJlZm9yZUNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBiZWZvcmVDaGFuZ2Uoc2xpZGUsIHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgfVxuICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBjdXJyZW50U2xpZGU6IHNsaWRlLFxuICAgICAgICB0cmFuc2Zvcm06IC0oaXRlbVdpZHRoICogc2xpZGUpXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbmZpbml0ZSkge1xuICAgICAgICAgIHRoaXMuY29ycmVjdENsb25lc1Bvc2l0aW9uKHsgZG9tTG9hZGVkOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWZ0ZXJDaGFuZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWZ0ZXJDaGFuZ2UocHJldmlvdXNTbGlkZSwgdGhpcy5nZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9LCB0aGlzLnByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICBvbk1vdmU6IHRoaXMub25Nb3ZlLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvblxuICAgIH07XG4gIH1cbiAgbmV4dChzbGlkZXNIYXZlUGFzc2VkID0gMCkge1xuICAgIGNvbnN0IHsgYWZ0ZXJDaGFuZ2UsIGJlZm9yZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobm90RW5vdWdoQ2hpbGRyZW4odGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLypcbiAgICB0d28gY2FzZXM6XG4gICAgMS4gV2UgYXJlIG5vdCBvdmVyLXNsaWRpbmcuXG4gICAgMi4gV2UgYXJlIHNsaWRpbmcgb3ZlciB0byB3aGF0IHdlIGhhdmUsIHRoYXQgbWVhbnMgbmV4dHNsaWRlcyA+IHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoLiAoZG9lcyBub3QgYXBwbHkgdG8gdGhlIGluaWZuaXRlIG1vZGUpXG4gICAgKi9cbiAgICBjb25zdCB7IG5leHRTbGlkZXMsIG5leHRQb3NpdGlvbiB9ID0gcG9wdWxhdGVOZXh0U2xpZGVzKFxuICAgICAgdGhpcy5zdGF0ZSxcbiAgICAgIHRoaXMucHJvcHMsXG4gICAgICBzbGlkZXNIYXZlUGFzc2VkXG4gICAgKTtcbiAgICBjb25zdCBwcmV2aW91c1NsaWRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGU7XG4gICAgaWYgKG5leHRTbGlkZXMgPT09IHVuZGVmaW5lZCB8fCBuZXh0UG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdGhleSBjYW4gYmUgMC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBiZWZvcmVDaGFuZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYmVmb3JlQ2hhbmdlKG5leHRTbGlkZXMsIHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgfVxuICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICB0cmFuc2Zvcm06IG5leHRQb3NpdGlvbixcbiAgICAgICAgY3VycmVudFNsaWRlOiBuZXh0U2xpZGVzXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGFmdGVyQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlKHByZXZpb3VzU2xpZGUsIHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfSwgdGhpcy5wcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfHwgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG4gIHByZXZpb3VzKHNsaWRlc0hhdmVQYXNzZWQgPSAwKSB7XG4gICAgY29uc3QgeyBhZnRlckNoYW5nZSwgYmVmb3JlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChub3RFbm91Z2hDaGlsZHJlbih0aGlzLnN0YXRlLCB0aGlzLnByb3BzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IG5leHRTbGlkZXMsIG5leHRQb3NpdGlvbiB9ID0gcG9wdWxhdGVQcmV2aW91c1NsaWRlcyhcbiAgICAgIHRoaXMuc3RhdGUsXG4gICAgICB0aGlzLnByb3BzLFxuICAgICAgc2xpZGVzSGF2ZVBhc3NlZFxuICAgICk7XG4gICAgaWYgKG5leHRTbGlkZXMgPT09IHVuZGVmaW5lZCB8fCBuZXh0UG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdGhleSBjYW4gYmUgMCwgd2hpY2ggZ29lcyBiYWNrIHRvIHRoZSBmaXJzdCBzbGlkZS5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNTbGlkZSA9IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlO1xuICAgIGlmICh0eXBlb2YgYmVmb3JlQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJlZm9yZUNoYW5nZShuZXh0U2xpZGVzLCB0aGlzLmdldFN0YXRlKCkpO1xuICAgIH1cbiAgICB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiBuZXh0UG9zaXRpb24sXG4gICAgICAgIGN1cnJlbnRTbGlkZTogbmV4dFNsaWRlc1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhZnRlckNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhZnRlckNoYW5nZShwcmV2aW91c1NsaWRlLCB0aGlzLmdldFN0YXRlKCkpO1xuICAgICAgICAgIH0sIHRoaXMucHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcbiAgICBpZiAodGhpcy5wcm9wcy5rZXlCb2FyZENvbnRyb2wpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b1BsYXkgJiYgdGhpcy5hdXRvUGxheSkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9QbGF5KTtcbiAgICAgIHRoaXMuYXV0b1BsYXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJlbmRlckNhcm91c2VsSXRlbXMoKSB7XG4gICAgbGV0IGNsb25lcyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLmluZmluaXRlKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbkFyciA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgICBjbG9uZXMgPSBnZXRDbG9uZXModGhpcy5zdGF0ZS5zbGlkZXNUb1Nob3csIGNoaWxkcmVuQXJyKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJvdXNlbEl0ZW1zXG4gICAgICAgIGNsb25lcz17Y2xvbmVzfVxuICAgICAgICBnb1RvU2xpZGU9e3RoaXMuZ29Ub1NsaWRlfVxuICAgICAgICBzdGF0ZT17dGhpcy5zdGF0ZX1cbiAgICAgICAgcHJvcHM9e3RoaXMucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmVuZGVyTGVmdEFycm93KCkge1xuICAgIGNvbnN0IHsgY3VzdG9tTGVmdEFycm93IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGVmdEFycm93XG4gICAgICAgIGN1c3RvbUxlZnRBcnJvdz17Y3VzdG9tTGVmdEFycm93fVxuICAgICAgICBnZXRTdGF0ZT17KCkgPT4gdGhpcy5nZXRTdGF0ZSgpfVxuICAgICAgICBwcmV2aW91cz17dGhpcy5wcmV2aW91c31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZW5kZXJSaWdodEFycm93KCkge1xuICAgIGNvbnN0IHsgY3VzdG9tUmlnaHRBcnJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJpZ2h0QXJyb3dcbiAgICAgICAgY3VzdG9tUmlnaHRBcnJvdz17Y3VzdG9tUmlnaHRBcnJvd31cbiAgICAgICAgZ2V0U3RhdGU9eygpID0+IHRoaXMuZ2V0U3RhdGUoKX1cbiAgICAgICAgbmV4dD17dGhpcy5uZXh0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRldmljZVR5cGUsXG4gICAgICBhcnJvd3MsXG4gICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZSxcbiAgICAgIGluZmluaXRlLFxuICAgICAgY29udGFpbmVyQ2xhc3MsXG4gICAgICBzbGlkZXJDbGFzcyxcbiAgICAgIGN1c3RvbVRyYW5zaXRpb24sXG4gICAgICBwYXJ0aWFsVmlzYmlsZSxcbiAgICAgIGNlbnRlck1vZGUsXG4gICAgICBhZGRpdGlvbmFsVHJhbnNmcm9tLFxuICAgICAgcmVuZGVyRG90c091dHNpZGUsXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzaG91bGRSZW5kZXJPblNTUixcbiAgICAgIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlcixcbiAgICAgIHNob3VsZFJlbmRlckF0QWxsXG4gICAgfSA9IGdldEluaXRpYWxTdGF0ZSh0aGlzLnN0YXRlLCB0aGlzLnByb3BzKTtcbiAgICBjb25zdCBpc0xlZnRFbmRSZWFjaCA9IGlzSW5MZWZ0RW5kKHRoaXMuc3RhdGUpO1xuICAgIGNvbnN0IGlzUmlnaHRFbmRSZWFjaCA9IGlzSW5SaWdodEVuZCh0aGlzLnN0YXRlKTtcbiAgICBjb25zdCBzaG91bGRTaG93QXJyb3dzID1cbiAgICAgIGFycm93cyAmJlxuICAgICAgIShcbiAgICAgICAgcmVtb3ZlQXJyb3dPbkRldmljZVR5cGUgJiZcbiAgICAgICAgKChkZXZpY2VUeXBlICYmIHJlbW92ZUFycm93T25EZXZpY2VUeXBlLmluZGV4T2YoZGV2aWNlVHlwZSkgPiAtMSkgfHxcbiAgICAgICAgICAodGhpcy5zdGF0ZS5kZXZpY2VUeXBlICYmXG4gICAgICAgICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZS5pbmRleE9mKHRoaXMuc3RhdGUuZGV2aWNlVHlwZSkgPiAtMSkpXG4gICAgICApICYmXG4gICAgICAhbm90RW5vdWdoQ2hpbGRyZW4odGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykgJiZcbiAgICAgIHNob3VsZFJlbmRlckF0QWxsO1xuICAgIGNvbnN0IGRpc2FibGVMZWZ0QXJyb3cgPSAhaW5maW5pdGUgJiYgaXNMZWZ0RW5kUmVhY2g7XG4gICAgY29uc3QgZGlzYWJsZVJpZ2h0QXJyb3cgPSAhaW5maW5pdGUgJiYgaXNSaWdodEVuZFJlYWNoO1xuICAgIC8vIHRoaXMgbGliIHN1cHBvcnRzIHNob3dpbmcgbmV4dCBzZXQgb2YgaXRlbXMgcGFyaXRpYWxseSBhcyB3ZWxsIGFzIGNlbnRlciBtb2RlIHdoaWNoIHNob3dzIGJvdGguXG4gICAgY29uc3QgY3VycmVudFRyYW5zZm9ybSA9IHBhcnRpYWxWaXNiaWxlXG4gICAgICA/IGdldFRyYW5zZm9ybUZvclBhcnRpYWxWc2liaWxlKFxuICAgICAgICAgIHRoaXMuc3RhdGUsXG4gICAgICAgICAgcGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyLFxuICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgKVxuICAgICAgOiBjZW50ZXJNb2RlXG4gICAgICA/IGdldFRyYW5zZm9ybUZvckNlbnRlck1vZGUodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcylcbiAgICAgIDogdGhpcy5zdGF0ZS50cmFuc2Zvcm07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWN0LW11bHRpLWNhcm91c2VsLWxpc3QgJHtjb250YWluZXJDbGFzc30gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICByZWY9e3RoaXMuY29udGFpbmVyUmVmfVxuICAgICAgICA+XG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBjbGFzc05hbWU9e2ByZWFjdC1tdWx0aS1jYXJvdXNlbC10cmFjayAke3NsaWRlckNsYXNzfWB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZFxuICAgICAgICAgICAgICAgID8gY3VzdG9tVHJhbnNpdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgIDogXCJub25lXCIsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBzaG91bGRSZW5kZXJPblNTUiA/IFwiaGlkZGVuXCIgOiBcInVuc2V0XCIsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7Y3VycmVudFRyYW5zZm9ybSArXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbX1weCwwLDApYFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRsZU1vdmV9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVEb3dufVxuICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU91dH1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVPdXR9XG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlRG93bn1cbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXt0aGlzLmhhbmRsZU1vdmV9XG4gICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZU91dH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJvdXNlbEl0ZW1zKCl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7c2hvdWxkU2hvd0Fycm93cyAmJiAhZGlzYWJsZUxlZnRBcnJvdyAmJiB0aGlzLnJlbmRlckxlZnRBcnJvdygpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclJpZ2h0QXJyb3coKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInJldmljb25zXCI7XG4gICAgICAgICAgICBmYWxsYmFjazogZmFsbGJhY2s7XG4gICAgICAgICAgICBzcmM6IHVybChcIi4vcmV2aWNvbnMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICAgICAgICB1cmwoXCIuL3Jldmljb25zLnR0ZlwiKSBmb3JtYXQoXCJ0dGZcIiksXG4gICAgICAgICAgICAgIHVybChcIi4vcmV2aWNvbnMuZW90XCIpIGZvcm1hdChcInR0ZlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggeWVsbG93O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDE1MHB4IDAgMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC10cmFjayB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIHRyYW5zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQzcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdzpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3c6OmJlZm9yZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJldmljb25zO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoNCUgKyAxcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcXGU4MjRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IGNhbGMoNCUgKyAxcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1yaWdodDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlODI1XCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC1saXN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90IGJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdCBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA4MDgwODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC0tYWN0aXZlIGJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDgwODA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLFxuICAgICAgICAgICAgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC10cmFjayB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl19 */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/Carousel.jsx */"));
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

/***/ })

})
//# sourceMappingURL=index.js.d398f049f858358b068a.hot-update.js.map