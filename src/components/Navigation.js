import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="ListeCapitales" activeClassName="nav-active">
        Capitales
      </NavLink>
      <NavLink exact to="ListePays" activeClassName="nav-active">
        Pays
      </NavLink>
      <NavLink exact to="ListeClients" activeClassName="nav-active">
        Clients
      </NavLink>
      <NavLink exact to="a-propos" activeClassName="nav-active">
        À propos
      </NavLink>
    </div>
  );
};

export default Navigation;
