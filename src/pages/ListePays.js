import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Countries from "../components/Countries";

const Listepays = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>Liste des Pays</h1>
            <Countries />
        </div>
    );
};

export default Listepays;