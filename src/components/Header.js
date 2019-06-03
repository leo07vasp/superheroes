import React, { Component } from 'react';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  open = e => {
    e.preventDefault();
    this.props.history.push('/');
  };

  render() {
    return (
      <header>
        <h1 onClick={e => this.open(e)}>
          <b>BUSCA KITSU</b> TESTE FRONT-END
        </h1>
        <h2>THIAGO CAPISTRANO</h2>
      </header>
    );
  }
}

export default Header;
