import React from "react";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Categorie from "./pages/Categorie";
import FicheActeur from "./pages/FicheActeur";
import FicheFilm from "./pages/FicheFilm";
import Recherche from "./pages/Recherche";
import Episodes from "./pages/Episodes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/a-propos" exact component={Apropos} />
        <Route path="/categorie" exact component={Categorie} />
        <Route path="/fiche-acteur" exact component={FicheActeur} />
        <Route path="/fiche-film" exact component={FicheFilm} />
        <Route path="/recherche" exact component={Recherche} />
        <Route path="/episodes" exact component={Episodes} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
