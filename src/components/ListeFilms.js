import React, { useState, useEffect } from "react";
import axios from "axios";
import Film from "./Film";

const ListeFilms = () => {
  const [film, setfilm] = useState([]);
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=fcb498a38dd301e000340b9c12b9048d&language=en-US&page=1";

  useEffect(() => {
    axios.get(URL).then((res) => setfilm(res.data.results));
  }, []);

  return (
    
      <div className="listeFilms">
        {
          <ul className="films-list">
            {film.map((p) => (
              <Film film={p} key={p.id} />
            ))}
          </ul>
        }
      </div>
    
  );
};

export default ListeFilms;
