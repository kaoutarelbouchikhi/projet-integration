import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ListeFilms from "../components/ListeFilms";

const Categorie = () => {
  return (
    <div className="categorie">
      <Navigation />
      <ListeFilms/>
      <Footer />
    </div>
  );
};

export default Categorie;
