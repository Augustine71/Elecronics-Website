import { useState, useRef } from "react";

export const PdpOverview = (props) => {
  const [showFull, setShowFull] = useState(false);
  const myDivRef = useRef(null);

  const toggleShowFull = () => {
    setShowFull(!showFull);
    if (showFull) {
      const element = myDivRef.current;
      const offset = element.offsetTop - 150;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="pdp__main-section" ref={myDivRef}>
        <div className="pdp__overview-main-header">Product Overview</div>
        <div className="pdp__overview-header">{props.data.heading}</div>
        <ul className="pdp__section">
          {props.data.features.map((data) => (
            <li>{data}</li>
          ))}
        </ul>
        <div
          className="pdp__overview-sub-features"
          style={{ height: showFull ? "auto" : "0px", overflow: "hidden" }}
        >
          {props.data.sub_features.map((data) => (
            <div>{data}</div>
          ))}
        </div>
      </div>
      <div onClick={toggleShowFull} className="pdp__overview-show-btn">
        {!showFull ? "Show More" : "Show Less"}
      </div>
    </>
  );
};
