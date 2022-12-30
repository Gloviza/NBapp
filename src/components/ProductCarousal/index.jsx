import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./styles.css";

const ProductCarousal = ({ carousalData }) => {
  return (
    <>
      <div className="background">
        <div>
          <Carousel
            prevLabel={""}
            nextLabel={""}
            interval={null}
            wrap={false}
            touch={false}
          >
            {carousalData.map(({ imgPath, alternateName, id }) => {
              return (
                <Carousel.Item>
                  <img
                    className="carousal-image"
                    src={imgPath}
                    alt={alternateName}
                    key={id}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ProductCarousal;
