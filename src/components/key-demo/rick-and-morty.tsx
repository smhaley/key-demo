import React from "react";
import Card from "./card";

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

interface Cache {
  [key: number]: Character;
}

const RickAndMorty: React.FC<{ color: string }> = ({ color }) => {
  const keys = Array.from({ length: 10 }, (_, i) => i + 1);

  const [cache, setCache] = React.useState<Cache>({});
  const [page, setPage] = React.useState(1);

  const renderRef = React.useRef(1);

  const getRM = React.useCallback(
    async (key: number) => {
      if (!Object.keys(cache).includes(key.toString())) {
        const resp = await fetch(
          `https://rickandmortyapi.com/api/character/${key}`
        );
        const out: Character = await resp.json();
        setCache({ ...cache, [key]: out });
      }
    },
    [cache]
  );

  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  const handlePaginate = async (key: number) => {
    await getRM(key);
    setPage(key);
  };

  React.useEffect(() => {
    getRM(1);
  }, []);

  return (
    <div className="demo" style={{ background: color }}>
      <h2> {`render count Child: ${renderRef.current}`}</h2>
      <div className="demo-container">
        <div>{cache[1] && <Card character={cache[page]} />}</div>
        <div className="paginate-container">
          {keys.map((item) => (
            <button
              key={item}
              className="container-button"
              onClick={() => handlePaginate(item)}
            >{`page ${item}`}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
