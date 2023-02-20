import React, { useState, useRef, useEffect } from "react";

export const CustomImageSlider = () => {
  const imgs = [
    {
      id: 1,
      imge: "https://ik.manmatters.com/media/misc/pdp/26166752/90s-Gummies--with-Ingredients-_600X600__Z3FZJ8Cj8c.png?tr=w-600",
      alt: "hello",
    },
    {
      id: 2,
      imge: "https://ik.manmatters.com/media/misc/pdp_rcl/26166752/3_S0qNg2yE0.png?tr=w-600",
      alt: "hello",
    },
    {
      id: 3,
      imge: "https://ik.manmatters.com/media/misc/pdp/26166752/90s-Gummies--with-Ingredients-_600X600__Z3FZJ8Cj8c.png?tr=w-600",
      alt: "hello",
    },
    {
      id: 4,
      imge: "https://ik.manmatters.com/mosaic-wellness/image/upload/v1656056228/Man%20Matters/Hair%20Gummies/ViewAllImages30/Image-4-_1200X1200.jpg",
      alt: "hello",
    },
    {
      id: 5,
      imge: "https://ik.manmatters.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1613025965/Man%20Matters/Proven%20results/Hair-gummy-edits-_1.jpg",
      alt: "hello",
    },
  ];

  const [mainImage, setMainImage] = useState(imgs[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const columnRef = useRef(null);

  const handleChildClick = (event, index) => {
    const child = event.target;
    const column = columnRef.current;
    const childOffset = child.offsetTop;
    column.scrollTop = childOffset;

    const myData = event.target.dataset.img;
    setMainImage(JSON.parse(myData));
    console.log(index);
    setActiveIndex(index);
  };

  return (
    <div className="custom__image-gallery">
      <div className="custom__image-thumbnails" ref={columnRef}>
        {imgs.map((curElm, index) => {
          return (
            <img
              src={curElm.imge}
              key={index}
              alt={curElm.alt}
              onClick={(event) => handleChildClick(event, index)}
              data-img={JSON.stringify(curElm)}
              className={`custom__image ${
                activeIndex === index ? "active" : ""
              }`}
            />
          );
        })}
      </div>
      <div className="custom__images">
        <img src={mainImage.imge} alt={imgs[0].alt} />
      </div>
    </div>
  );
};
