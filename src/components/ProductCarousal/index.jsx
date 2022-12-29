import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./styles.css";

const ProductCarousal = () => {
  return (
    <>
      <div id="GYN" className="background">
        <div>
          <Carousel
            prevLabel={""}
            nextLabel={""}
            interval={null}
            wrap={false}
            touch={false}
          >
            <Carousel.Item>
              <img className="carousal-image" src="p1.jpg" alt="Walart GYN" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousal-image" src="p1.jpg" alt="Walart GYN" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousal-image" src="p1.jpg" alt="Walart GYN" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousal-image" src="p1.jpg" alt="Walart GYN" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousal-image" src="p1.jpg" alt="Walart GYN" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ProductCarousal;
