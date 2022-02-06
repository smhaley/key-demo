import React from "react";
import { ListInstructions } from "./instructions";

export default function ListDemo() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  const [list, setList] = React.useState([{ label: "a" }]);
  const [counter, setCounter] = React.useState(0);

  const handleRemove = () => {
    const count = counter - 1;
    if (count >= 0) {
      const listCopy = [...list];
      listCopy.shift();
      setList(listCopy);
      setCounter(count);
    }
  };

  const handleAdd = () => {
    const count = counter + 1;
    if (count < 26) {
      setList([{ label: letters[count] }, ...list]);
      setCounter(count);
    }
  };

  return (
    <div className="list-demo-container">
      <h1 className="title">List Example</h1>
      <ListInstructions />
      <div className="button-container">
        <button className="container-button" onClick={handleRemove}>
          Remove Item
        </button>
        <button className="container-button" onClick={handleAdd}>
          Add Item
        </button>
      </div>
      <div className="demo-container">
        <div className="list-container">
          <h3>Keyed off Index</h3>
          {list.map((item, index) => (
            <div className="list-item" key={index}>
              <span className="key-item">
                key: <b>{index}</b>
              </span>
              <label className="list-label">
                label: <b>{item.label}</b>
              </label>
              <input type="checkbox" />
            </div>
          ))}
        </div>
        <div className="list-container">
          <h3>Keyed off Unique Value</h3>
          {list.map((item) => (
            <div className="list-item" key={item.label}>
              <span className="key-item">
                key: <b>{item.label}</b>
              </span>
              <label className="list-label">
                label: <b>{item.label}</b>
              </label>
              <input type="checkbox" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
