import React from "react";
import DeepChild from "./deep-child";
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

interface ChildProps {
  color: string;
  rootState: number;
}

const Child: React.FC<ChildProps> = ({ color, rootState }) => {
  const keys = Array.from({ length: 4 }, (_, i) => i + 1);

  const [cache, setCache] = React.useState<Cache>(initCache);
  const [page, setPage] = React.useState(1);

  const renderRef = React.useRef(1);

  const getRM = async (key: number) => {
    if (!Object.keys(cache).includes(key.toString())) {
      let out: Character;
      try {
        const resp = await fetch(
          `https://rickandmortyapi.com/api/character/${key}`
        );
        if (!resp.ok) throw new Error("server");
        out = await resp.json();
      } catch (e) {
        out = { ...initCache[1], name: "Server Error Rick" };
      }
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
      <div className="spacer">
        {keys.map((item) => (
          <button
            disabled={item === page}
            key={item}
            className="paginate-button"
            onClick={() => handlePaginate(item)}
          >{`page ${item}`}</button>
        ))}
      </div>
      <div className="spacer">
        <b>Child State Cache: </b>
        {JSON.stringify(Object.values(cache).map((value) => value.name))}
      </div>
      <div className="spacer">
        <b>Child Props: </b>
        {JSON.stringify({ color: color })}
      </div>
      <div className="demo-container">
        <div>{cache[1] && <DeepChild character={cache[page]} />}</div>

        <Tree
          child={renderRef.current}
          deepChild={renderRef.current}
          root={rootState}
        />
      </div>
    </div>
  );
};

export default Child;
