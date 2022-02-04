import React from "react";

export default function ListDemo() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  const [list, setList] = React.useState([{ label: "b" }, { label: "a" }]);
  const [counter, setCounter] = React.useState(1);

  const handleRemove = () => {
    const count = counter - 1;
    if (count > 0) {
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
      <div className="demo-container">
        <div className="list-container">
          <h3>Keyed off Index</h3>
          {list.map((item, index) => (
            <div className="list-item" key={index}>
              {`id: ${index}`}
              <label className="list-label">{`label: ${item.label} `}</label>
              <input type="checkbox" />
            </div>
          ))}
        </div>
        <div className="list-container">
          <h3>Keyed off Unique Value</h3>
          {list.map((item) => (
            <div className="list-item" key={item.label}>
              {`id: ${item.label}`}
              <label className="list-label">{`label: ${item.label} `}</label>
              <input type="checkbox" />
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="container-button" onClick={handleRemove}>
            remove item
          </button>
          <button className="container-button" onClick={handleAdd}>
            add item
          </button>
        </div>
      </div>
    </div>
  );
}
