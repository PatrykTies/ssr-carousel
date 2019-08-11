import * as React from "react";

import { getInitialState, getIfSlideIsVisbile } from "./utils";

const CarouselItems = ({ props, state, goToSlide, clones }) => {
  const { itemWidth } = state;
  const { children, infinite, itemClass, partialVisbile } = props;
  const {
    flexBisis,
    shouldRenderOnSSR,
    domFullyLoaded,
    paritialVisibilityGutter,
    shouldRenderAtAll
  } = getInitialState(state, props);
  if (!shouldRenderAtAll) {
    return null;
  }
  return (
    <>
      {(infinite ? clones : React.Children.toArray(children)).map(
        (child, index) => {
          console.log(child, index);
          return (
            <li
              key={index}
              data-index={index}
              onClick={() => {
                if (props.focusOnSelect) {
                  goToSlide(index);
                }
              }}
              aria-hidden={getIfSlideIsVisbile(index, state) ? "false" : "true"}
              style={{
                flex: shouldRenderOnSSR ? `1 0 ${flexBisis}%` : "auto",
                position: "relative",
                width: domFullyLoaded
                  ? `${
                      partialVisbile && paritialVisibilityGutter
                        ? itemWidth - paritialVisibilityGutter
                        : itemWidth
                    }px`
                  : "auto"
              }}
              className={`react-multi-carousel-item ${
                getIfSlideIsVisbile(index, state)
                  ? "react-multi-carousel-item--active"
                  : ""
              } ${itemClass}`}
            >
              {child}
              <style jsx>{`
                .react-multi-carousel-item--active {
                  height: 400px;
                  transform: scaleY(1);
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
            </li>
          );
        }
      )}
    </>
  );
};

export default CarouselItems;
