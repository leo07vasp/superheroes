import React, { Component } from 'react';
import axios from 'axios';
import notFound from '../assets/images/notFound.jpg';
import Pagination from '../components/Pagination';

export class list extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charactersList: [],
      textFind: ''
    };
    console.log(this.props);
  }

  componentDidMount() {
    localStorage.removeItem('activePage');
    this.getCharactersList('https://kitsu.io/api/edge/characters');
  }

  getCharactersList = url => {
    console.log(url);
    axios
      .get(url)
      .then(response => {
        this.setState({ charactersList: response.data.data, textFind: '' });
        console.log('charactersList', this.state.charactersList);
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  };

  setFindText = e => {
    this.setState({
      textFind: e.target.value
    });
  };

  findCharacters = e => {
    e.preventDefault();
    this.getCharactersList(
      'https://kitsu.io/api/edge/characters?filter[name]=' + this.state.textFind
    );
  };

  openDetailCharacter = (e, character) => {
    e.preventDefault();
    this.props.history.push('character/' + character.id);
  };

  findCharactersPage = page => {
    localStorage.setItem('activePage', page);
    this.getCharactersList(
      'https://kitsu.io/api/edge/characters?page[limit]=10&page[offset]=' +
        page +
        0
    );
  };

  render() {
    const { charactersList, textFind } = this.state;
    return (
      <>
        <form className="search" action="">
          <label htmlFor="search">Nome do personagem</label>
          <input
            id="search"
            type="text"
            onChange={e => this.setFindText(e)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.findCharacters(event, textFind);
              }
            }}
          />
        </form>
        `
        <div className="container-list">
          {charactersList.length > 0 ? (
            <>
              <div className="header-list">
                <span>Personagem</span>
                <span>Descrição</span>
              </div>

              <ul className="list-content">
                {charactersList.map((item, index) => (
                  <li
                    key={index}
                    onClick={e => this.openDetailCharacter(e, item)}
                  >
                    <span className="middle-v-align image">
                      <img
                        src={
                          item.attributes.image
                            ? item.attributes.image.original
                            : notFound
                        }
                        alt=""
                      />
                    </span>
                    <h3 className="name">{item.attributes.canonicalName}</h3>
                    <div
                      className="desc"
                      dangerouslySetInnerHTML={{
                        __html:
                          item.attributes.description.slice(1, 255) + '...'
                      }}
                    />
                  </li>
                ))}
              </ul>
              <Pagination findPage={e => this.findCharactersPage(e)} />
            </>
          ) : (
            'Nenhum registro encontrado'
          )}
        </div>
      </>
    );
  }
}

export default list;
