import React from "react";
import { Character } from "./rick-and-morty";

interface CardProps {
  character: Character;
}
const Card: React.FC<CardProps> = ({ character }) => {
  const renderRef = React.useRef(1);
  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  return (
    <div className="card-container">
        <h2> {`render count Deep Child: ${renderRef.current}`}</h2>
      <h2>{character.name}</h2>
      <img src={character.image} alt="rm"></img>
    </div>
  );
};

export default Card;
