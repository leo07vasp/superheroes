import React, { Component } from 'react';
import axios from 'axios';
import notFound from '../assets/images/notFound.jpg'
import Pagination from '../components/Pagination';


export class list extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      charactersList: [], 
      activePage : 10,
      allCharacters: 0,
      textFind : '',
    };
  }

  componentDidMount() {
    this.getCharactersList();
  }
  
  getCharactersList = () => {
    axios
      .get('https://kitsu.io/api/edge/characters')
      .then(response => {
        this.setState({ charactersList: response.data.data, allCharacters: response.data.meta.count });
        console.log('charactersList',this.state.charactersList);
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  };

  setFindText = (e) => {
    this.setState({
        textFind : e.target.value
      })
  }

  findCharacters = (e, text) => {
    e.preventDefault()
    
    axios
    .get('https://kitsu.io/api/edge/characters?filter[name]=' + text)
    .then(response => {
      this.setState({ 
        charactersList: response.data.data, 
        allCharacters: response.data.meta.count,
        activePage: 0,
        textFind : ''
      });
      console.log('findCharacters response',  this.state.charactersList)
    })
    .catch(function(error) {
      console.log('Problemas ao buscar lista');
      console.log(error);
    });
  }



  openDetailCharacter = (e, character)  => {
    e.preventDefault()
    this.props.history.push('character/' + character.id)
  }

  render() {
    const { charactersList, textFind, activePage } = this.state;
    return (
      <>
       <form className="search" action="">
        <label htmlFor="search">Nome do personagem</label>
        <input id="search" type="text" onChange={(e) => this.setFindText(e)}  onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.findCharacters(event, textFind)
                }
              }} />
      </form>`
      <div className="container-list">
      {charactersList.length > 0 ? (
        <>
        <div className="header-list">
          <span>Personagem</span>
          <span>Descrição</span>
        </div>

        <ul className="list-content">
          {charactersList.map((item, index) => (
            <li key={index} onClick={(e) => this.openDetailCharacter(e, item)}>
              <span className="middle-v-align image">
                <img src={(item.attributes.image) ? item.attributes.image.original : notFound} alt="" />
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
        <Pagination currentPage={activePage} />
        </>
      ) : ('Nenhum registro encontrado')}
      </div>
      </>
    );
  }
}

export default list;
