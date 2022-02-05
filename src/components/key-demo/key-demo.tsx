import React from "react";
import RickAndMorty from "./rick-and-morty";
import Tree from "./tree";
const randomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.random();
    const bit = (random * 16) | 0;
    color += bit.toString(16);
  }
  return color;
};

export default function KeyDemo() {
  const [color, setColor] = React.useState(randomColor());
  const [key, setKey] = React.useState(1);

  const renderRef = React.useRef(1);
  const renderRefChild = React.useRef(1);
  const renderRefDeepChild = React.useRef(1);

  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  const clickRenderTrackerBump = () => {
    setColor(randomColor());
    renderRefChild.current = renderRefChild.current + 1;
    renderRefDeepChild.current = renderRefDeepChild.current + 1;
  };

  const clickRenderTrackerReset = () => {
    setKey(key + 1);
    renderRefChild.current = 1;
    renderRefDeepChild.current = 1;
  };

  return (
    <div className="demo-key-container">
      <h1 className="title">Key Change Example</h1>

      <div className="button-container">
        <button className="container-button" onClick={clickRenderTrackerBump}>
          Update Element Attribute
        </button>

        <button className="container-button" onClick={clickRenderTrackerReset}>
          Change Element
        </button>
        <h2> {`render count Root: ${renderRef.current}`}</h2>
      </div>
      <RickAndMorty color={color} rootState={renderRef.current} key={key} />
    </div>
  );
}
