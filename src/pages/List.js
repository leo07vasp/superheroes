import React, { Component } from 'react';
import axios from 'axios';

export class list extends Component {
  constructor(props) {
    super(props);

    this.state = { characters: [] };
  }

  componentDidMount() {
    this.getCharactersList();
  }
  //https://kitsu.io/api/edge/characters?filter[name]=naruto
  getCharactersList = () => {
    axios
      .get('https://kitsu.io/api/edge/characters')
      .then(response => {
        this.setState({ characters: response.data.data });
        console.log(this.state.characters);
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container-list">
        <div className="header-list">
          <span>Personagem</span>
          <span>Descrição</span>
        </div>

        <ul className="list-content">
          {characters.map((item, index) => (
            <li key={index}>
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

        <div id="paginate">
          <a className="prev" href="#">
            &#9664;
          </a>
          <a className="link-page active" href="#">
            1
          </a>
          <a className="link-page" href="#">
            2
          </a>
          <a className="link-page" href="#">
            3
          </a>
          <a className="link-page" href="#">
            4
          </a>
          <a className="link-page" href="#">
            5
          </a>
          <a className="next" href="#">
            &#9654;
          </a>
        </div>
      </div>
    );
  }
}

export default list;
