import { useState, useRef, useEffect } from "react";

export const useSlideWidth = () => {
  const [slideWidth, setSlideWidth] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const slideRef = useRef(null);
  useEffect(() => {
    setSlideWidth(slideRef.current.offsetWidth);
    setSlideCount(slideRef.current.childElementCount);
  }, []);

  const [totalWidth, setTotalWidth] = useState(0);
  useEffect(() => {
    setTotalWidth(slideWidth * slideCount);
  }, [slideWidth, slideCount]);

  const slickTrackStyle = { width: totalWidth };
  console.log(slickTrackStyle);
  return { slickTrackStyle, slideRef };
};
