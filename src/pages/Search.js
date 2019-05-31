import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form className="search" action="">
        <label htmlFor="search">Nome do personagem</label>
        <input id="search" type="text" />
      </form>
    );
  }
}

export default Search;
