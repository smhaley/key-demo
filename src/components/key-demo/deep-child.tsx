import React from "react";
import { Character } from "./child";

interface DeepChildProps {
  character: Character;
}
const DeepChild: React.FC<DeepChildProps> = ({ character }) => {
  const renderRef = React.useRef(1);
  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  return (
    <div className="card-container">
      <h3> {`render count Deep Child: ${renderRef.current}`}</h3>
      <div className="spacer">
        <b>DeepChild Props: </b>
        {JSON.stringify({ character: character.id })}
      </div>
      <h3>{character.name}</h3>
        <img className="card-img" src={character.image} alt="rm"></img>
    </div>
  );
};

export default DeepChild;
