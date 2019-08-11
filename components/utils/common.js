import * as React from "react";
import {
  getParitialVisibilityGutter,
  getWidthFromDeviceType
} from "./elementWidth";

function getInitialState(state, props) {
  const { domLoaded, slidesToShow, containerWidth, itemWidth } = state;
  const { deviceType, responsive, ssr, partialVisbile } = props;
  let flexBisis;
  const domFullyLoaded = Boolean(
    domLoaded && slidesToShow && containerWidth && itemWidth
  );
  if (ssr && deviceType && !domFullyLoaded) {
    flexBisis = getWidthFromDeviceType(deviceType, responsive);
  }
  const shouldRenderOnSSR = Boolean(
    ssr && deviceType && !domFullyLoaded && flexBisis
  );
  const paritialVisibilityGutter = getParitialVisibilityGutter(
    responsive,
    partialVisbile,
    deviceType,
    state.deviceType
  );
  const shouldRenderAtAll = shouldRenderOnSSR || domFullyLoaded;
  return {
    shouldRenderOnSSR,
    flexBisis,
    domFullyLoaded,
    paritialVisibilityGutter,
    shouldRenderAtAll
  };
}

function getIfSlideIsVisbile(index, state) {
  const { currentSlide, slidesToShow } = state;
  return index >= currentSlide && index < currentSlide + slidesToShow;
}

function getTransformForCenterMode(state, props) {
  if (state.currentSlide === 0 && !props.infinite) {
    return state.transform;
  } else {
    return state.transform + state.itemWidth / 2;
  }
}
function getTransformForPartialVsibile(
  state,
  paritialVisibilityGutter = 0,
  props
) {
  const { currentSlide, slidesToShow } = state;
  const isRightEndReach = isInRightEnd(state);
  const shouldRemoveRightGutter = !props.infinite && isRightEndReach;
  const transform = state.transform + currentSlide * paritialVisibilityGutter;
  if (shouldRemoveRightGutter) {
    const remainingWidth =
      state.containerWidth -
      (state.itemWidth - paritialVisibilityGutter) * slidesToShow;
    return transform + remainingWidth;
  }
  return transform;
}

function isInLeftEnd({ currentSlide }) {
  return !(currentSlide > 0);
}
function isInRightEnd({ currentSlide, totalItems, slidesToShow }) {
  return !(currentSlide + slidesToShow < totalItems);
}

function notEnoughChildren(state, props, items) {
  const childrenArr = React.Children.toArray(props.children);
  const { slidesToShow } = state;
  return items ? childrenArr.length < items : childrenArr.length < slidesToShow;
}

function getSlidesToSlide(state, props) {
  const { domLoaded, slidesToShow, containerWidth, itemWidth } = state;
  const { deviceType, responsive } = props;
  let slidesToScroll = props.slidesToSlide || 1;
  const domFullyLoaded = Boolean(
    domLoaded && slidesToShow && containerWidth && itemWidth
  );
  const ssr = props.ssr && props.deviceType && !domFullyLoaded;
  if (ssr) {
    Object.keys(responsive).forEach(device => {
      const { slidesToSlide } = responsive[device];
      if (deviceType === device && slidesToSlide) {
        slidesToScroll = slidesToSlide;
      }
    });
  }
  if (domFullyLoaded) {
    Object.keys(responsive).forEach(item => {
      const { breakpoint, slidesToSlide } = responsive[item];
      const { max, min } = breakpoint;
      if (
        slidesToSlide &&
        window.innerWidth >= min &&
        window.innerWidth <= max
      ) {
        slidesToScroll = slidesToSlide;
      }
    });
  }
  return slidesToScroll;
}

export {
  isInLeftEnd,
  isInRightEnd,
  getInitialState,
  getIfSlideIsVisbile,
  getTransformForCenterMode,
  getTransformForPartialVsibile,
  notEnoughChildren,
  getSlidesToSlide
};
