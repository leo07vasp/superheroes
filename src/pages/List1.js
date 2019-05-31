import React, { Component } from 'react';
import axios from 'axios';

export class list extends Component {
  constructor(props) {
    super(props);

    this.state = { personagens: [] };
  }

  componentDidMount() {
    this.getPersonagens();
  }

  getPersonagens = () => {
    axios
      .get('https://kitsu.io/api/edge/anime')
      .then(response => {
        console.log('asdasd', response.data);
        this.setState({ personagens: response.data.data });
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  };

  render() {
    const { personagens } = this.state;
    return (
      <div class="container-list">
        <div className="header-list">
          <span>Personagem</span>
          <span>Séries</span>
          <span>Eventos</span>
        </div>

        {!personagens && <>carregando</>}
        <ul>
          {personagens.map((item, index) => (
            <>
              {console.log('123', item)}
              <li key={index}>{item.id}</li>
              <li key={index}>{item.attributes.canonicalTitle}</li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default list;
