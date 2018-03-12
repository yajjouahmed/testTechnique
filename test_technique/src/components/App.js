import React, { Component } from 'react';
import logo from '../assets/logo-livre.svg';
import '../css/App.css';
import { eleveClasse }     from './establishments/fixtures';
import  Ajouter    from './Ajouter';
import  Supprimer    from './Supprimer';


localStorage.setItem('eleveClasse', JSON.stringify(eleveClasse));

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      eleveClasse: JSON.parse(localStorage.getItem('eleveClasse'))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    const eleveClasse = this.getEleve();
    this.setState({ eleveClasse });
  }
  getEleve(){
    return this.state.eleveClasse;
  }
  onAdd(firstName, lastName, classe){
    const eleveClasse = this.getEleve();
      eleveClasse.push({
        firstName,
        lastName,
        classe
      });
    this.setState({ eleveClasse });
  }

  onDelete(firstName){
    const eleveClasse = this.getEleve();
    const filteredEleveClasse = eleveClasse.filter(eleve => {
      return eleve.firstName !== firstName;
    });
    this.setState({ eleveClasse: filteredEleveClasse});
  }
  onEditSubmit(firstName, lastName, classe, originName){
    let eleveClasse = this.getEleve();
    eleveClasse = eleveClasse.map(eleve => {
      if (eleve.firstName === originName){
        eleve.firstName = firstName;
        eleve.lastName = lastName;
        eleve.classe = classe;
      }
      return eleve;
    });
    this.setState({ eleveClasse });
  }


  render() {
          return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="ajouter">
                  <Ajouter onAdd={this.onAdd}/>
                </div>
                <div className="block-Eleve">
                  <div className="center-block-eleve">
                    <div className="App-intro">
                {
                  this.state.eleveClasse.map(eleve => {
                  return(
                    <Supprimer
                    key={eleve.firstName}
                    firstName={eleve.firstName}
                    lastName={eleve.lastName}
                    classe={eleve.classe}
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}
                    />
                    );
                  })
                }
                  </div>
                </div>
              </div>

          </div>
        );
        }
}

export default App;
