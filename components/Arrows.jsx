import * as React from "react";

const LeftArrow = ({ customLeftArrow, getState, previous }) => {
  if (customLeftArrow) {
    return React.cloneElement(customLeftArrow, {
      onClick: () => previous(),
      carouselState: getState()
    });
  }
  return (
    <button
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
      onClick={() => previous()}
    >
      <style jsx>{`
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
          content: "<";
        }
        .react-multiple-carousel__arrow--right {
          right: calc(4% + 1px);
        }
        .react-multiple-carousel__arrow--right::before {
          content: ">";
          left: 10px;
        }
      `}</style>
    </button>
  );
};
const RightArrow = ({ customRightArrow, next, getState }) => {
  if (customRightArrow) {
    return React.cloneElement(customRightArrow, {
      onClick: () => next(),
      carouselState: getState()
    });
  }
  return (
    <button
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
      onClick={() => next()}
    >
      <style jsx>{`
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
          content: "<";
        }
        .react-multiple-carousel__arrow--right {
          right: calc(4% + 1px);
        }
        .react-multiple-carousel__arrow--right::before {
          content: ">";
          left: 10px;
        }
      `}</style>
    </button>
  );
};

export { LeftArrow, RightArrow };
