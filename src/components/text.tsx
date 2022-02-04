import React from "react";
import { Content } from "../content";

const Text: React.FC<{ title: string; content: Content[] }> = ({
  title,
  content,
}) => {
  const renderList = (contentList: Content[]) => {
    return (
      <ul>
        {contentList.map((item) => (
          <li key={item.text}>
            <div>
              <p className = 'text-content'>{item.text}</p>
              {item.img && (
                <img className="demo-img" src={item.img} alt="v dom" />
              )}
              {item.subContent && renderList(item.subContent)}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="text-container">
      <h1 className="title">{title}</h1>
      {renderList(content)}
    </div>
  );
};

export default Text;
