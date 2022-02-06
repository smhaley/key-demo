import React from "react";
import Card from "./card";
import Tree from "./tree";
import { cache as initCache } from "../../cache";

type Base = {
  name: string;
  url: string;
};

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Base;
  location: Base;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Cache {
  [key: number]: Character;
}

interface RickAndMortyProps {
  color: string;
  rootState: number;
}

const RickAndMorty: React.FC<RickAndMortyProps> = ({ color, rootState }) => {
  const keys = Array.from({ length: 4 }, (_, i) => i + 1);

  const [cache, setCache] = React.useState<Cache>(initCache);
  const [page, setPage] = React.useState(1);

  const renderRef = React.useRef(1);

  const getRM = async (key: number) => {
    if (!Object.keys(cache).includes(key.toString())) {
      const resp = await fetch(
        `https://rickandmortyapi.com/api/character/${key}`
      );
      const out: Character = await resp.json();
      setCache({ ...cache, [key]: out });
    }
  };

  const handlePaginate = async (key: number) => {
    await getRM(key);
    setPage(key);
  };

  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  return (
    <div className="demo rm" style={{ background: color }}>
      <h2> {`render count Child: ${renderRef.current}`}</h2>
      <div className="paginate-container">
        {keys.map((item) => (
          <button
            disabled = {item===page}
            key={item}
            className="paginate-button"
            onClick={() => handlePaginate(item)}
          >{`page ${item}`}</button>
        ))}
      </div>
      <div className="demo-container">
        <div>{cache[1] && <Card character={cache[page]} />}</div>

        <Tree
          child={renderRef.current}
          deepChild={renderRef.current}
          root={rootState}
        />
      </div>
      <div>
        <b>Cache: </b>
        {JSON.stringify(Object.values(cache).map((value) => value.name))}
      </div>
    </div>
  );
};

export default RickAndMorty;
