import React, { Component } from 'react';
import axios from 'axios';
import { Header, Footer, Media } from '../components';

export class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id : this.props.match.params.id,
      character: '' 
    };
  }

  componentDidMount() {
    this.getCharacters()
    //this.getInfoCharactersMedia(this.state.character.relationships.mediaCharacters.links.related);
  }


  getCharacters = () => {
    const { id } = this.state;

    axios
      .get('https://kitsu.io/api/edge/characters/' + id )
      .then(response => {
        this.setState({ character: response.data.data })
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  }
  
  // getInfoCharactersMedia = (url) => {
  //   console.log('getInfoCharactersMedia url', url)
  //   axios
  //     .get(url)
  //     .then(response => {
  //       //console.log('getInfoCharactersMedia',response.data.data)
  //       // this.setState(prevState => ({
  //       //   mediaLinks: [...prevState.mediaLinks, response.data.data]
  //       // }));
  //        this.setState({ mediaLinks: response.data.data })
  //       // console.log('character', this.state.character)
  //        //console.log('mediaLinks', this.state.mediaLinks)
  //        this.state.mediaLinks.map((item, index)=> (
  //           this.getInfoCharactersMedia(item.relationships.media.links.related)
  //       ))
         
                  
  //     })
  //     .catch(function(error) {
  //       console.log('Problemas ao buscar lista');
  //       console.log(error);
  //     });
  // };


  // getCharactersMedia = (url) => {
  //     console.log('url', url)
  //     axios
  //     .get(url)
  //     .then(response => {
  //       this.setState(prevState => ({
  //          mediaInfo: [...prevState.mediaInfo, response.data.data]
  //       }));
  //       //this.setState({mediaInfo: response.data.data});
  //       console.log('mediaInfo', this.state.mediaInfo)
  //     })
  //     .catch(function(error) {
  //       console.log('Problemas ao buscar lista');
  //       console.log(error);
  //     });
    

  //    console.log('mediaInfo',this.state.mediaInfo)
  // }

    
  render() {
    const { character } = this.state;
    return (
      <>
      {character && (
        <>
          <h3>{character.attributes.name}</h3>
            <img src={character.attributes.image.original} alt="" />
           
          <p dangerouslySetInnerHTML={{__html: character.attributes.description}} />
          <br/>
          <h4>Medias</h4>
          <ul>
          </ul>
        </>
      )}
      </>
    //   {character && (
    //     <>
    //     {/* <Header /> */}
    //       <div style={{float: "left"}}>
    //       <h3>{character.attributes.name}</h3>
    //         <img src={character.attributes.image.original} alt="" />
           
    //       </div>
    //       <p dangerouslySetInnerHTML={{__html: character.attributes.description}} />
    //       <br/>
    //       <h4>Medias</h4>
    //       <ul>
          
    //       {mediaInfo && mediaInfo.map((item, index)=> (
    //         <Media media={item} index={index} />
    //       ))}
    //       </ul>
    //       {/* <Footer /> */}
    //   </>
    //   )}
    );
  }
}

export default Detail;
