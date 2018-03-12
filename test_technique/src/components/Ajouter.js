import React, { Component } from 'react';


class Ajouter extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    if ( this.firstNameInput.value === "" && this.lastNameInput.value === ""  && this.classeInput.value === ""  )
    {
        alert("veuillez renseignez tout les champ.");
    }else {
      this.props.onAdd(this.firstNameInput.value, this.lastNameInput.value, this.classeInput.value);
    }
    this.firstNameInput.value = '';
    this.lastNameInput.value = '';
    this.classeInput.value = '';

  }

  render() {

    return (
      <div className="block-Add">
          <form className = 'form-Add' onSubmit={this.onSubmit}>
            <h3>Ajouter un eleve</h3>
            <input placeholder="firstName" ref={firstNameInput => this.firstNameInput = firstNameInput} />
            <input placeholder="lastName" ref={lastNameInput => this.lastNameInput = lastNameInput} />
            <input placeholder="classe" ref={classeInput => this.classeInput = classeInput}/>
            <button className="button-Form-Add">Ajouter</button>
          </form>
      </div>
    );
  }
}

export default Ajouter;
