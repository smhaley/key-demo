import React from "react";
import RickAndMorty from "./rick-and-morty";

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
  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  return (
    <>
      <h1 className="title">Key Change Example</h1>
      <div className="button-container">
        <button
          className="container-button"
          onClick={() => setColor(randomColor())}
        >
          Update Element Attribute
        </button>

        <button className="container-button" onClick={() => setKey(key + 1)}>
          Change Element
        </button>
        <h2> {`render count Root: ${renderRef.current}`}</h2>
      </div>
      <RickAndMorty color={color} key={key} />
    </>
  );
}
