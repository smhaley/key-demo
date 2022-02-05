import React from "react";

interface TreeProps {
  root: number;
  child: number;
  deepChild: number;
}

const Tree: React.FC<TreeProps> = ({ root, child, deepChild }) => {
  const renderRef = React.useRef(1);
  const handleState = (count: number) => {
    if (count <= 1) {
      return "mount";
    } else {
      return "rerender";
    }
  };

  const handleBackground = (count: number) => {
    if (count <= 1) {
      return "lightgreen";
    } else {
      return "yellow";
    }
  };

  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  return (
    <div style = {{paddingLeft: 30}}>
      <div style={{ margin: "0 auto", width: "150px" }}>
        <div className="circle" style={{ background: handleBackground(root) }}>
          Root <b>{handleState(root)}</b>
        </div>
        <div>
          <div className="line" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            className="circle"
            style={{ background: handleBackground(child) }}
          >
            Child <b>{handleState(child)}</b>
          </div>
          <div className="diag-line" style={{ position: "absolute" }} />
          <div className="diag-line-left" style={{ position: "absolute" }} />
          <div
            className="circle"
            style={{
              position: "relative",
              background: handleBackground(deepChild),
              top: 50,
              left: -80,
            }}
          >
            Deep Child <b>{handleState(deepChild)}</b>
          </div>
          <div
            className="circle"
            style={{
              position: "relative",
              background: handleBackground(deepChild),
              top: -55,
              left: 80,
            }}
          >
            This Diagram <b>{handleState(renderRef.current - 1)}</b>
          </div>
          <div
            style={{
              position: "relative",
              top: -45,
              left: -80,
              width: 320,
              fontWeight: "bold",
            }}
          >
            Note the contrived definition of 'mount'
          </div>
        </div>
      </div>
   </div>
  );
};

export default Tree;
