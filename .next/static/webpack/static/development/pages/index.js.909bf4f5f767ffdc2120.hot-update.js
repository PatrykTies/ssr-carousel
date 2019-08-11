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
        className: "jsx-1171375082" + " " + "react-multi-carousel-list ".concat(containerClass, " ").concat(className),
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
        className: "jsx-1171375082" + " " + "react-multi-carousel-track ".concat(sliderClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, this.renderCarouselItems()), shouldShowArrows && !disableLeftArrow && this.renderLeftArrow(), this.renderRightArrow()), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1171375082",
        __self: this
      }, "@font-face{font-family:\"revicons\";fallback:fallback;src:url(\"./revicons.woff\") format(\"woff\"), url(\"./revicons.ttf\") format(\"ttf\"), url(\"./revicons.eot\") format(\"ttf\");}.react-multi-carousel-list.jsx-1171375082{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative;border:solid 2px yellow;margin:0 150px 0 150px;}.react-multi-carousel-track.jsx-1171375082{list-style:none;padding-top:20px;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform,transition;}.react-multiple-carousel__arrow.jsx-1171375082{position:absolute;outline:none;-webkit-transition:all 0.5s;transition:all 0.5s;border-radius:35px;z-index:1000;border:none;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer;}.react-multiple-carousel__arrow.jsx-1171375082:hover{background:rgba(0,0,0,0.8);}.react-multiple-carousel__arrow.jsx-1171375082::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative;}.react-multiple-carousel__arrow--left.jsx-1171375082{left:calc(4% + 1px);}.react-multiple-carousel__arrow--left.jsx-1171375082::before{content:\"e824\";}.react-multiple-carousel__arrow--right.jsx-1171375082{right:calc(4% + 1px);}.react-multiple-carousel__arrow--right.jsx-1171375082::before{content:\"e825\";}.react-multi-carousel-dot-list.jsx-1171375082{position:absolute;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:0;right:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:auto;padding:0;margin:0;list-style:none;text-align:center;}.react-multi-carousel-dot.jsx-1171375082 button.jsx-1171375082{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;padding:5px 5px 5px 5px;box-shadow:none;-webkit-transition:background 0.5s;transition:background 0.5s;border-width:2px;border-style:solid;border-color:grey;padding:0;margin:0;margin-right:6px;outline:0;cursor:pointer;}.react-multi-carousel-dot.jsx-1171375082 button.jsx-1171375082:hover{background:#080808;}.react-multi-carousel-dot--active.jsx-1171375082 button.jsx-1171375082{background:#080808;}.react-multi-carousel-item.jsx-1171375082{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;}@media all and (-ms-high-contrast:none), (-ms-high-contrast:active){.react-multi-carousel-item.jsx-1171375082{-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;}.react-multi-carousel-track.jsx-1171375082{overflow:visible !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1JFQUNUL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0Nhcm91c2VsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzZ0JvQixBQUdvQyxBQU9WLEFBUUcsQUFXRSxBQWFZLEFBR2YsQUFVSyxBQUdMLEFBR00sQUFHTixBQUlHLEFBYUcsQUFrQkYsQUFHQSxBQUdTLEFBTUQsQUFHRyxlQXBFbkIsQUFhYixBQU1BLENBOUNtQixFQVdKLEFBdUNKLENBK0JYLEFBR0EsQ0EvQ0EsQ0FNQSxBQW9CYSxFQTlFTyxHQTJDSixDQUpoQixBQTJCZSxDQTZDYixHQXBGb0IsQ0FvRFIsQ0EvREgsT0E0QlksQ0F6Q2dCLENBY3hCLEVBK0RLLGlCQW5DQSxDQW9DUixVQUNjLEVBM0VMLEtBcUJBLEFBa0JULFVBQ1EsQUE2RGxCLE9BekJnQixBQW1CVyxFQXpFZCxHQXNDTixNQW5CVCxDQW9CVSxHQXRDSSxDQXNEZSxJQWxFUixBQW1ESSxPQXRDTywyQkFDZixPQTVCakIsQ0FtR0EsT0F0RWtCLEVBekJBLE9BNkVDLE9BbkRQLEVBekJRLEVBVUEsTUFnQkgsQUFtREksVUE1RUssRUFVSSxHQWdCOUIsSUFtRG9CLEtBakJOLFVBM0RXLEVBNERiLENBaUJBLFNBaEJELENBaUJBLFFBaEJPLENBaUJDLENBOUVuQixjQThEb0IsRUFpQlIsVUFDSyxNQWpCakIsU0FrQkEsVUF4RTZCLDhEQUNPLGlDQUNwQyIsImZpbGUiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9SRUFDVC93aXRoLWFwb2xsby1hcHAvY29tcG9uZW50cy9DYXJvdXNlbC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2Fyb3VzZWxJdGVtcyBmcm9tIFwiLi9DYXJvdXNlbEl0ZW1zXCI7XG5pbXBvcnQgeyBMZWZ0QXJyb3csIFJpZ2h0QXJyb3cgfSBmcm9tIFwiLi9BcnJvd3NcIjtcbmltcG9ydCB7XG4gIHRocm90dGxlLFxuICBnZXRDbG9uZXMsXG4gIGNoZWNrQ2xvbmVzUG9zaXRpb24sIC8vIGhhbmRsZSB3aGVuIHRoZXJlIGFyZSBjbG9uZXMgYXBwZWFyIG9uIHRoZSBzY3JlZW4sIG9ubHkgYXBwbHkgdG8gaW5maW5pdGUgbW9kZS5cbiAgZ2V0SW5pdGlhbFN0YXRlLFxuICBnZXRUcmFuc2Zvcm1Gb3JDZW50ZXJNb2RlLFxuICBnZXRUcmFuc2Zvcm1Gb3JQYXJ0aWFsVnNpYmlsZSxcbiAgdGhyb3dFcnJvcixcbiAgZ2V0SXRlbUNsaWVudFNpZGVXaWR0aCxcbiAgcG9wdWxhdGVOZXh0U2xpZGVzLFxuICBwb3B1bGF0ZVByZXZpb3VzU2xpZGVzLFxuICBwb3B1bGF0ZVNsaWRlc09uTW91c2VUb3VjaE1vdmUsXG4gIGlzSW5MZWZ0RW5kLFxuICBpc0luUmlnaHRFbmQsXG4gIGdldEluaXRpYWxTbGlkZUluSW5pZnRlTW9kZSxcbiAgbm90RW5vdWdoQ2hpbGRyZW5cbn0gZnJvbSBcIi4vdXRpbHNcIjtcbmNvbnN0IGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24gPSA0MDA7XG5jb25zdCBkZWZhdWx0VHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDQwMG1zIGVhc2UtaW4tb3V0XCI7XG5cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzbGlkZXNUb1NsaWRlOiAxLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgc3dpcGVhYmxlOiB0cnVlLFxuICAgIGFycm93czogdHJ1ZSxcbiAgICBjb250YWluZXJDbGFzczogXCJcIixcbiAgICBzbGlkZXJDbGFzczogXCJcIixcbiAgICBpdGVtQ2xhc3M6IFwiXCIsXG4gICAga2V5Qm9hcmRDb250cm9sOiB0cnVlLFxuICAgIGF1dG9QbGF5U3BlZWQ6IDMwMDAsXG4gICAgc2hvd0RvdHM6IGZhbHNlLFxuICAgIHJlbmRlckRvdHNPdXRzaWRlOiBmYWxzZSxcbiAgICBtaW5pbXVtVG91Y2hEcmFnOiA4MCxcbiAgICBkb3RMaXN0Q2xhc3M6IFwiXCIsXG4gICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgYWRkaXRpb25hbFRyYW5zZnJvbTogMFxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNvbnRhaW5lclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtV2lkdGg6IDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDAsXG4gICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICB0b3RhbEl0ZW1zOiBSZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbiksXG4gICAgICBkZXZpY2VUeXBlOiBcIlwiLFxuICAgICAgZG9tTG9hZGVkOiBmYWxzZSxcbiAgICAgIHRyYW5zZm9ybTogMCxcbiAgICAgIGNvbnRhaW5lcldpZHRoOiAwXG4gICAgfTtcbiAgICB0aGlzLmlzTW91c2VNb3ZlRXZlbnQgPSB0aGlzLmlzTW91c2VNb3ZlRXZlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRG93biA9IHRoaXMuaGFuZGxlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW92ZSA9IHRoaXMuaGFuZGxlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlT3V0ID0gdGhpcy5oYW5kbGVPdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5VXAgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUVudGVyID0gdGhpcy5oYW5kbGVFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0SXNJblRocm90dGxlID0gdGhpcy5zZXRJc0luVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm5leHQgPSB0aHJvdHRsZShcbiAgICAgIHRoaXMubmV4dC5iaW5kKHRoaXMpLFxuICAgICAgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0aGlzLnNldElzSW5UaHJvdHRsZVxuICAgICk7XG4gICAgdGhpcy5wcmV2aW91cyA9IHRocm90dGxlKFxuICAgICAgdGhpcy5wcmV2aW91cy5iaW5kKHRoaXMpLFxuICAgICAgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0aGlzLnNldElzSW5UaHJvdHRsZVxuICAgICk7XG4gICAgdGhpcy5nb1RvU2xpZGUgPSB0aHJvdHRsZShcbiAgICAgIHRoaXMuZ29Ub1NsaWRlLmJpbmQodGhpcyksXG4gICAgICBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfHwgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRoaXMuc2V0SXNJblRocm90dGxlXG4gICAgKTtcbiAgICB0aGlzLm9uTW92ZSA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdGlhbFggPSAwO1xuICAgIHRoaXMubGFzdFggPSAwO1xuICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gZmFsc2U7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcIlwiO1xuICAgIHRoaXMuaW5pdGlhbFkgPSAwO1xuICAgIHRoaXMuaXNJblRocm90dGxlID0gZmFsc2U7XG4gIH1cbiAgc2V0SXNJblRocm90dGxlKGlzSW5UaHJvdHRsZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5pc0luVGhyb3R0bGUgPSBpc0luVGhyb3R0bGU7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRvbUxvYWRlZDogdHJ1ZSB9KTtcbiAgICB0aGlzLnNldEl0ZW1zVG9TaG93KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZSk7XG4gICAgdGhpcy5vblJlc2l6ZSh0cnVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy5rZXlCb2FyZENvbnRyb2wpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b1BsYXkgJiYgdGhpcy5wcm9wcy5hdXRvUGxheVNwZWVkKSB7XG4gICAgICB0aGlzLmF1dG9QbGF5ID0gc2V0SW50ZXJ2YWwodGhpcy5uZXh0LCB0aGlzLnByb3BzLmF1dG9QbGF5U3BlZWQpO1xuICAgIH1cbiAgfVxuICBzZXRJdGVtc1RvU2hvdyhzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uKSB7XG4gICAgY29uc3QgeyByZXNwb25zaXZlIH0gPSB0aGlzLnByb3BzO1xuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmUpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCB7IGJyZWFrcG9pbnQsIGl0ZW1zIH0gPSByZXNwb25zaXZlW2l0ZW1dO1xuICAgICAgY29uc3QgeyBtYXgsIG1pbiB9ID0gYnJlYWtwb2ludDtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBtaW4gJiYgd2luZG93LmlubmVyV2lkdGggPD0gbWF4KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZXNUb1Nob3c6IGl0ZW1zLCBkZXZpY2VUeXBlOiBpdGVtIH0pO1xuICAgICAgICB0aGlzLnNldENvbnRhaW5lckFuZEl0ZW1XaWR0aChpdGVtcywgc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gdGhpcyBpcyBmb3IgcmVzaXppbmcgb25seSBvciB0aGUgZmlyc3QgdGltZSB3aGVuIHdlIGVudGVyZWQgY2xpZW50LXNpZGUgZnJvbSBzZXJ2ZXItc2lkZS5cbiAgc2V0Q29udGFpbmVyQW5kSXRlbVdpZHRoKHNsaWRlc1RvU2hvdywgc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbikge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lclJlZiAmJiB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBpdGVtV2lkdGggPSBnZXRJdGVtQ2xpZW50U2lkZVdpZHRoKFxuICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICBzbGlkZXNUb1Nob3csXG4gICAgICAgIGNvbnRhaW5lcldpZHRoXG4gICAgICApO1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5lcldpZHRoLFxuICAgICAgICAgIGl0ZW1XaWR0aFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5maW5pdGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2xvbmVzKHNsaWRlc1RvU2hvdywgaXRlbVdpZHRoLCBzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBpZiAoc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbikge1xuICAgICAgICB0aGlzLmNvcnJlY3RJdGVtc1Bvc2l0aW9uKGl0ZW1XaWR0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvcnJlY3RJdGVtc1Bvc2l0aW9uKGl0ZW1XaWR0aCwgaXNBbmltYXRpb25BbGxvd2VkKSB7XG4gICAgLypcbiAgICBGb3Igc3dpcGUsIGRyYWcgYW5kIHJlc2l6aW5nLCB0aGV5IGNoYW5nZWQgdGhlIHBvc2l0aW9uIG9mIHRoZSBjYXJvdXNlbCwgYnV0IHRoZSBwb3NpdGlvbiBhcmUgbm90IGFsd2F5cyBjb3JyZWN0LlxuICAgIEhlbmNlLCB0aGlzIGlzIHRvIG1ha2Ugc3VyZSBvdXIgaXRlbXMgYXJlIGluIHRoZSBjb3JyZWN0IHBsYWNlLlxuICAgICovXG4gICAgaWYgKGlzQW5pbWF0aW9uQWxsb3dlZCkge1xuICAgICAgdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWlzQW5pbWF0aW9uQWxsb3dlZCAmJiB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZCkge1xuICAgICAgdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0cmFuc2Zvcm06IC0oaXRlbVdpZHRoICogdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGUpXG4gICAgfSk7XG4gIH1cbiAgb25SZXNpemUodmFsdWUpIHtcbiAgICAvLyB2YWx1ZSBoZXJlIGNhbiBiZSBodG1sIGV2ZW50IG9yIGEgYm9vbGVhbi5cbiAgICAvLyBpZiBpdHMgaW4gaW5maW5pdGUgbW9kZSwgd2Ugd2FudCB0byBrZWVwIHRoZSBjdXJyZW50IHNsaWRlIGluZGV4IG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIGlmIGl0cyBub3QgaW5maW5pdGUgbW9kZSwga2VlcGluZyB0aGUgY3VycmVudCBzbGlkZSBpbmRleCBoYXMgYWxyZWFkeSBiZWVuIHRha2VuIGNhcmUgb2ZcbiAgICBjb25zdCB7IGluZmluaXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBzaG91bGRDb3JyZWN0SXRlbVBvc2l0aW9uO1xuICAgIGlmICghaW5maW5pdGUpIHtcbiAgICAgIHNob3VsZENvcnJlY3RJdGVtUG9zaXRpb24gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIgJiYgdmFsdWUpIHtcbiAgICAgICAgc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0SXRlbXNUb1Nob3coc2hvdWxkQ29ycmVjdEl0ZW1Qb3NpdGlvbik7XG4gIH1cbiAgaXNNb3VzZU1vdmVFdmVudChlKSB7XG4gICAgcmV0dXJuIFwiY2xpZW50WFwiICYmIFwiY2xpZW50WVwiIGluIGU7XG4gIH1cbiAgcmVzZXRNb3ZlU3RhdHVzKCkge1xuICAgIHRoaXMub25Nb3ZlID0gZmFsc2U7XG4gICAgdGhpcy5pbml0aWFsWCA9IDA7XG4gICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcIlwiO1xuICAgIHRoaXMuaW5pdGlhbFkgPSAwO1xuICB9XG4gIGhhbmRsZURvd24oZSkge1xuICAgIGlmIChcbiAgICAgICghdGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpICYmICF0aGlzLnByb3BzLnN3aXBlYWJsZSkgfHxcbiAgICAgICh0aGlzLmlzTW91c2VNb3ZlRXZlbnQoZSkgJiYgIXRoaXMucHJvcHMuZHJhZ2dhYmxlKSB8fFxuICAgICAgdGhpcy5pc0luVGhyb3R0bGVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSB0aGlzLmlzTW91c2VNb3ZlRXZlbnQoZSkgPyBlIDogZS50b3VjaGVzWzBdO1xuICAgIHRoaXMub25Nb3ZlID0gdHJ1ZTtcbiAgICB0aGlzLmluaXRpYWxYID0gY2xpZW50WDtcbiAgICB0aGlzLmluaXRpYWxZID0gY2xpZW50WTtcbiAgICB0aGlzLmxhc3RYID0gY2xpZW50WDtcbiAgICB0aGlzLmlzQW5pbWF0aW9uQWxsb3dlZCA9IGZhbHNlO1xuICB9XG4gIGhhbmRsZU1vdmUoZSkge1xuICAgIGlmIChcbiAgICAgICghdGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpICYmICF0aGlzLnByb3BzLnN3aXBlYWJsZSkgfHxcbiAgICAgICh0aGlzLmlzTW91c2VNb3ZlRXZlbnQoZSkgJiYgIXRoaXMucHJvcHMuZHJhZ2dhYmxlKSB8fFxuICAgICAgbm90RW5vdWdoQ2hpbGRyZW4odGhpcy5zdGF0ZSwgdGhpcy5wcm9wcylcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSB0aGlzLmlzTW91c2VNb3ZlRXZlbnQoZSkgPyBlIDogZS50b3VjaGVzWzBdO1xuXG4gICAgY29uc3QgZGlmZlggPSB0aGlzLmluaXRpYWxYIC0gY2xpZW50WDtcbiAgICBjb25zdCBkaWZmWSA9IHRoaXMuaW5pdGlhbFkgLSBjbGllbnRZO1xuICAgIGlmICghdGhpcy5pc01vdXNlTW92ZUV2ZW50KGUpICYmIHRoaXMuYXV0b1BsYXkgJiYgdGhpcy5wcm9wcy5hdXRvUGxheSkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9QbGF5KTtcbiAgICAgIHRoaXMuYXV0b1BsYXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm9uTW92ZSkge1xuICAgICAgaWYgKCEoTWF0aC5hYnMoZGlmZlgpID4gTWF0aC5hYnMoZGlmZlkpKSkge1xuICAgICAgICAvLyBwcmV2ZW50IHN3aXBpbmcgdXAgYW5kIGRvd24gbW92ZXMgdGhlIGNhcm91c2VsLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgbmV4dFBvc2l0aW9uLFxuICAgICAgICBjYW5Db250aW51ZVxuICAgICAgfSA9IHBvcHVsYXRlU2xpZGVzT25Nb3VzZVRvdWNoTW92ZShcbiAgICAgICAgdGhpcy5zdGF0ZSxcbiAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgdGhpcy5pbml0aWFsWCxcbiAgICAgICAgdGhpcy5sYXN0WCxcbiAgICAgICAgY2xpZW50WFxuICAgICAgKTtcbiAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIGlmIChjYW5Db250aW51ZSAmJiBuZXh0UG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIG5leHRQb3NpdGlvbiBjYW4gYmUgMDtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdHJhbnNmb3JtOiBuZXh0UG9zaXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdFggPSBjbGllbnRYO1xuICAgIH1cbiAgfVxuICBoYW5kbGVPdXQoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmF1dG9QbGF5ICYmICF0aGlzLmF1dG9QbGF5KSB7XG4gICAgICB0aGlzLmF1dG9QbGF5ID0gc2V0SW50ZXJ2YWwodGhpcy5uZXh0LCB0aGlzLnByb3BzLmF1dG9QbGF5U3BlZWQpO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGREaXNhYmxlT25Nb2JpbGUgPVxuICAgICAgZS50eXBlID09PSBcInRvdWNoZW5kXCIgJiYgIXRoaXMucHJvcHMuc3dpcGVhYmxlO1xuICAgIGNvbnN0IHNob3VsZERpc2FibGVPbkRlc2t0b3AgPVxuICAgICAgKGUudHlwZSA9PT0gXCJtb3VzZWxlYXZlXCIgfHwgZS50eXBlID09PSBcIm1vdXNldXBcIikgJiZcbiAgICAgICF0aGlzLnByb3BzLmRyYWdnYWJsZTtcbiAgICBpZiAoc2hvdWxkRGlzYWJsZU9uTW9iaWxlIHx8IHNob3VsZERpc2FibGVPbkRlc2t0b3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMub25Nb3ZlKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICBjb25zdCBjYW5Hb05leHQgPVxuICAgICAgICAgIHRoaXMuaW5pdGlhbFggLSB0aGlzLmxhc3RYID49IHRoaXMucHJvcHMubWluaW11bVRvdWNoRHJhZztcbiAgICAgICAgaWYgKGNhbkdvTmV4dCkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlc0hhdmVQYXNzZWQgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgKHRoaXMuaW5pdGlhbFggLSB0aGlzLmxhc3RYKSAvIHRoaXMuc3RhdGUuaXRlbVdpZHRoXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLm5leHQoc2xpZGVzSGF2ZVBhc3NlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb3JyZWN0SXRlbXNQb3NpdGlvbih0aGlzLnN0YXRlLml0ZW1XaWR0aCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgY29uc3QgY2FuR29OZXh0ID1cbiAgICAgICAgICB0aGlzLmxhc3RYIC0gdGhpcy5pbml0aWFsWCA+IHRoaXMucHJvcHMubWluaW11bVRvdWNoRHJhZztcbiAgICAgICAgaWYgKGNhbkdvTmV4dCkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlc0hhdmVQYXNzZWQgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgKHRoaXMubGFzdFggLSB0aGlzLmluaXRpYWxYKSAvIHRoaXMuc3RhdGUuaXRlbVdpZHRoXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnByZXZpb3VzKHNsaWRlc0hhdmVQYXNzZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29ycmVjdEl0ZW1zUG9zaXRpb24odGhpcy5zdGF0ZS5pdGVtV2lkdGgsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2V0TW92ZVN0YXR1cygpO1xuICAgIH1cbiAgfVxuICBvbktleVVwKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSAzNzpcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKTtcbiAgICAgIGNhc2UgMzk6XG4gICAgICAgIHJldHVybiB0aGlzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlRW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuYXV0b1BsYXkgJiYgdGhpcy5wcm9wcy5hdXRvUGxheSkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9QbGF5KTtcbiAgICAgIHRoaXMuYXV0b1BsYXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGdvVG9TbGlkZShzbGlkZSkge1xuICAgIGlmICh0aGlzLmlzSW5UaHJvdHRsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGl0ZW1XaWR0aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGFmdGVyQ2hhbmdlLCBiZWZvcmVDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcHJldmlvdXNTbGlkZSA9IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlO1xuICAgIGlmICh0eXBlb2YgYmVmb3JlQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGJlZm9yZUNoYW5nZShzbGlkZSwgdGhpcy5nZXRTdGF0ZSgpKTtcbiAgICB9XG4gICAgdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRTbGlkZTogc2xpZGUsXG4gICAgICAgIHRyYW5zZm9ybTogLShpdGVtV2lkdGggKiBzbGlkZSlcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmluZmluaXRlKSB7XG4gICAgICAgICAgdGhpcy5jb3JyZWN0Q2xvbmVzUG9zaXRpb24oeyBkb21Mb2FkZWQ6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBhZnRlckNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhZnRlckNoYW5nZShwcmV2aW91c1NsaWRlLCB0aGlzLmdldFN0YXRlKCkpO1xuICAgICAgICAgIH0sIHRoaXMucHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIG9uTW92ZTogdGhpcy5vbk1vdmUsXG4gICAgICBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uXG4gICAgfTtcbiAgfVxuICBuZXh0KHNsaWRlc0hhdmVQYXNzZWQgPSAwKSB7XG4gICAgY29uc3QgeyBhZnRlckNoYW5nZSwgYmVmb3JlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChub3RFbm91Z2hDaGlsZHJlbih0aGlzLnN0YXRlLCB0aGlzLnByb3BzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKlxuICAgIHR3byBjYXNlczpcbiAgICAxLiBXZSBhcmUgbm90IG92ZXItc2xpZGluZy5cbiAgICAyLiBXZSBhcmUgc2xpZGluZyBvdmVyIHRvIHdoYXQgd2UgaGF2ZSwgdGhhdCBtZWFucyBuZXh0c2xpZGVzID4gdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGguIChkb2VzIG5vdCBhcHBseSB0byB0aGUgaW5pZm5pdGUgbW9kZSlcbiAgICAqL1xuICAgIGNvbnN0IHsgbmV4dFNsaWRlcywgbmV4dFBvc2l0aW9uIH0gPSBwb3B1bGF0ZU5leHRTbGlkZXMoXG4gICAgICB0aGlzLnN0YXRlLFxuICAgICAgdGhpcy5wcm9wcyxcbiAgICAgIHNsaWRlc0hhdmVQYXNzZWRcbiAgICApO1xuICAgIGNvbnN0IHByZXZpb3VzU2xpZGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZTtcbiAgICBpZiAobmV4dFNsaWRlcyA9PT0gdW5kZWZpbmVkIHx8IG5leHRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyB0aGV5IGNhbiBiZSAwLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGJlZm9yZUNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBiZWZvcmVDaGFuZ2UobmV4dFNsaWRlcywgdGhpcy5nZXRTdGF0ZSgpKTtcbiAgICB9XG4gICAgdGhpcy5pc0FuaW1hdGlvbkFsbG93ZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogbmV4dFBvc2l0aW9uLFxuICAgICAgICBjdXJyZW50U2xpZGU6IG5leHRTbGlkZXNcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYWZ0ZXJDaGFuZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWZ0ZXJDaGFuZ2UocHJldmlvdXNTbGlkZSwgdGhpcy5nZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9LCB0aGlzLnByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgcHJldmlvdXMoc2xpZGVzSGF2ZVBhc3NlZCA9IDApIHtcbiAgICBjb25zdCB7IGFmdGVyQ2hhbmdlLCBiZWZvcmVDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG5vdEVub3VnaENoaWxkcmVuKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgbmV4dFNsaWRlcywgbmV4dFBvc2l0aW9uIH0gPSBwb3B1bGF0ZVByZXZpb3VzU2xpZGVzKFxuICAgICAgdGhpcy5zdGF0ZSxcbiAgICAgIHRoaXMucHJvcHMsXG4gICAgICBzbGlkZXNIYXZlUGFzc2VkXG4gICAgKTtcbiAgICBpZiAobmV4dFNsaWRlcyA9PT0gdW5kZWZpbmVkIHx8IG5leHRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyB0aGV5IGNhbiBiZSAwLCB3aGljaCBnb2VzIGJhY2sgdG8gdGhlIGZpcnN0IHNsaWRlLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2aW91c1NsaWRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGU7XG4gICAgaWYgKHR5cGVvZiBiZWZvcmVDaGFuZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYmVmb3JlQ2hhbmdlKG5leHRTbGlkZXMsIHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgfVxuICAgIHRoaXMuaXNBbmltYXRpb25BbGxvd2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICB0cmFuc2Zvcm06IG5leHRQb3NpdGlvbixcbiAgICAgICAgY3VycmVudFNsaWRlOiBuZXh0U2xpZGVzXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGFmdGVyQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlKHByZXZpb3VzU2xpZGUsIHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfSwgdGhpcy5wcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfHwgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xuICAgIGlmICh0aGlzLnByb3BzLmtleUJvYXJkQ29udHJvbCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLm9uS2V5VXApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvUGxheSAmJiB0aGlzLmF1dG9QbGF5KSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1BsYXkpO1xuICAgICAgdGhpcy5hdXRvUGxheSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgcmVuZGVyQ2Fyb3VzZWxJdGVtcygpIHtcbiAgICBsZXQgY2xvbmVzID0gW107XG4gICAgaWYgKHRoaXMucHJvcHMuaW5maW5pdGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuQXJyID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgIGNsb25lcyA9IGdldENsb25lcyh0aGlzLnN0YXRlLnNsaWRlc1RvU2hvdywgY2hpbGRyZW5BcnIpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENhcm91c2VsSXRlbXNcbiAgICAgICAgY2xvbmVzPXtjbG9uZXN9XG4gICAgICAgIGdvVG9TbGlkZT17dGhpcy5nb1RvU2xpZGV9XG4gICAgICAgIHN0YXRlPXt0aGlzLnN0YXRlfVxuICAgICAgICBwcm9wcz17dGhpcy5wcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZW5kZXJMZWZ0QXJyb3coKSB7XG4gICAgY29uc3QgeyBjdXN0b21MZWZ0QXJyb3cgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMZWZ0QXJyb3dcbiAgICAgICAgY3VzdG9tTGVmdEFycm93PXtjdXN0b21MZWZ0QXJyb3d9XG4gICAgICAgIGdldFN0YXRlPXsoKSA9PiB0aGlzLmdldFN0YXRlKCl9XG4gICAgICAgIHByZXZpb3VzPXt0aGlzLnByZXZpb3VzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJlbmRlclJpZ2h0QXJyb3coKSB7XG4gICAgY29uc3QgeyBjdXN0b21SaWdodEFycm93IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmlnaHRBcnJvd1xuICAgICAgICBjdXN0b21SaWdodEFycm93PXtjdXN0b21SaWdodEFycm93fVxuICAgICAgICBnZXRTdGF0ZT17KCkgPT4gdGhpcy5nZXRTdGF0ZSgpfVxuICAgICAgICBuZXh0PXt0aGlzLm5leHR9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGV2aWNlVHlwZSxcbiAgICAgIGFycm93cyxcbiAgICAgIHJlbW92ZUFycm93T25EZXZpY2VUeXBlLFxuICAgICAgaW5maW5pdGUsXG4gICAgICBjb250YWluZXJDbGFzcyxcbiAgICAgIHNsaWRlckNsYXNzLFxuICAgICAgY3VzdG9tVHJhbnNpdGlvbixcbiAgICAgIHBhcnRpYWxWaXNiaWxlLFxuICAgICAgY2VudGVyTW9kZSxcbiAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb20sXG4gICAgICByZW5kZXJEb3RzT3V0c2lkZSxcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHNob3VsZFJlbmRlck9uU1NSLFxuICAgICAgcGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyLFxuICAgICAgc2hvdWxkUmVuZGVyQXRBbGxcbiAgICB9ID0gZ2V0SW5pdGlhbFN0YXRlKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGlzTGVmdEVuZFJlYWNoID0gaXNJbkxlZnRFbmQodGhpcy5zdGF0ZSk7XG4gICAgY29uc3QgaXNSaWdodEVuZFJlYWNoID0gaXNJblJpZ2h0RW5kKHRoaXMuc3RhdGUpO1xuICAgIGNvbnN0IHNob3VsZFNob3dBcnJvd3MgPVxuICAgICAgYXJyb3dzICYmXG4gICAgICAhKFxuICAgICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZSAmJlxuICAgICAgICAoKGRldmljZVR5cGUgJiYgcmVtb3ZlQXJyb3dPbkRldmljZVR5cGUuaW5kZXhPZihkZXZpY2VUeXBlKSA+IC0xKSB8fFxuICAgICAgICAgICh0aGlzLnN0YXRlLmRldmljZVR5cGUgJiZcbiAgICAgICAgICAgIHJlbW92ZUFycm93T25EZXZpY2VUeXBlLmluZGV4T2YodGhpcy5zdGF0ZS5kZXZpY2VUeXBlKSA+IC0xKSlcbiAgICAgICkgJiZcbiAgICAgICFub3RFbm91Z2hDaGlsZHJlbih0aGlzLnN0YXRlLCB0aGlzLnByb3BzKSAmJlxuICAgICAgc2hvdWxkUmVuZGVyQXRBbGw7XG4gICAgY29uc3QgZGlzYWJsZUxlZnRBcnJvdyA9ICFpbmZpbml0ZSAmJiBpc0xlZnRFbmRSZWFjaDtcbiAgICBjb25zdCBkaXNhYmxlUmlnaHRBcnJvdyA9ICFpbmZpbml0ZSAmJiBpc1JpZ2h0RW5kUmVhY2g7XG4gICAgLy8gdGhpcyBsaWIgc3VwcG9ydHMgc2hvd2luZyBuZXh0IHNldCBvZiBpdGVtcyBwYXJpdGlhbGx5IGFzIHdlbGwgYXMgY2VudGVyIG1vZGUgd2hpY2ggc2hvd3MgYm90aC5cbiAgICBjb25zdCBjdXJyZW50VHJhbnNmb3JtID0gcGFydGlhbFZpc2JpbGVcbiAgICAgID8gZ2V0VHJhbnNmb3JtRm9yUGFydGlhbFZzaWJpbGUoXG4gICAgICAgICAgdGhpcy5zdGF0ZSxcbiAgICAgICAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXIsXG4gICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICApXG4gICAgICA6IGNlbnRlck1vZGVcbiAgICAgID8gZ2V0VHJhbnNmb3JtRm9yQ2VudGVyTW9kZSh0aGlzLnN0YXRlLCB0aGlzLnByb3BzKVxuICAgICAgOiB0aGlzLnN0YXRlLnRyYW5zZm9ybTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmVhY3QtbXVsdGktY2Fyb3VzZWwtbGlzdCAke2NvbnRhaW5lckNsYXNzfSAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWN0LW11bHRpLWNhcm91c2VsLXRyYWNrICR7c2xpZGVyQ2xhc3N9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoaXMuaXNBbmltYXRpb25BbGxvd2VkXG4gICAgICAgICAgICAgICAgPyBjdXN0b21UcmFuc2l0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNob3VsZFJlbmRlck9uU1NSID8gXCJoaWRkZW5cIiA6IFwidW5zZXRcIixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtjdXJyZW50VHJhbnNmb3JtICtcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVHJhbnNmcm9tfXB4LDAsMClgXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGxlTW92ZX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZURvd259XG4gICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlT3V0fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU91dH1cbiAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVEb3dufVxuICAgICAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMuaGFuZGxlTW92ZX1cbiAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlT3V0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcm91c2VsSXRlbXMoKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIHtzaG91bGRTaG93QXJyb3dzICYmICFkaXNhYmxlTGVmdEFycm93ICYmIHRoaXMucmVuZGVyTGVmdEFycm93KCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyUmlnaHRBcnJvdygpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwicmV2aWNvbnNcIjtcbiAgICAgICAgICAgIGZhbGxiYWNrOiBmYWxsYmFjaztcbiAgICAgICAgICAgIHNyYzogdXJsKFwiLi9yZXZpY29ucy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgICAgICAgIHVybChcIi4vcmV2aWNvbnMudHRmXCIpIGZvcm1hdChcInR0ZlwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiLi9yZXZpY29ucy5lb3RcIikgZm9ybWF0KFwidHRmXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB5ZWxsb3c7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTUwcHggMCAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLXRyYWNrIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIHRyYW5zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQzcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdzpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3c6OmJlZm9yZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJldmljb25zO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoNCUgKyAxcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcXGU4MjRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IGNhbGMoNCUgKyAxcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1yaWdodDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlODI1XCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC1saXN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90IGJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdCBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA4MDgwODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC0tYWN0aXZlIGJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDgwODA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLFxuICAgICAgICAgICAgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC10cmFjayB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl19 */\n/*@ sourceURL=/Users/admin/Desktop/REACT/with-apollo-app/components/Carousel.jsx */"));
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
//# sourceMappingURL=index.js.909bf4f5f767ffdc2120.hot-update.js.map