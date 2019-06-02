import React, { Component } from 'react'; 

export class Pagination extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage : localStorage.getItem('activePage') || 1,
    };
  }

  handleClick = (e, page) => {
    e.preventDefault()
    this.props.findPage(page)
  }

  render() {
    let currentPage =  localStorage.getItem('activePage') || 1
    let items = [];
    for (let number = parseInt(currentPage); number <= (parseInt(currentPage)+4); number++) {
      items.push(
        <a className={`link-page ${(parseInt(currentPage) === number) ? 'active' : ''}`} onClick={(e) => this.handleClick(e, number)}>
          {number}
        </a>
      );
    }

    return (
    <div id="paginate">
      <a className={`prev ${(currentPage -1 <= 0) ? 'disabled' : ''}`}  onClick={(e) => this.handleClick(e, currentPage -1 )}>
        &#9664;
      </a>
      {items}
      <a className="next" onClick={(e) => this.handleClick(e, parseInt(currentPage) + 1 )}>
        &#9654;
      </a>
    </div>
    );
  }
}

export default Pagination;






