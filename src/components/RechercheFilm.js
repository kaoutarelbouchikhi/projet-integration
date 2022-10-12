import React, { useState, useEffect } from "react";
import axios from "axios";
import Film from "./Film";

const RechercheFilm = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=fcb498a38dd301e000340b9c12b9048d&language=en-US&query=${query}`;

  useEffect(() => {
    axios.get(URL).then((res) => setData(res.data.results));
  }, [query]);

  const onSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="rechercheFilm">
      <div className="input-container">
        <input
          className="input"
          placeholder="Titre de film"
          onChange={onSearch}
        ></input>
      </div>
      {query ? (
        <ul className="rechercheFilm-list">
          {data.map((m) => (
            <Film film={m} key={m.id} />
          ))}
        </ul>
      ) : (
        <div className="placeholder-container">
          <img src="recherche.jpg" />
        </div>
      )}
    </div>
  );
};

export default RechercheFilm;
