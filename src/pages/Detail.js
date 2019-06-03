import React, { Component } from 'react';
import axios from 'axios';
import notFound from '../assets/images/notFound.jpg';

export class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      character: '',
      mediaInfo: [{}],
      render: false
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    const { id } = this.state;

    axios
      .get('https://kitsu.io/api/edge/characters/' + id)
      .then(response => {
        this.setState({ character: response.data.data });
        console.log('getCharacters character ', this.state.character);
        this.getInfoCharactersMedia(
          this.state.character.relationships.mediaCharacters.links.related
        );
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  };

  getInfoCharactersMedia = url => {
    console.log('getInfoCharactersMedia url', url);

    let medialist = [];

    axios
      .get(url)
      .then(response => {
        medialist = response.data.data;
        medialist.map(item =>
          this.getMediaInfo(item.relationships.media.links.related)
        );
        this.setState({
          render: true
        });
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  };

  getMediaInfo = url => {
    axios
      .get(url)
      .then(response => {
        this.setState(prevState => ({
          mediaInfo: [...prevState.mediaInfo, response.data.data]
        }));
        console.log('mediaInfo state', this.state.mediaInfo);
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  };

  render() {
    const { character, mediaInfo, render } = this.state;
    return (
      <div className="container-list">
        {render === true && (
          <>
            <h3>{character.attributes.name}</h3>
            <img
              src={
                character.attributes.image
                  ? character.attributes.image.original
                  : notFound
              }
              alt=""
            />

            <p
              dangerouslySetInnerHTML={{
                __html:
                  character.attributes.description ||
                  'informações não encontradas'
              }}
            />
            <br />

            <>
              <h4>Medias</h4>
              <ul>
                {mediaInfo.map((item, index) => (
                  <div key={index}>
                    <li>{item}</li>
                  </div>
                ))}
              </ul>
            </>
          </>
        )}
      </div>
    );
  }
}

export default Detail;
