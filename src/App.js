import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListeCapitales from "./pages/ListeCapitales";
import Listepays from "./pages/ListePays";
import ListeClients from "./pages/ListeClients";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ListeCapitales" exact component={ListeCapitales} />
        <Route path="/ListePays" exact component={Listepays} />
        <Route path="/ListeClients" exact component={ListeClients} />
        <Route path="/a-propos" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
