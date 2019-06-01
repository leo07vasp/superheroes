import React, { Component } from 'react';
import axios from 'axios';


export class list extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      charactersList: [], 
      activePage : 0
    };
  }

  componentDidMount() {
    this.getCharactersList();
  }
  
  getCharactersList = () => {
    axios
      .get('https://kitsu.io/api/edge/characters')
      .then(response => {
        this.setState({ charactersList: response.data.data });
        console.log(this.state.characters);
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  };

  findCharacters = () => {
    axios
    .get('https://kitsu.io/api/edge/characters?filter[name]=naruto')
    .then(response => {
      this.setState({ 
        charactersList: response.data.data, 
        activePage: 0 
      });
    })
    .catch(function(error) {
      console.log('Problemas ao buscar lista');
      console.log(error);
    });
  }

  openDetailCharacter = (e, character)  => {
    e.preventDefault()
    console.log(character);   
  }

  render() {
    const { charactersList } = this.state;
    return (
      <div className="container-list">
        <div className="header-list">
          <span>Personagem</span>
          <span>Descrição</span>
        </div>

        <ul className="list-content">
          {charactersList.map((item, index) => (
            <li key={index} onClick={(e) => this.openDetailCharacter(e, item)}>
              <span className="middle-v-align image">
                <img src={item.attributes.image.original} alt="" />
              </span>
              <h3 className="name">{item.attributes.canonicalName}</h3>
              <div
                className="desc"
                dangerouslySetInnerHTML={{
                  __html: item.attributes.description.slice(1, 255) + '...'
                }}
              />
            </li>
          ))}
        </ul>

       
      </div>
    );
  }
}

export default list;
