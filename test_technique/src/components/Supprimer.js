import React, { Component } from 'react';
import image from '../assets/img-eleve.png';

class Supprimer extends Component {

  constructor(props){
  super(props);

  this.state = {
    isEdit: false
  };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);

  }
  onDelete(){
    const { onDelete, firstName } = this.props;
    onDelete(firstName);
  }
  onEdit(){
    this.setState({ isEdit : true });
  }
  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.firstNameInput.value, this.lastNameInput.value, this.classeInput.value, this.props.firstName);
    this.setState({ isEdit: false });
  }

  render() {

      const { firstName, lastName, classe } = this.props;


    return (
          <div className = 'eleve'>
              {
                this.state.isEdit
                ? (
                  <div className="back_form">
                    <form onSubmit={this.onEditSubmit} className="form_edit">
                    <h4>Modifier un profil</h4>
                      <input placeholder="firstName" ref={firstNameInput => this.firstNameInput = firstNameInput} defaultValue={firstName}/>
                      <input placeholder="lastName" ref={lastNameInput => this.lastNameInput = lastNameInput} defaultValue={lastName}/>
                      <input placeholder="classe" ref={classeInput => this.classeInput = classeInput} defaultValue={classe}/>
                      <button className="button-Form-Add">Modifier</button>
                    </form>
                  </div>
                )
                : (
                  <div>
                    <img className="img-eleve" src={image} alt="photoprofile"/>
                    <p><strong>Prenom: </strong>{firstName}</p>
                    <p><strong>Nom: </strong>{lastName}<button className="button-Delete" onClick={this.onDelete}>X</button><button className="button-Edit" onClick={this.onEdit}>Modifier</button></p>
                    <p><strong>Classe: </strong>{classe}</p>

                  </div>
                )
              }
          </div>
    );
  }
}

export default Supprimer;
