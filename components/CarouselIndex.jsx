import React, { Component } from "react";
import Carousel from "./Carousel";
import Image from "./Image";
class CarouselIndex extends Component {
  render() {
    const images = [
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ];
    const texts = [
      "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
      "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
      "React Carousel with Server Side Rendering Support – Part 1",
      "React Carousel with Server Side Rendering Support – Part 2",
      "Flutter Xcode couldn’t find any iOS App Development provisioning profiles"
    ];
    const fakerData = Array(images.length)
      .fill(0)
      .map((item, index) => {
        return {
          image: images[index],
          headline: "w3js -> web front-end studio",
          description: texts[index] || texts[0]
        };
      });
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
        slidesToSlide: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        slidesToSlide: 1
      }
    };
    return (
      <>
        <Carousel
          /*
        swipeable={false}
        draggable={false}
        */
          responsive={responsive}
          ssr
          infinite={false}
          beforeChange={() => this.setState({ isMoving: true })}
          afterChange={() => this.setState({ isMoving: false })}
          containerClass="first-carousel-container container"
          deviceType={this.props.deviceType}
        >
          {fakerData.slice(0, 9).map((card, index) => {
            return <Image url={card.image} alt={card.headline} key={index} />;
          })}
        </Carousel>
        <style jsx>{`
          .image-item {
            padding: 10px;
          }
          .container {
            margin-top: 20px;
          }
          .container-with-dots {
            margin-top: 20px;
            padding-bottom: 10px;
          }
          .react-multi-carousel-dot-list {
            bottom: 0px !important;
          }
          #__next {
            overflow: scroll;
            margin-bottom: 40px;
          }
          .react-multi-carousel-dot button {
            border-color: grey !important;
          }

          a {
            color: inherit;
            text-decoration: none;
          }
          .first-carousel-container {
            margin-bottom: 50px;
          }
        `}</style>
      </>
    );
  }
}

export default CarouselIndex;
