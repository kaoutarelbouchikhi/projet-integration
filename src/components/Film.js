import React from "react";

const Film = (props) => {

    const { film } = props;

    return (
        <div className="film">
            <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt="poster"/>
            <div className="conteneur">
                <li>{film.title}</li>
            </div>
            <div>
            <li><b>{film.title}</b></li>
            <li>{film.release_date}</li>
            </div>
        </div>
    )
}

export default Film;

