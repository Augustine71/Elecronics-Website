import React, { useState } from "react";

export const ExampleComponent = () => {
  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };

  const divHeight = showFull ? "auto" : "200px"; // Change the height value as per your requirement

  return (
    <>
      <div style={{ height: divHeight, overflow: "hidden" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          gravida sapien ut nulla tincidunt, id hendrerit purus pulvinar. Etiam
          nec diam velit. Etiam venenatis erat augue, eget accumsan enim
          tincidunt in. Donec fermentum turpis a elit euismod, at consectetur
          nisi maximus. Nullam vel ligula eu dolor vestibulum elementum. Sed ac
          malesuada magna. Proin non nisi nisl. Vivamus quis leo nec arcu
          laoreet eleifend. Suspendisse in massa ac ipsum tristique ultrices.
          Vestibulum bibendum lorem vel lobortis consectetur.
        </p>
      </div>
      {!showFull && <button onClick={toggleShowFull}>Show More</button>}
    </>
  );
};
