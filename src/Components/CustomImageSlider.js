import React, { useState, useRef, useEffect } from "react";

export const CustomImageSlider = (props) => {
  const [mainImage, setMainImage] = useState(props.imgs[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(mainImage);

  const columnRef = useRef(null);

  const handleChildClick = (event, index) => {
    const child = event.target;
    const column = columnRef.current;
    const childOffset = child.offsetTop - 247;
    console.log(childOffset);
    column.scrollTop = childOffset;

    const myData = event.target.dataset.img;
    setMainImage(JSON.parse(myData));
    setActiveIndex(index);
  };

  useEffect(() => {
    setMainImage(props.imgs[0]);
    setActiveIndex(0);
  }, [props.imgs]);

  return (
    <div className="custom__image-gallery">
      <div className="custom__image-thumbnails" ref={columnRef}>
        {props.imgs.map((curElm, index) => {
          return (
            <img
              src={curElm.img}
              key={index}
              alt={curElm.alt}
              onClick={(event) => handleChildClick(event, index)}
              data-img={JSON.stringify(curElm)}
              className={`custom__image ${
                activeIndex === index ? "active" : ""
              }`}
              loading="lazy"
            />
          );
        })}
      </div>
      <div className="custom__images">
        <img src={mainImage.img} alt={props.imgs[0].alt} loading="lazy" />
      </div>
    </div>
  );
};
