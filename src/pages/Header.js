import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          {' '}
          <b>BUSCA KITSU</b> TESTE FRONT-END{' '}
        </h1>

        <h2>THIAGO CAPISTRANO</h2>

        <Search />
      </header>
    );
  }
}

export default Header;
