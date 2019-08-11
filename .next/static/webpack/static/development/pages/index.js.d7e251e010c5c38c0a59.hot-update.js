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
        className: "jsx-227208207" + " " + "react-multi-carousel-list ".concat(containerClass, " ").concat(className),
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
        className: "jsx-227208207" + " " + "react-multi-carousel-track ".concat(sliderClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, this.renderCarouselItems()), shouldShowArrows && !disableLeftArrow && this.renderLeftArrow(), this.renderRightArrow()), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "227208207",
        __self: this
      }, "@font-face{font-family:\"revicons\";fallback:fallback;src:url(\"./revicons.woff\") format(\"woff\"), url(\"./revicons.ttf\") format(\"ttf\"), url(\"./revicons.eot\") format(\"ttf\");}.react-multi-carousel-list.jsx-227208207{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative;border:solid 2px yellow;margin:0 150px 0 150px;}.react-multi-carousel-track.jsx-227208207{list-style:none;padding:50px;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform,transition;}.react-multiple-carousel__arrow.jsx-227208207{position:absolute;outline:none;-webkit-transition:all 0.5s;transition:all 0.5s;border-radius:35px;z-index:1000;border:none;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer;}.react-multiple-carousel__arrow.jsx-227208207:hover{background:rgba(0,0,0,0.8);}.react-multiple-carousel__arrow.jsx-227208207::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative;}.react-multiple-carousel__arrow--left.jsx-227208207{left:calc(4% + 1px);}.react-multiple-carousel__arrow--left.jsx-227208207::before{content:\"e824\";}.react-multiple-carousel__arrow--right.jsx-227208207{right:calc(4% + 1px);}.react-multiple-carousel__arrow--right.jsx-227208207::before{content:\"e825\";}.react-multi-carousel-dot-list.jsx-227208207{position:absolute;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:0;right:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:auto;padding:0;margin:0;list-style:none;text-align:center;}.react-multi-carousel-dot.jsx-227208207 button.jsx-227208207{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;padding:5px 5px 5px 5px;box-shadow:none;-webkit-transition:background 0.5s;transition:background 0.5s;border-width:2px;border-style:solid;border-color:grey;padding:0;margin:0;margin-right:6px;outline:0;cursor:pointer;}.react-multi-carousel-dot.jsx-227208207 button.jsx-227208207:hover{background:#080808;}.react-multi-carousel-dot--active.jsx-227208207 button.jsx-227208207{background:#080808;}.react-multi-carousel-item.jsx-227208207{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;}@media all and (-ms-high-contrast:none), (-ms-high-contrast:active){.react-multi-carousel-item.jsx-227208207{-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;}.react-multi-carousel-track.jsx-227208207{overflow:visible !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzZ0JvQixBQUdvQyxBQU9WLEFBUUcsQUFXRSxBQWFZLEFBR2YsQUFVSyxBQUdMLEFBR00sQUFHTixBQUlHLEFBYUcsQUFrQkYsQUFHQSxBQUdTLEFBTUQsQUFHRyxlQXBFbkIsQUFhYixBQU1BLENBOUNlLEVBV0EsQUF1Q0osQ0ErQlgsQUFHQSxDQS9DQSxDQU1BLEFBb0JhLEVBOUVPLEdBMkNKLENBSmhCLEFBMkJlLENBNkNiLENBL0ZTLEVBV1csQ0FvRFIsTUE5REMsRUEyQlEsQ0F6Q2dCLEdBNkVuQixpQkFuQ0EsQ0FvQ1IsVUFDYyxFQTNFTCxLQXFCQSxBQWtCVCxVQUNRLEFBNkRsQixPQXpCZ0IsQUFtQlcsRUF6RWQsR0FzQ04sTUFuQlQsQ0FvQlUsR0F0Q0ksQ0FaTyxBQWtFUSxJQWZKLE9BdENPLDJCQUNmLE9BNUJqQixDQW1HQSxPQXRFa0IsRUF6QkEsT0E2RUMsT0FsRUMsQUFlUixFQXpCUSxRQTBCSCxBQW1ESSxRQWxFUyxFQVZKLEtBMEIxQixJQW1Eb0IsS0FqQk4sVUEzRFcsRUE0RGIsQ0FpQkEsU0FoQkQsQ0FpQkEsUUFoQk8sQ0FpQkMsQ0E5RW5CLGNBOERvQixFQWlCUixVQUNLLE1BakJqQixTQWtCQSxNQXhFNkIsOERBQ08saUNBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbEl0ZW1zIGZyb20gXCIuL0Nhcm91c2VsSXRlbXNcIjtcbmltcG9ydCB7IExlZnRBcnJvdywgUmlnaHRBcnJvdyB9IGZyb20gXCIuL0Fycm93c1wiO1xuaW1wb3J0IHtcbiAgdGhyb3R0bGUsXG4gIGdldENsb25lcyxcbiAgY2hlY2tDbG9uZXNQb3NpdGlvbiwgLy8gaGFuZGxlIHdoZW4gdGhlcmUgYXJlIGNsb25lcyBhcHBlYXIgb24gdGhlIHNjcmVlbiwgb25seSBhcHBseSB0byBpbmZpbml0ZSBtb2RlLlxuICBnZXRJbml0aWFsU3RhdGUsXG4gIGdldFRyYW5zZm9ybUZvckNlbnRlck1vZGUsXG4gIGdldFRyYW5zZm9ybUZvclBhcnRpYWxWc2liaWxlLFxuICB0aHJvd0Vycm9yLFxuICBnZXRJdGVtQ2xpZW50U2lkZVdpZHRoLFxuICBwb3B1bGF0ZU5leHRTbGlkZXMsXG4gIHBvcHVsYXRlUHJldmlvdXNTbGlkZXMsXG4gIHBvcHVsYXRlU2xpZGVzT25Nb3VzZVRvdWNoTW92ZSxcbiAgaXNJbkxlZnRFbmQsXG4gIGlzSW5SaWdodEVuZCxcbiAgZ2V0SW5pdGlhbFNsaWRlSW5JbmlmdGVNb2RlLFxuICBub3RFbm91Z2hDaGlsZHJlblxufSBmcm9tIFwiLi91dGlsc1wiO1xuY29uc3QgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbiA9IDQwMDtcbmNvbnN0IGRlZmF1bHRUcmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gNDAwbXMgZWFzZS1pbi1vdXRcIjtcblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNsaWRlc1RvU2xpZGU6IDEsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICBzd2lwZWFibGU6IHRydWUsXG4gICAgYXJyb3dzOiB0cnVlLFxuICAgIGNvbnRhaW5lckNsYXNzOiBcIlwiLFxuICAgIHNsaWRlckNsYXNzOiBcIlwiLFxuICAgIGl0ZW1DbGFzczogXCJcIixcbiAgICBrZXlCb2FyZENvbnRyb2w6IHRydWUsXG4gICAgYXV0b1BsYXlTcGVlZDogMzAwMCxcbiAgICBzaG93RG90czogZmFsc2UsXG4gICAgcmVuZGVyRG90c091dHNpZGU6IGZhbHNlLFxuICAgIG1pbmltdW1Ub3VjaERyYWc6IDgwLFxuICAgIGRvdExpc3RDbGFzczogXCJcIixcbiAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICBhZGRpdGlvbmFsVHJhbnNmcm9tOiAwXG4gIH07XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY29udGFpbmVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1XaWR0aDogMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMCxcbiAgICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICAgIHRvdGFsSXRlbXM6IFJlYWN0LkNoaWxkcmVuLmNvdW50KHByb3BzLmNoaWxkcmVuKSxcbiAgICAgIGRldmljZVR5cGU6IFwiXCIsXG4gICAgICBkb21Mb2FkZWQ6IGZhbHNlLFxuICAgICAgdHJhbnNmb3JtOiAwLFxuICAgICAgY29udGFpbmVyV2lkdGg6IDBcbiAgICB9O1xuICAgIHRoaXMuaXNNb3VzZU1vdmVFdmVudCA9IHRoaXMuaXNNb3VzZU1vdmVFdmVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEb3duID0gdGhpcy5oYW5kbGVEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3ZlID0gdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVPdXQgPSB0aGlzLmhhbmRsZU91dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlVcCA9IHRoaXMub25LZXlVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRW50ZXIgPSB0aGlzLmhhbmRsZUVudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRJc0luVGhyb3R0bGUgPSB0aGlzLnNldElzSW5UaHJvdHRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubmV4dCA9IHRocm90dGxlKFxuICAgICAgdGhpcy5uZXh0LmJpbmQodGhpcyksXG4gICAgICBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfHwgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRoaXMuc2V0SXNJblRocm90dGxlXG4gICAgKTtcbiAgICB0aGlzLnByZXZpb3VzID0gdGhyb3R0bGUoXG4gICAgICB0aGlzLnByZXZpb3VzLmJpbmQodGhpcyksXG4gICAgICBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfHwgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRoaXMuc2V0SXNJblRocm90dGxlXG4gICAgKTtcbiAgICB0aGlzLmdvVG9TbGlkZSA9IHRocm90dGxlKFxuICAgICAgdGhpcy5nb1RvU2xpZGUuYmluZCh0aGlzKSxcbiAgICAgIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdGhpcy5zZXRJc0luVGhyb3R0bGVcbiAgICApO1xuICAgIHRoaXMub25Nb3ZlID0gZmFsc2U7XG4gICAgdGhpcy5pbml0aWFsWCA9IDA7XG4gICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwiXCI7XG4gICAgdGhpcy5pbml0aWFsWSA9IDA7XG4gICAgdGhpcy5pc0luVGhyb3R0bGUgPSBmYWxzZTtcbiAgfVxuICBzZXRJc0luVGhyb3R0bGUoaXNJblRocm90dGxlID0gZmFsc2UpIHtcbiAgICB0aGlzLmlzSW5UaHJvdHRsZSA9IGlzSW5UaHJvdHRsZTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZG9tTG9hZGVkOiB0cnVlIH0pO1xuICAgIHRoaXMuc2V0SXRlbXNUb1Nob3coKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcbiAgICB0aGlzLm9uUmVzaXplKHRydWUpO1xuICAgIGlmICh0aGlzLnByb3BzLmtleUJvYXJkQ29udHJvbCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLm9uS2V5VXApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvUGxheSAmJiB0aGlzLnByb3BzLmF1dG9QbGF5U3BlZWQpIHtcbiAgICAgIHRoaXMuYXV0b1BsYXkgPSBzZXRJbnRlcnZhbCh0aGlzLm5leHQsIHRoaXMucHJvcHMuYXV0b1BsYXlTcGVlZCk7XG4gICAgfVxuICB9XG4gIHNldEl0ZW1zVG9TaG93KHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24pIHtcbiAgICBjb25zdCB7IHJlc3BvbnNpdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHsgYnJlYWtwb2ludCwgaXRlbXMgfSA9IHJlc3BvbnNpdmVbaXRlbV07XG4gICAgICBjb25zdCB7IG1heCwgbWluIH0gPSBicmVha3BvaW50O1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IG1pbiAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSBtYXgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlc1RvU2hvdzogaXRlbXMsIGRldmljZVR5cGU6IGl0ZW0gfSk7XG4gICAgICAgIHRoaXMuc2V0Q29udGFpbmVyQW5kSXRlbVdpZHRoKGl0ZW1zLCBzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyB0aGlzIGlzIGZvciByZXNpemluZyBvbmx5IG9yIHRoZSBmaXJzdCB0aW1lIHdoZW4gd2UgZW50ZXJlZCBjbGllbnQtc2lkZSBmcm9tIHNlcnZlci1zaWRlLlxuICBzZXRDb250YWluZXJBbmRJdGVtV2lkdGgoc2xpZGVzVG9TaG93LCBzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyUmVmICYmIHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5jb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aCA9IGdldEl0ZW1DbGllbnRTaWRlV2lkdGgoXG4gICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgIHNsaWRlc1RvU2hvdyxcbiAgICAgICAgY29udGFpbmVyV2lkdGhcbiAgICAgICk7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgY29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgaXRlbVdpZHRoXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pbmZpbml0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRDbG9uZXMoc2xpZGVzVG9TaG93LCBpdGVtV2lkdGgsIHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGlmIChzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ycmVjdEl0ZW1zUG9zaXRpb24oaXRlbVdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29ycmVjdEl0ZW1zUG9zaXRpb24oaXRlbVdpZHRoLCBpc0FuaW1hdGlvbkFsbG93ZWQpIHtcbiAgICAvKlxuICAgIEZvciBzd2lwZSwgZHJhZyBhbmQgcmVzaXppbmcsIHRoZXkgY2hhbmdlZCB0aGUgcG9zaXRpb24gb2YgdGhlIGNhcm91c2VsLCBidXQgdGhlIHBvc2l0aW9uIGFyZSBub3QgYWx3YXlzIGNvcnJlY3QuXG4gICAgSGVuY2UsIHRoaXMgaXMgdG8gbWFrZSBzdXJlIG91ciBpdGVtcyBhcmUgaW4gdGhlIGNvcnJlY3QgcGxhY2UuXG4gICAgKi9cbiAgICBpZiAoaXNBbmltYXRpb25BbGxvd2VkKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICghaXNBbmltYXRpb25BbGxvd2VkICYmIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRyYW5zZm9ybTogLShpdGVtV2lkdGggKiB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSlcbiAgICB9KTtcbiAgfVxuICBvblJlc2l6ZSh2YWx1ZSkge1xuICAgIC8vIHZhbHVlIGhlcmUgY2FuIGJlIGh0bWwgZXZlbnQgb3IgYSBib29sZWFuLlxuICAgIC8vIGlmIGl0cyBpbiBpbmZpbml0ZSBtb2RlLCB3ZSB3YW50IHRvIGtlZXAgdGhlIGN1cnJlbnQgc2xpZGUgaW5kZXggbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gaWYgaXRzIG5vdCBpbmZpbml0ZSBtb2RlLCBrZWVwaW5nIHRoZSBjdXJyZW50IHNsaWRlIGluZGV4IGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4gY2FyZSBvZlxuICAgIGNvbnN0IHsgaW5maW5pdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb247XG4gICAgaWYgKCFpbmZpbml0ZSkge1xuICAgICAgc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiAmJiB2YWx1ZSkge1xuICAgICAgICBzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRJdGVtc1RvU2hvdyhzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uKTtcbiAgfVxuICBpc01vdXNlTW92ZUV2ZW50KGUpIHtcbiAgICByZXR1cm4gXCJjbGllbnRYXCIgJiYgXCJjbGllbnRZXCIgaW4gZTtcbiAgfVxuICByZXNldE1vdmVTdGF0dXMoKSB7XG4gICAgdGhpcy5vbk1vdmUgPSBmYWxzZTtcbiAgICB0aGlzLmluaXRpYWxYID0gMDtcbiAgICB0aGlzLmxhc3RYID0gMDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwiXCI7XG4gICAgdGhpcy5pbml0aWFsWSA9IDA7XG4gIH1cbiAgaGFuZGxlRG93bihlKSB7XG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzTW91c2VNb3ZlRXZlbnQoZSkgJiYgIXRoaXMucHJvcHMuc3dpcGVhYmxlKSB8fFxuICAgICAgKHRoaXMuaXNNb3VzZU1vdmVFdmVudChlKSAmJiAhdGhpcy5wcm9wcy5kcmFnZ2FibGUpIHx8XG4gICAgICB0aGlzLmlzSW5UaHJvdHRsZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IHRoaXMuaXNNb3VzZU1vdmVFdmVudChlKSA/IGUgOiBlLnRvdWNoZXNbMF07XG4gICAgdGhpcy5vbk1vdmUgPSB0cnVlO1xuICAgIHRoaXMuaW5pdGlhbFggPSBjbGllbnRYO1xuICAgIHRoaXMuaW5pdGlhbFkgPSBjbGllbnRZO1xuICAgIHRoaXMubGFzdFggPSBjbGllbnRYO1xuICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gZmFsc2U7XG4gIH1cbiAgaGFuZGxlTW92ZShlKSB7XG4gICAgaWYgKFxuICAgICAgKCF0aGlzLmlzTW91c2VNb3ZlRXZlbnQoZSkgJiYgIXRoaXMucHJvcHMuc3dpcGVhYmxlKSB8fFxuICAgICAgKHRoaXMuaXNNb3VzZU1vdmVFdmVudChlKSAmJiAhdGhpcy5wcm9wcy5kcmFnZ2FibGUpIHx8XG4gICAgICBub3RFbm91Z2hDaGlsZHJlbih0aGlzLnN0YXRlLCB0aGlzLnByb3BzKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IHRoaXMuaXNNb3VzZU1vdmVFdmVudChlKSA/IGUgOiBlLnRvdWNoZXNbMF07XG5cbiAgICBjb25zdCBkaWZmWCA9IHRoaXMuaW5pdGlhbFggLSBjbGllbnRYO1xuICAgIGNvbnN0IGRpZmZZID0gdGhpcy5pbml0aWFsWSAtIGNsaWVudFk7XG4gICAgaWYgKCF0aGlzLmlzTW91c2VNb3ZlRXZlbnQoZSkgJiYgdGhpcy5hdXRvUGxheSAmJiB0aGlzLnByb3BzLmF1dG9QbGF5KSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1BsYXkpO1xuICAgICAgdGhpcy5hdXRvUGxheSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMub25Nb3ZlKSB7XG4gICAgICBpZiAoIShNYXRoLmFicyhkaWZmWCkgPiBNYXRoLmFicyhkaWZmWSkpKSB7XG4gICAgICAgIC8vIHByZXZlbnQgc3dpcGluZyB1cCBhbmQgZG93biBtb3ZlcyB0aGUgY2Fyb3VzZWwuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICBuZXh0UG9zaXRpb24sXG4gICAgICAgIGNhbkNvbnRpbnVlXG4gICAgICB9ID0gcG9wdWxhdGVTbGlkZXNPbk1vdXNlVG91Y2hNb3ZlKFxuICAgICAgICB0aGlzLnN0YXRlLFxuICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICB0aGlzLmluaXRpYWxYLFxuICAgICAgICB0aGlzLmxhc3RYLFxuICAgICAgICBjbGllbnRYXG4gICAgICApO1xuICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgaWYgKGNhbkNvbnRpbnVlICYmIG5leHRQb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gbmV4dFBvc2l0aW9uIGNhbiBiZSAwO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0cmFuc2Zvcm06IG5leHRQb3NpdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5sYXN0WCA9IGNsaWVudFg7XG4gICAgfVxuICB9XG4gIGhhbmRsZU91dChlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b1BsYXkgJiYgIXRoaXMuYXV0b1BsYXkpIHtcbiAgICAgIHRoaXMuYXV0b1BsYXkgPSBzZXRJbnRlcnZhbCh0aGlzLm5leHQsIHRoaXMucHJvcHMuYXV0b1BsYXlTcGVlZCk7XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZERpc2FibGVPbk1vYmlsZSA9XG4gICAgICBlLnR5cGUgPT09IFwidG91Y2hlbmRcIiAmJiAhdGhpcy5wcm9wcy5zd2lwZWFibGU7XG4gICAgY29uc3Qgc2hvdWxkRGlzYWJsZU9uRGVza3RvcCA9XG4gICAgICAoZS50eXBlID09PSBcIm1vdXNlbGVhdmVcIiB8fCBlLnR5cGUgPT09IFwibW91c2V1cFwiKSAmJlxuICAgICAgIXRoaXMucHJvcHMuZHJhZ2dhYmxlO1xuICAgIGlmIChzaG91bGREaXNhYmxlT25Nb2JpbGUgfHwgc2hvdWxkRGlzYWJsZU9uRGVza3RvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbk1vdmUpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IGNhbkdvTmV4dCA9XG4gICAgICAgICAgdGhpcy5pbml0aWFsWCAtIHRoaXMubGFzdFggPj0gdGhpcy5wcm9wcy5taW5pbXVtVG91Y2hEcmFnO1xuICAgICAgICBpZiAoY2FuR29OZXh0KSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVzSGF2ZVBhc3NlZCA9IE1hdGgucm91bmQoXG4gICAgICAgICAgICAodGhpcy5pbml0aWFsWCAtIHRoaXMubGFzdFgpIC8gdGhpcy5zdGF0ZS5pdGVtV2lkdGhcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMubmV4dChzbGlkZXNIYXZlUGFzc2VkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvcnJlY3RJdGVtc1Bvc2l0aW9uKHRoaXMuc3RhdGUuaXRlbVdpZHRoLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICBjb25zdCBjYW5Hb05leHQgPVxuICAgICAgICAgIHRoaXMubGFzdFggLSB0aGlzLmluaXRpYWxYID4gdGhpcy5wcm9wcy5taW5pbXVtVG91Y2hEcmFnO1xuICAgICAgICBpZiAoY2FuR29OZXh0KSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVzSGF2ZVBhc3NlZCA9IE1hdGgucm91bmQoXG4gICAgICAgICAgICAodGhpcy5sYXN0WCAtIHRoaXMuaW5pdGlhbFgpIC8gdGhpcy5zdGF0ZS5pdGVtV2lkdGhcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucHJldmlvdXMoc2xpZGVzSGF2ZVBhc3NlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb3JyZWN0SXRlbXNQb3NpdGlvbih0aGlzLnN0YXRlLml0ZW1XaWR0aCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucmVzZXRNb3ZlU3RhdHVzKCk7XG4gICAgfVxuICB9XG4gIG9uS2V5VXAoZSkge1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDM3OlxuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cygpO1xuICAgICAgY2FzZSAzOTpcbiAgICAgICAgcmV0dXJuIHRoaXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVFbnRlcigpIHtcbiAgICBpZiAodGhpcy5hdXRvUGxheSAmJiB0aGlzLnByb3BzLmF1dG9QbGF5KSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1BsYXkpO1xuICAgICAgdGhpcy5hdXRvUGxheSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgZ29Ub1NsaWRlKHNsaWRlKSB7XG4gICAgaWYgKHRoaXMuaXNJblRocm90dGxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgaXRlbVdpZHRoIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgYWZ0ZXJDaGFuZ2UsIGJlZm9yZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcmV2aW91c1NsaWRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGU7XG4gICAgaWYgKHR5cGVvZiBiZWZvcmVDaGFuZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYmVmb3JlQ2hhbmdlKHNsaWRlLCB0aGlzLmdldFN0YXRlKCkpO1xuICAgIH1cbiAgICB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgY3VycmVudFNsaWRlOiBzbGlkZSxcbiAgICAgICAgdHJhbnNmb3JtOiAtKGl0ZW1XaWR0aCAqIHNsaWRlKVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5maW5pdGUpIHtcbiAgICAgICAgICB0aGlzLmNvcnJlY3RDbG9uZXNQb3NpdGlvbih7IGRvbUxvYWRlZDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGFmdGVyQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlKHByZXZpb3VzU2xpZGUsIHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfSwgdGhpcy5wcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfHwgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgb25Nb3ZlOiB0aGlzLm9uTW92ZSxcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb25cbiAgICB9O1xuICB9XG4gIG5leHQoc2xpZGVzSGF2ZVBhc3NlZCA9IDApIHtcbiAgICBjb25zdCB7IGFmdGVyQ2hhbmdlLCBiZWZvcmVDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG5vdEVub3VnaENoaWxkcmVuKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qXG4gICAgdHdvIGNhc2VzOlxuICAgIDEuIFdlIGFyZSBub3Qgb3Zlci1zbGlkaW5nLlxuICAgIDIuIFdlIGFyZSBzbGlkaW5nIG92ZXIgdG8gd2hhdCB3ZSBoYXZlLCB0aGF0IG1lYW5zIG5leHRzbGlkZXMgPiB0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aC4gKGRvZXMgbm90IGFwcGx5IHRvIHRoZSBpbmlmbml0ZSBtb2RlKVxuICAgICovXG4gICAgY29uc3QgeyBuZXh0U2xpZGVzLCBuZXh0UG9zaXRpb24gfSA9IHBvcHVsYXRlTmV4dFNsaWRlcyhcbiAgICAgIHRoaXMuc3RhdGUsXG4gICAgICB0aGlzLnByb3BzLFxuICAgICAgc2xpZGVzSGF2ZVBhc3NlZFxuICAgICk7XG4gICAgY29uc3QgcHJldmlvdXNTbGlkZSA9IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlO1xuICAgIGlmIChuZXh0U2xpZGVzID09PSB1bmRlZmluZWQgfHwgbmV4dFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHRoZXkgY2FuIGJlIDAuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYmVmb3JlQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJlZm9yZUNoYW5nZShuZXh0U2xpZGVzLCB0aGlzLmdldFN0YXRlKCkpO1xuICAgIH1cbiAgICB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiBuZXh0UG9zaXRpb24sXG4gICAgICAgIGN1cnJlbnRTbGlkZTogbmV4dFNsaWRlc1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhZnRlckNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhZnRlckNoYW5nZShwcmV2aW91c1NsaWRlLCB0aGlzLmdldFN0YXRlKCkpO1xuICAgICAgICAgIH0sIHRoaXMucHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBwcmV2aW91cyhzbGlkZXNIYXZlUGFzc2VkID0gMCkge1xuICAgIGNvbnN0IHsgYWZ0ZXJDaGFuZ2UsIGJlZm9yZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobm90RW5vdWdoQ2hpbGRyZW4odGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBuZXh0U2xpZGVzLCBuZXh0UG9zaXRpb24gfSA9IHBvcHVsYXRlUHJldmlvdXNTbGlkZXMoXG4gICAgICB0aGlzLnN0YXRlLFxuICAgICAgdGhpcy5wcm9wcyxcbiAgICAgIHNsaWRlc0hhdmVQYXNzZWRcbiAgICApO1xuICAgIGlmIChuZXh0U2xpZGVzID09PSB1bmRlZmluZWQgfHwgbmV4dFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHRoZXkgY2FuIGJlIDAsIHdoaWNoIGdvZXMgYmFjayB0byB0aGUgZmlyc3Qgc2xpZGUuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByZXZpb3VzU2xpZGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZTtcbiAgICBpZiAodHlwZW9mIGJlZm9yZUNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBiZWZvcmVDaGFuZ2UobmV4dFNsaWRlcywgdGhpcy5nZXRTdGF0ZSgpKTtcbiAgICB9XG4gICAgdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogbmV4dFBvc2l0aW9uLFxuICAgICAgICBjdXJyZW50U2xpZGU6IG5leHRTbGlkZXNcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYWZ0ZXJDaGFuZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWZ0ZXJDaGFuZ2UocHJldmlvdXNTbGlkZSwgdGhpcy5nZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9LCB0aGlzLnByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMua2V5Qm9hcmRDb250cm9sKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMub25LZXlVcCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXkpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvUGxheSk7XG4gICAgICB0aGlzLmF1dG9QbGF5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICByZW5kZXJDYXJvdXNlbEl0ZW1zKCkge1xuICAgIGxldCBjbG9uZXMgPSBbXTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbmZpbml0ZSkge1xuICAgICAgY29uc3QgY2hpbGRyZW5BcnIgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgY2xvbmVzID0gZ2V0Q2xvbmVzKHRoaXMuc3RhdGUuc2xpZGVzVG9TaG93LCBjaGlsZHJlbkFycik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q2Fyb3VzZWxJdGVtc1xuICAgICAgICBjbG9uZXM9e2Nsb25lc31cbiAgICAgICAgZ29Ub1NsaWRlPXt0aGlzLmdvVG9TbGlkZX1cbiAgICAgICAgc3RhdGU9e3RoaXMuc3RhdGV9XG4gICAgICAgIHByb3BzPXt0aGlzLnByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJlbmRlckxlZnRBcnJvdygpIHtcbiAgICBjb25zdCB7IGN1c3RvbUxlZnRBcnJvdyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPExlZnRBcnJvd1xuICAgICAgICBjdXN0b21MZWZ0QXJyb3c9e2N1c3RvbUxlZnRBcnJvd31cbiAgICAgICAgZ2V0U3RhdGU9eygpID0+IHRoaXMuZ2V0U3RhdGUoKX1cbiAgICAgICAgcHJldmlvdXM9e3RoaXMucHJldmlvdXN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmVuZGVyUmlnaHRBcnJvdygpIHtcbiAgICBjb25zdCB7IGN1c3RvbVJpZ2h0QXJyb3cgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSaWdodEFycm93XG4gICAgICAgIGN1c3RvbVJpZ2h0QXJyb3c9e2N1c3RvbVJpZ2h0QXJyb3d9XG4gICAgICAgIGdldFN0YXRlPXsoKSA9PiB0aGlzLmdldFN0YXRlKCl9XG4gICAgICAgIG5leHQ9e3RoaXMubmV4dH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkZXZpY2VUeXBlLFxuICAgICAgYXJyb3dzLFxuICAgICAgcmVtb3ZlQXJyb3dPbkRldmljZVR5cGUsXG4gICAgICBpbmZpbml0ZSxcbiAgICAgIGNvbnRhaW5lckNsYXNzLFxuICAgICAgc2xpZGVyQ2xhc3MsXG4gICAgICBjdXN0b21UcmFuc2l0aW9uLFxuICAgICAgcGFydGlhbFZpc2JpbGUsXG4gICAgICBjZW50ZXJNb2RlLFxuICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbSxcbiAgICAgIHJlbmRlckRvdHNPdXRzaWRlLFxuICAgICAgY2xhc3NOYW1lXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgc2hvdWxkUmVuZGVyT25TU1IsXG4gICAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXIsXG4gICAgICBzaG91bGRSZW5kZXJBdEFsbFxuICAgIH0gPSBnZXRJbml0aWFsU3RhdGUodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcyk7XG4gICAgY29uc3QgaXNMZWZ0RW5kUmVhY2ggPSBpc0luTGVmdEVuZCh0aGlzLnN0YXRlKTtcbiAgICBjb25zdCBpc1JpZ2h0RW5kUmVhY2ggPSBpc0luUmlnaHRFbmQodGhpcy5zdGF0ZSk7XG4gICAgY29uc3Qgc2hvdWxkU2hvd0Fycm93cyA9XG4gICAgICBhcnJvd3MgJiZcbiAgICAgICEoXG4gICAgICAgIHJlbW92ZUFycm93T25EZXZpY2VUeXBlICYmXG4gICAgICAgICgoZGV2aWNlVHlwZSAmJiByZW1vdmVBcnJvd09uRGV2aWNlVHlwZS5pbmRleE9mKGRldmljZVR5cGUpID4gLTEpIHx8XG4gICAgICAgICAgKHRoaXMuc3RhdGUuZGV2aWNlVHlwZSAmJlxuICAgICAgICAgICAgcmVtb3ZlQXJyb3dPbkRldmljZVR5cGUuaW5kZXhPZih0aGlzLnN0YXRlLmRldmljZVR5cGUpID4gLTEpKVxuICAgICAgKSAmJlxuICAgICAgIW5vdEVub3VnaENoaWxkcmVuKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpICYmXG4gICAgICBzaG91bGRSZW5kZXJBdEFsbDtcbiAgICBjb25zdCBkaXNhYmxlTGVmdEFycm93ID0gIWluZmluaXRlICYmIGlzTGVmdEVuZFJlYWNoO1xuICAgIGNvbnN0IGRpc2FibGVSaWdodEFycm93ID0gIWluZmluaXRlICYmIGlzUmlnaHRFbmRSZWFjaDtcbiAgICAvLyB0aGlzIGxpYiBzdXBwb3J0cyBzaG93aW5nIG5leHQgc2V0IG9mIGl0ZW1zIHBhcml0aWFsbHkgYXMgd2VsbCBhcyBjZW50ZXIgbW9kZSB3aGljaCBzaG93cyBib3RoLlxuICAgIGNvbnN0IGN1cnJlbnRUcmFuc2Zvcm0gPSBwYXJ0aWFsVmlzYmlsZVxuICAgICAgPyBnZXRUcmFuc2Zvcm1Gb3JQYXJ0aWFsVnNpYmlsZShcbiAgICAgICAgICB0aGlzLnN0YXRlLFxuICAgICAgICAgIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlcixcbiAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgIClcbiAgICAgIDogY2VudGVyTW9kZVxuICAgICAgPyBnZXRUcmFuc2Zvcm1Gb3JDZW50ZXJNb2RlKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpXG4gICAgICA6IHRoaXMuc3RhdGUudHJhbnNmb3JtO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2ByZWFjdC1tdWx0aS1jYXJvdXNlbC1saXN0ICR7Y29udGFpbmVyQ2xhc3N9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDx1bFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVhY3QtbXVsdGktY2Fyb3VzZWwtdHJhY2sgJHtzbGlkZXJDbGFzc31gfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWRcbiAgICAgICAgICAgICAgICA/IGN1c3RvbVRyYW5zaXRpb24gfHwgZGVmYXVsdFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICA6IFwibm9uZVwiLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogc2hvdWxkUmVuZGVyT25TU1IgPyBcImhpZGRlblwiIDogXCJ1bnNldFwiLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke2N1cnJlbnRUcmFuc2Zvcm0gK1xuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb219cHgsMCwwKWBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5oYW5kbGVNb3ZlfVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlRG93bn1cbiAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5oYW5kbGVPdXR9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlT3V0fVxuICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZURvd259XG4gICAgICAgICAgICBvblRvdWNoTW92ZT17dGhpcy5oYW5kbGVNb3ZlfVxuICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVPdXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2Fyb3VzZWxJdGVtcygpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAge3Nob3VsZFNob3dBcnJvd3MgJiYgIWRpc2FibGVMZWZ0QXJyb3cgJiYgdGhpcy5yZW5kZXJMZWZ0QXJyb3coKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJSaWdodEFycm93KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJyZXZpY29uc1wiO1xuICAgICAgICAgICAgZmFsbGJhY2s6IGZhbGxiYWNrO1xuICAgICAgICAgICAgc3JjOiB1cmwoXCIuL3Jldmljb25zLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiLi9yZXZpY29ucy50dGZcIikgZm9ybWF0KFwidHRmXCIpLFxuICAgICAgICAgICAgICB1cmwoXCIuL3Jldmljb25zLmVvdFwiKSBmb3JtYXQoXCJ0dGZcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHllbGxvdztcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNTBweCAwIDE1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtdHJhY2sge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgdHJhbnNpdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDNweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdzo6YmVmb3JlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogcmV2aWNvbnM7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLWxlZnQge1xuICAgICAgICAgICAgbGVmdDogY2FsYyg0JSArIDFweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLWxlZnQ6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZTgyNFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1yaWdodCB7XG4gICAgICAgICAgICByaWdodDogY2FsYyg0JSArIDFweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLXJpZ2h0OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcXGU4MjVcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90LWxpc3Qge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3QgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90IGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDgwODA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90LS1hY3RpdmUgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwODA4MDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksXG4gICAgICAgICAgICAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLXRyYWNrIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXX0= */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/Carousel.jsx */"));
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
//# sourceMappingURL=index.js.d7e251e010c5c38c0a59.hot-update.js.map