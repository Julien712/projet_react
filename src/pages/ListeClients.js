import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Client from "../components/Client";
import ClientForm from "../components/ClientForm";

class ListeClients extends React.Component {
    state = {
        clients: [
          { id: 1, nom: "Jean Dupond" },
          { id: 2, nom: "Gisèle Moon" },
          { id: 3, nom: "Albert Durand" }
        ],
        compteur: 0
      };
    
      handleClick = () => {
        this.setState({ compteur: this.state.compteur + 1 });
        console.log(this.state);
      };
    
      handleDelete = (id) => {
        const clients = [...this.state.clients];
        const index = clients.findIndex((client) => client.id === id);
    
        clients.splice(index, 1);
    
        this.setState({ clients });
      };
    
      handleAdd = (client) => {
        const clients = [...this.state.clients];
        clients.push(client);
    
        this.setState({ clients });
      };
    
      render() {
        const title = "Liste des Clients";
    
        return (
          <div>
            <Navigation />
            <Logo />
            <h1>{title}</h1>
            {this.state.compteur}{" "}
            <button onClick={this.handleClick}>Compteur de clics</button>
            <ul>
              {this.state.clients.map((client) => (
                <Client
                  key={client.id}
                  details={client}
                  onDelete={this.handleDelete}
                />
              ))}
            </ul>
            <ClientForm onClientAdd={this.handleAdd} />
          </div>
        );
      }
    }

export default ListeClients;