import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./styles.css";

const ProductCarousal = ({ carousalData }) => {
  const [currIndex, setCurrIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setCurrIndex(selectedIndex);
  };

  useEffect(() => {
    setCurrIndex(0);
  }, [carousalData]);

  return (
    <>
      <div className="background">
        <div>
          <Carousel
            activeIndex={currIndex}
            prevLabel={""}
            nextLabel={""}
            interval={null}
            wrap={false}
            touch={false}
            onSelect={handleSelect}
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
