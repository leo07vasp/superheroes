import React, { Component } from 'react';
import axios from 'axios';
import { Header, Footer, Media } from '../components';

export class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      mediaInfo: [{
        "data": {
          "id": "414",
          "type": "manga",
          "links": {
            "self": "https://kitsu.io/api/edge/manga/414"
          },
          "attributes": {
            "createdAt": "2013-12-18T13:48:49.027Z",
            "updatedAt": "2019-06-01T18:00:11.975Z",
            "slug": "cowboy-bebop",
            "synopsis": "Spike, Jet, Faye and Ed—cowboys on the new frontier. Together this band of interplanetary bounty hunters takes on the jobs that anyone in their right mind would turn down. \r\n(Source: Tokyopop)",
            "coverImageTopOffset": 0,
            "titles": {
              "en": null,
              "en_jp": "Cowboy Bebop"
            },
            "canonicalTitle": "Cowboy Bebop",
            "abbreviatedTitles": null,
            "averageRating": "70.65",
            "ratingFrequencies": {
              "2": "6",
              "3": "0",
              "4": "2",
              "5": "1",
              "6": "6",
              "7": "0",
              "8": "7",
              "9": "1",
              "10": "16",
              "11": "1",
              "12": "35",
              "13": "0",
              "14": "60",
              "15": "2",
              "16": "33",
              "17": "1",
              "18": "22",
              "19": "0",
              "20": "19"
            },
            "userCount": 466,
            "favoritesCount": 12,
            "startDate": "1999-04-08",
            "endDate": "2000-04-10",
            "nextRelease": null,
            "popularityRank": 1167,
            "ratingRank": 3365,
            "ageRating": null,
            "ageRatingGuide": "",
            "subtype": "manga",
            "status": "finished",
            "tba": "",
            "posterImage": {
              "tiny": "https://media.kitsu.io/manga/poster_images/414/tiny.jpg?1434250261",
              "small": "https://media.kitsu.io/manga/poster_images/414/small.jpg?1434250261",
              "medium": "https://media.kitsu.io/manga/poster_images/414/medium.jpg?1434250261",
              "large": "https://media.kitsu.io/manga/poster_images/414/large.jpg?1434250261",
              "original": "https://media.kitsu.io/manga/poster_images/414/original.jpg?1434250261",
              "meta": {
                "dimensions": {
                  "tiny": {
                    "width": null,
                    "height": null
                  },
                  "small": {
                    "width": null,
                    "height": null
                  },
                  "medium": {
                    "width": null,
                    "height": null
                  },
                  "large": {
                    "width": null,
                    "height": null
                  }
                }
              }
            },
            "coverImage": null,
            "chapterCount": 11,
            "volumeCount": 3,
            "serialization": "Asuka Fantasy DX",
            "mangaType": "manga"
          },
          "relationships": {
            "genres": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/genres",
                "related": "https://kitsu.io/api/edge/manga/414/genres"
              }
            },
            "categories": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/categories",
                "related": "https://kitsu.io/api/edge/manga/414/categories"
              }
            },
            "castings": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/castings",
                "related": "https://kitsu.io/api/edge/manga/414/castings"
              }
            },
            "installments": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/installments",
                "related": "https://kitsu.io/api/edge/manga/414/installments"
              }
            },
            "mappings": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/mappings",
                "related": "https://kitsu.io/api/edge/manga/414/mappings"
              }
            },
            "reviews": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/reviews",
                "related": "https://kitsu.io/api/edge/manga/414/reviews"
              }
            },
            "mediaRelationships": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/media-relationships",
                "related": "https://kitsu.io/api/edge/manga/414/media-relationships"
              }
            },
            "characters": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/characters",
                "related": "https://kitsu.io/api/edge/manga/414/characters"
              }
            },
            "staff": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/staff",
                "related": "https://kitsu.io/api/edge/manga/414/staff"
              }
            },
            "productions": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/productions",
                "related": "https://kitsu.io/api/edge/manga/414/productions"
              }
            },
            "quotes": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/quotes",
                "related": "https://kitsu.io/api/edge/manga/414/quotes"
              }
            },
            "chapters": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/chapters",
                "related": "https://kitsu.io/api/edge/manga/414/chapters"
              }
            },
            "mangaCharacters": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/manga-characters",
                "related": "https://kitsu.io/api/edge/manga/414/manga-characters"
              }
            },
            "mangaStaff": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/414/relationships/manga-staff",
                "related": "https://kitsu.io/api/edge/manga/414/manga-staff"
              }
            }
          }
        }
      },{
        "data": {
          "id": "416",
          "type": "manga",
          "links": {
            "self": "https://kitsu.io/api/edge/manga/416"
          },
          "attributes": {
            "createdAt": "2013-12-18T13:48:49.074Z",
            "updatedAt": "2019-06-01T18:00:11.975Z",
            "slug": "cowboy-bebop-shooting-star",
            "synopsis": "Kai Lucas hires the Bebop crew to find his mischievous doppelganger, but the bounty goes bust and Spike and Jet once again find themselves broke - and hungry. And to add to their woes, Spike ends up mysteriously on the police's most wanted list, either the butt of a joke or the victim of a severe computer glitch. But what's worse, being targeted by every bounty hunter in the solar system, or taking on a kid-genius, a genius puppy and a genus: fatale, species: femme as part of the crew. Well, if Scorpion or the Dragon Head Family doesn't kill them, the extra mouths to feed certainly will. (Source: Tokyopop)",
            "coverImageTopOffset": 0,
            "titles": {
              "en": "Cowboy Bebop: Shooting Star",
              "en_jp": "Cowboy Bebop Shooting Star"
            },
            "canonicalTitle": "Cowboy Bebop Shooting Star",
            "abbreviatedTitles": null,
            "averageRating": "68.97",
            "ratingFrequencies": {
              "2": "1",
              "3": "0",
              "4": "4",
              "5": "0",
              "6": "3",
              "7": "0",
              "8": "4",
              "9": "0",
              "10": "12",
              "11": "0",
              "12": "21",
              "13": "0",
              "14": "25",
              "15": "0",
              "16": "11",
              "17": "0",
              "18": "6",
              "19": "0",
              "20": "5"
            },
            "userCount": 212,
            "favoritesCount": 2,
            "startDate": "1998-05-01",
            "endDate": "1998-10-10",
            "nextRelease": null,
            "popularityRank": 2626,
            "ratingRank": 3651,
            "ageRating": null,
            "ageRatingGuide": "",
            "subtype": "manga",
            "status": "finished",
            "tba": "",
            "posterImage": {
              "tiny": "https://media.kitsu.io/manga/poster_images/416/tiny.jpg?1434250263",
              "small": "https://media.kitsu.io/manga/poster_images/416/small.jpg?1434250263",
              "medium": "https://media.kitsu.io/manga/poster_images/416/medium.jpg?1434250263",
              "large": "https://media.kitsu.io/manga/poster_images/416/large.jpg?1434250263",
              "original": "https://media.kitsu.io/manga/poster_images/416/original.jpg?1434250263",
              "meta": {
                "dimensions": {
                  "tiny": {
                    "width": null,
                    "height": null
                  },
                  "small": {
                    "width": null,
                    "height": null
                  },
                  "medium": {
                    "width": null,
                    "height": null
                  },
                  "large": {
                    "width": null,
                    "height": null
                  }
                }
              }
            },
            "coverImage": null,
            "chapterCount": 10,
            "volumeCount": 2,
            "serialization": "Asuka Fantasy DX",
            "mangaType": "manga"
          },
          "relationships": {
            "genres": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/genres",
                "related": "https://kitsu.io/api/edge/manga/416/genres"
              }
            },
            "categories": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/categories",
                "related": "https://kitsu.io/api/edge/manga/416/categories"
              }
            },
            "castings": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/castings",
                "related": "https://kitsu.io/api/edge/manga/416/castings"
              }
            },
            "installments": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/installments",
                "related": "https://kitsu.io/api/edge/manga/416/installments"
              }
            },
            "mappings": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/mappings",
                "related": "https://kitsu.io/api/edge/manga/416/mappings"
              }
            },
            "reviews": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/reviews",
                "related": "https://kitsu.io/api/edge/manga/416/reviews"
              }
            },
            "mediaRelationships": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/media-relationships",
                "related": "https://kitsu.io/api/edge/manga/416/media-relationships"
              }
            },
            "characters": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/characters",
                "related": "https://kitsu.io/api/edge/manga/416/characters"
              }
            },
            "staff": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/staff",
                "related": "https://kitsu.io/api/edge/manga/416/staff"
              }
            },
            "productions": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/productions",
                "related": "https://kitsu.io/api/edge/manga/416/productions"
              }
            },
            "quotes": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/quotes",
                "related": "https://kitsu.io/api/edge/manga/416/quotes"
              }
            },
            "chapters": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/chapters",
                "related": "https://kitsu.io/api/edge/manga/416/chapters"
              }
            },
            "mangaCharacters": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/manga-characters",
                "related": "https://kitsu.io/api/edge/manga/416/manga-characters"
              }
            },
            "mangaStaff": {
              "links": {
                "self": "https://kitsu.io/api/edge/manga/416/relationships/manga-staff",
                "related": "https://kitsu.io/api/edge/manga/416/manga-staff"
              }
            }
          }
        }
      }],
      mediaLinks: [],
      character:  {
        "id": "1",
        "type": "characters",
        "links": {
          "self": "https://kitsu.io/api/edge/characters/1"
        },
        "attributes": {
          "createdAt": "2013-02-20T18:49:20.901Z",
          "updatedAt": "2018-12-28T03:28:31.302Z",
          "slug": "jet-black",
          "names": {
            "en": "Jet Black",
            "ja_jp": "ジェット・ブラック"
          },
          "canonicalName": "Jet Black",
          "otherNames": [
            "Running Rock",
            "Black Dog"
          ],
          "name": "Jet Black",
          "malId": 3,
          "description": "Jet, known on his home satellite as the \"Black Dog\" for his tenacity, is a 36-year-old former cop from Ganymede (a Jovian satellite) and acts as Spike's foil during the series. Physically, Jet is very tall with a muscular build. He wears a beard with no mustache, and is completely bald save for the back of his head. Spike acts lazy and uninterested, whereas Jet is hard working and a jack-of-all-trades. Jet was once an investigator in the Inter Solar System Police (ISSP) for many years until he lost his arm in an investigation that went awry when his corrupt partner (and friend at the time) betrayed him. His arm was replaced with a cybernetic limb (later revealed to be by choice, as biological replacements were possible, he wanted the fake arm as a reminder of what happened), yet his loss of limb coupled with the general corruption of the police force prompted Jet to quit the ISSP in disgust and become a freelance bounty hunter. Jet also considers himself something of a renaissance man: he cultivates bonsai trees, cooks, enjoys jazz/blues music (he named his ship the Bebop, referring to a type of jazz), especially Charlie Parker, and even has interest in Goethe. As a character, Jet is the quintessential oyaji or \"dad\" even though he often wishes people would view him as a more brotherly figure (so as not to seem old).<br><br>Jet is skilled with handguns, typically carrying a pre-2004 Walther P99, as well as the use of the netgun. He is good with hand to hand combat as well. Unlike Spike, Jet tends to use more raw muscle than technique. He is also a great mechanic and pilot. Aside from the converted interplanetary fishing trawler vessel Bebop, Jet flies a smaller ship called Hammerhead. The Hammerhead appears to be a modified (Jet added larger engines and fuel tanks) salvage-craft that uses a mechanical arm equipped with a harpoon as its main weapon, which is somewhat analogous to his own mechanical arm. Both the Hammerhead and the Bebop are able to land on water, and have a fishing theme, most likely because Ganymede's surface is mostly covered with water (it is later revealed that the Bebop was originally a fishing ship that Jet \"customized\" with larger engines).<br><br>During the series, it is revealed that Jet once lived with a woman named Alisa, who left him because he was too controlling. Later they meet up again when Alisa's new boyfriend Rhint is wanted for murder. Jet then ends up in a situation somewhat similar to that of Vicious, where he must hunt down a woman who broke his heart, and her lover.<br><br><span class=\"spoiler\">In a later episode, another Vicious/Spike parallel is set up when Jet finds out that it was his old partner Fad who betrayed him (though in Jet's case, there was no love affair involved). Fad arranged for Jet's death in a setup, but he survived with only a missing arm and a scar on his face. It is worth noting that Jet managed to face the demons of his past and let them go, in contrast to Spike, who was killed when he confronted his. This is likely due to the contrast in the two approaches to the past. While Spike hid and fled from his past, Jet tracked it down and confronted it.</span>",
          "image": {
            "original": "https://media.kitsu.io/characters/images/1/original.jpg?1483096805",
            "meta": {
              "dimensions": {
                
              }
            }
          }
        },
        "relationships": {
          "primaryMedia": {
            "links": {
              "self": "https://kitsu.io/api/edge/characters/1/relationships/primary-media",
              "related": "https://kitsu.io/api/edge/characters/1/primary-media"
            }
          },
          "castings": {
            "links": {
              "self": "https://kitsu.io/api/edge/characters/1/relationships/castings",
              "related": "https://kitsu.io/api/edge/characters/1/castings"
            }
          },
          "mediaCharacters": {
            "links": {
              "self": "https://kitsu.io/api/edge/characters/1/relationships/media-characters",
              "related": "https://kitsu.io/api/edge/characters/1/media-characters"
            }
          },
          "quotes": {
            "links": {
              "self": "https://kitsu.io/api/edge/characters/1/relationships/quotes",
              "related": "https://kitsu.io/api/edge/characters/1/quotes"
            }
          }
        }
      }
     };
    }

  componentDidMount() {
    console.log(`teste`)
    //console.log(this.props.match);
    //this.getInfoCharactersMedia(this.state.character.relationships.mediaCharacters.links.related);
  
  }
  
  getInfoCharactersMedia = (url) => {
    
    axios
      .get(url)
      .then(response => {
        console.log('getInfoCharactersMedia',response.data.data)
        //this.setState(prevState => ({
        //     character: [...prevState.character, response.data.data]
        //}));
        this.setState({ mediaLinks: response.data.data })
        //this.getCharactersMedia()
          
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  };


  getCharactersMedia = () => {

    const {mediaLinks} = this.state;
    let mediaList = [];    


    {mediaLinks.map((item, index) => {
      axios
      .get(item.relationships.media.links.related)
      .then(response => {
        mediaList[index]= response.data.data
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
    })}

     this.setState({mediaInfo: mediaList});
  }

    
  render() {
    const { character, mediaInfo} = this.state;
    return (
      <>
        {/* <Header /> */}
          <div style={{float: "left"}}>
          <h3>{character.attributes.name}</h3>
            <img src={character.attributes.image.original} alt="" />
           
          </div>
          <p dangerouslySetInnerHTML={{__html: character.attributes.description}} />
          <br/>
          <h4>Medias</h4>
          <ul>
          {mediaInfo.map((item, index)=> (
            <Media media={item} index={index} />
          ))}
          </ul>
          {/* <Footer /> */}
      </>
    );
  }
}

export default Detail;
