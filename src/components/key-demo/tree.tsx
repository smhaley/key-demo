import React from "react";

interface TreeProps {
  root: number;
  child: number;
  deepChild: number;
}

const Tree: React.FC<TreeProps> = ({ root, child, deepChild }) => {
  const renderRef = React.useRef(1);
  const handleState = (count: number) => {
    if (count === 1) {
      return "mount";
    } else {
      return "rerender";
    }
  };

  const handleBackground = (count: number) => {
    if (count === 1) {
      return "lightgreen";
    } else {
      return "yellow";
    }
  };

  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  return (
    <div className="diagram-root">
      <div className="circle" style={{ background: handleBackground(root) }}>
        Root <b>{handleState(root)}</b>
      </div>
      <div>
        <div className="line" />
      </div>
      <div className="diagram-container">
        <div className="circle" style={{ background: handleBackground(child) }}>
          Child <b>{handleState(child)}</b>
        </div>
        <div className="line diag-line-right" />
        <div className="line diag-line-left"/>
        <div
          className="circle left-circle"
          style={{
            background: handleBackground(deepChild),
          }}
        >
          Deep Child <b>{handleState(deepChild)}</b>
        </div>
        <div
          className="circle right-circle"
          style={{
            background: handleBackground(deepChild),
          }}
        >
          This Diagram <b>{handleState(renderRef.current)}</b>
        </div>
      </div>
    </div>
  );
};

export default Tree;
