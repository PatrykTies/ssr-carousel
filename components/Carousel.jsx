import React, { Component } from "react";
import CarouselItems from "./CarouselItems";
import { LeftArrow, RightArrow } from "./Arrows";
import {
  throttle,
  getClones,
  checkClonesPosition, // handle when there are clones appear on the screen, only apply to infinite mode.
  getInitialState,
  getTransformForCenterMode,
  getTransformForPartialVsibile,
  throwError,
  getItemClientSideWidth,
  populateNextSlides,
  populatePreviousSlides,
  populateSlidesOnMouseTouchMove,
  isInLeftEnd,
  isInRightEnd,
  getInitialSlideInInifteMode,
  notEnoughChildren
} from "./utils";
const defaultTransitionDuration = 400;
const defaultTransition = "transform 400ms ease-in-out";

class Carousel extends Component {
  static defaultProps = {
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
  };
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      itemWidth: 0,
      slidesToShow: 0,
      currentSlide: 0,
      totalItems: React.Children.count(props.children),
      deviceType: "",
      domLoaded: false,
      transform: 0,
      containerWidth: 0
    };
    this.isMouseMoveEvent = this.isMouseMoveEvent.bind(this);
    this.onResize = this.onResize.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleOut = this.handleOut.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.setIsInThrottle = this.setIsInThrottle.bind(this);
    this.next = throttle(
      this.next.bind(this),
      props.transitionDuration || defaultTransitionDuration,
      this.setIsInThrottle
    );
    this.previous = throttle(
      this.previous.bind(this),
      props.transitionDuration || defaultTransitionDuration,
      this.setIsInThrottle
    );
    this.goToSlide = throttle(
      this.goToSlide.bind(this),
      props.transitionDuration || defaultTransitionDuration,
      this.setIsInThrottle
    );
    this.onMove = false;
    this.initialX = 0;
    this.lastX = 0;
    this.isAnimationAllowed = false;
    this.direction = "";
    this.initialY = 0;
    this.isInThrottle = false;
  }
  setIsInThrottle(isInThrottle = false) {
    this.isInThrottle = isInThrottle;
  }
  componentDidMount() {
    this.setState({ domLoaded: true });
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
  setItemsToShow(shouldCorrectItemPosition) {
    const { responsive } = this.props;
    Object.keys(responsive).forEach(item => {
      const { breakpoint, items } = responsive[item];
      const { max, min } = breakpoint;
      if (window.innerWidth >= min && window.innerWidth <= max) {
        this.setState({ slidesToShow: items, deviceType: item });
        this.setContainerAndItemWidth(items, shouldCorrectItemPosition);
      }
    });
  }
  // this is for resizing only or the first time when we entered client-side from server-side.
  setContainerAndItemWidth(slidesToShow, shouldCorrectItemPosition) {
    if (this.containerRef && this.containerRef.current) {
      const containerWidth = this.containerRef.current.offsetWidth;
      const itemWidth = getItemClientSideWidth(
        this.props,
        slidesToShow,
        containerWidth
      );
      this.setState(
        {
          containerWidth,
          itemWidth
        },
        () => {
          if (this.props.infinite) {
            this.setClones(slidesToShow, itemWidth, shouldCorrectItemPosition);
          }
        }
      );
      if (shouldCorrectItemPosition) {
        this.correctItemsPosition(itemWidth);
      }
    }
  }
  correctItemsPosition(itemWidth, isAnimationAllowed) {
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
  onResize(value) {
    // value here can be html event or a boolean.
    // if its in infinite mode, we want to keep the current slide index no matter what.
    // if its not infinite mode, keeping the current slide index has already been taken care of
    const { infinite } = this.props;
    let shouldCorrectItemPosition;
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
  isMouseMoveEvent(e) {
    return "clientX" && "clientY" in e;
  }
  resetMoveStatus() {
    this.onMove = false;
    this.initialX = 0;
    this.lastX = 0;
    this.direction = "";
    this.initialY = 0;
  }
  handleDown(e) {
    if (
      (!this.isMouseMoveEvent(e) && !this.props.swipeable) ||
      (this.isMouseMoveEvent(e) && !this.props.draggable) ||
      this.isInThrottle
    ) {
      return;
    }
    const { clientX, clientY } = this.isMouseMoveEvent(e) ? e : e.touches[0];
    this.onMove = true;
    this.initialX = clientX;
    this.initialY = clientY;
    this.lastX = clientX;
    this.isAnimationAllowed = false;
  }
  handleMove(e) {
    if (
      (!this.isMouseMoveEvent(e) && !this.props.swipeable) ||
      (this.isMouseMoveEvent(e) && !this.props.draggable) ||
      notEnoughChildren(this.state, this.props)
    ) {
      return;
    }
    const { clientX, clientY } = this.isMouseMoveEvent(e) ? e : e.touches[0];

    const diffX = this.initialX - clientX;
    const diffY = this.initialY - clientY;
    if (!this.isMouseMoveEvent(e) && this.autoPlay && this.props.autoPlay) {
      clearInterval(this.autoPlay);
      this.autoPlay = undefined;
    }
    if (this.onMove) {
      if (!(Math.abs(diffX) > Math.abs(diffY))) {
        // prevent swiping up and down moves the carousel.
        return;
      }
      const {
        direction,
        nextPosition,
        canContinue
      } = populateSlidesOnMouseTouchMove(
        this.state,
        this.props,
        this.initialX,
        this.lastX,
        clientX
      );
      if (direction) {
        this.direction = direction;
        if (canContinue && nextPosition !== undefined) {
          // nextPosition can be 0;
          this.setState({ transform: nextPosition });
        }
      }
      this.lastX = clientX;
    }
  }
  handleOut(e) {
    if (this.props.autoPlay && !this.autoPlay) {
      this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed);
    }
    const shouldDisableOnMobile =
      e.type === "touchend" && !this.props.swipeable;
    const shouldDisableOnDesktop =
      (e.type === "mouseleave" || e.type === "mouseup") &&
      !this.props.draggable;
    if (shouldDisableOnMobile || shouldDisableOnDesktop) {
      return;
    }
    if (this.onMove) {
      if (this.direction === "right") {
        const canGoNext =
          this.initialX - this.lastX >= this.props.minimumTouchDrag;
        if (canGoNext) {
          const slidesHavePassed = Math.round(
            (this.initialX - this.lastX) / this.state.itemWidth
          );
          this.next(slidesHavePassed);
        } else {
          this.correctItemsPosition(this.state.itemWidth, true);
        }
      }
      if (this.direction === "left") {
        const canGoNext =
          this.lastX - this.initialX > this.props.minimumTouchDrag;
        if (canGoNext) {
          const slidesHavePassed = Math.round(
            (this.lastX - this.initialX) / this.state.itemWidth
          );
          this.previous(slidesHavePassed);
        } else {
          this.correctItemsPosition(this.state.itemWidth, true);
        }
      }
      this.resetMoveStatus();
    }
  }
  onKeyUp(e) {
    switch (e.keyCode) {
      case 37:
        return this.previous();
      case 39:
        return this.next();
    }
  }
  handleEnter() {
    if (this.autoPlay && this.props.autoPlay) {
      clearInterval(this.autoPlay);
      this.autoPlay = undefined;
    }
  }
  goToSlide(slide) {
    if (this.isInThrottle) {
      return;
    }
    const { itemWidth } = this.state;
    const { afterChange, beforeChange } = this.props;
    const previousSlide = this.state.currentSlide;
    if (typeof beforeChange === "function") {
      beforeChange(slide, this.getState());
    }
    this.isAnimationAllowed = true;
    this.setState(
      {
        currentSlide: slide,
        transform: -(itemWidth * slide)
      },
      () => {
        if (this.props.infinite) {
          this.correctClonesPosition({ domLoaded: true });
        }
        if (typeof afterChange === "function") {
          setTimeout(() => {
            afterChange(previousSlide, this.getState());
          }, this.props.transitionDuration || defaultTransitionDuration);
        }
      }
    );
  }
  getState() {
    return {
      ...this.state,
      onMove: this.onMove,
      direction: this.direction
    };
  }
  next(slidesHavePassed = 0) {
    const { afterChange, beforeChange } = this.props;
    if (notEnoughChildren(this.state, this.props)) {
      return;
    }
    /*
    two cases:
    1. We are not over-sliding.
    2. We are sliding over to what we have, that means nextslides > this.props.children.length. (does not apply to the inifnite mode)
    */
    const { nextSlides, nextPosition } = populateNextSlides(
      this.state,
      this.props,
      slidesHavePassed
    );
    const previousSlide = this.state.currentSlide;
    if (nextSlides === undefined || nextPosition === undefined) {
      // they can be 0.
      return;
    }
    if (typeof beforeChange === "function") {
      beforeChange(nextSlides, this.getState());
    }
    this.isAnimationAllowed = true;
    this.setState(
      {
        transform: nextPosition,
        currentSlide: nextSlides
      },
      () => {
        if (typeof afterChange === "function") {
          setTimeout(() => {
            afterChange(previousSlide, this.getState());
          }, this.props.transitionDuration || defaultTransitionDuration);
        }
      }
    );
  }
  previous(slidesHavePassed = 0) {
    const { afterChange, beforeChange } = this.props;
    if (notEnoughChildren(this.state, this.props)) {
      return;
    }
    const { nextSlides, nextPosition } = populatePreviousSlides(
      this.state,
      this.props,
      slidesHavePassed
    );
    if (nextSlides === undefined || nextPosition === undefined) {
      // they can be 0, which goes back to the first slide.
      return;
    }
    const previousSlide = this.state.currentSlide;
    if (typeof beforeChange === "function") {
      beforeChange(nextSlides, this.getState());
    }
    this.isAnimationAllowed = true;
    this.setState(
      {
        transform: nextPosition,
        currentSlide: nextSlides
      },
      () => {
        if (typeof afterChange === "function") {
          setTimeout(() => {
            afterChange(previousSlide, this.getState());
          }, this.props.transitionDuration || defaultTransitionDuration);
        }
      }
    );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    if (this.props.keyBoardControl) {
      window.removeEventListener("keyup", this.onKeyUp);
    }
    if (this.props.autoPlay && this.autoPlay) {
      clearInterval(this.autoPlay);
      this.autoPlay = undefined;
    }
  }
  renderCarouselItems() {
    let clones = [];
    if (this.props.infinite) {
      const childrenArr = React.Children.toArray(this.props.children);
      clones = getClones(this.state.slidesToShow, childrenArr);
    }
    return (
      <CarouselItems
        clones={clones}
        goToSlide={this.goToSlide}
        state={this.state}
        props={this.props}
      />
    );
  }
  renderLeftArrow() {
    const { customLeftArrow } = this.props;
    return (
      <LeftArrow
        customLeftArrow={customLeftArrow}
        getState={() => this.getState()}
        previous={this.previous}
      />
    );
  }
  renderRightArrow() {
    const { customRightArrow } = this.props;
    return (
      <RightArrow
        customRightArrow={customRightArrow}
        getState={() => this.getState()}
        next={this.next}
      />
    );
  }

  render() {
    const {
      deviceType,
      arrows,
      removeArrowOnDeviceType,
      infinite,
      containerClass,
      sliderClass,
      customTransition,
      partialVisbile,
      centerMode,
      additionalTransfrom,
      renderDotsOutside,
      className
    } = this.props;
    const {
      shouldRenderOnSSR,
      paritialVisibilityGutter,
      shouldRenderAtAll
    } = getInitialState(this.state, this.props);
    const isLeftEndReach = isInLeftEnd(this.state);
    const isRightEndReach = isInRightEnd(this.state);
    const shouldShowArrows =
      arrows &&
      !(
        removeArrowOnDeviceType &&
        ((deviceType && removeArrowOnDeviceType.indexOf(deviceType) > -1) ||
          (this.state.deviceType &&
            removeArrowOnDeviceType.indexOf(this.state.deviceType) > -1))
      ) &&
      !notEnoughChildren(this.state, this.props) &&
      shouldRenderAtAll;
    const disableLeftArrow = !infinite && isLeftEndReach;
    const disableRightArrow = !infinite && isRightEndReach;
    // this lib supports showing next set of items paritially as well as center mode which shows both.
    const currentTransform = partialVisbile
      ? getTransformForPartialVsibile(
          this.state,
          paritialVisibilityGutter,
          this.props
        )
      : centerMode
      ? getTransformForCenterMode(this.state, this.props)
      : this.state.transform;

    return (
      <>
        <div
          className={`react-multi-carousel-list ${containerClass} ${className}`}
          ref={this.containerRef}
        >
          <ul
            className={`react-multi-carousel-track ${sliderClass}`}
            style={{
              transition: this.isAnimationAllowed
                ? customTransition || defaultTransition
                : "none",
              overflow: shouldRenderOnSSR ? "hidden" : "unset",
              transform: `translate3d(${currentTransform +
                additionalTransfrom}px,0,0)`
            }}
            onMouseMove={this.handleMove}
            onMouseDown={this.handleDown}
            onMouseUp={this.handleOut}
            onMouseEnter={this.handleEnter}
            onMouseLeave={this.handleOut}
            onTouchStart={this.handleDown}
            onTouchMove={this.handleMove}
            onTouchEnd={this.handleOut}
          >
            {this.renderCarouselItems()}
          </ul>
          {shouldShowArrows && !disableLeftArrow && this.renderLeftArrow()}
          {this.renderRightArrow()}
        </div>
        <style jsx>{`
          @font-face {
            font-family: "revicons";
            fallback: fallback;
            src: url("./revicons.woff") format("woff"),
              url("./revicons.ttf") format("ttf"),
              url("./revicons.eot") format("ttf");
          }
          .react-multi-carousel-list {
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            border: solid 2px yellow;
            margin: 0 150px 0 150px;
          }
          .react-multi-carousel-track {
            list-style: none;
            padding: 20px 0 0 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            position: relative;
            transform-style: preserve-3d;
            backface-visibility: hidden;
            will-change: transform, transition;
          }
          .react-multiple-carousel__arrow {
            position: absolute;
            outline: none;
            transition: all 0.5s;
            border-radius: 35px;
            z-index: 1000;
            border: none;
            background: rgba(0, 0, 0, 0.5);
            min-width: 43px;
            min-height: 43px;
            opacity: 1;
            cursor: pointer;
          }
          .react-multiple-carousel__arrow:hover {
            background: rgba(0, 0, 0, 0.8);
          }
          .react-multiple-carousel__arrow::before {
            font-size: 20px;
            color: #fff;
            display: block;
            font-family: revicons;
            text-align: center;
            z-index: 2;
            position: relative;
          }

          .react-multiple-carousel__arrow--left {
            left: calc(4% + 1px);
          }
          .react-multiple-carousel__arrow--left::before {
            content: "\e824";
          }
          .react-multiple-carousel__arrow--right {
            right: calc(4% + 1px);
          }
          .react-multiple-carousel__arrow--right::before {
            content: "\e825";
          }

          .react-multi-carousel-dot-list {
            position: absolute;
            bottom: 0;
            display: flex;
            left: 0;
            right: 0;
            justify-content: center;
            margin: auto;
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
          }
          .react-multi-carousel-dot button {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            opacity: 1;
            padding: 5px 5px 5px 5px;
            box-shadow: none;
            transition: background 0.5s;
            border-width: 2px;
            border-style: solid;
            border-color: grey;
            padding: 0;
            margin: 0;
            margin-right: 6px;
            outline: 0;
            cursor: pointer;
          }
          .react-multi-carousel-dot button:hover {
            background: #080808;
          }
          .react-multi-carousel-dot--active button {
            background: #080808;
          }
          .react-multi-carousel-item {
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }
          @media all and (-ms-high-contrast: none),
            (-ms-high-contrast: active) {
            .react-multi-carousel-item {
              flex-shrink: 0 !important;
            }
            .react-multi-carousel-track {
              overflow: visible !important;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Carousel;
