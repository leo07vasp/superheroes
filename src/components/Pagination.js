import React, { Component } from 'react'; 

export class Pagination extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage : this.props.currentPage || 0,
      allRows: this.props.rows,
      pageSize: this.props.pageSize || 5
    };
  }


  


  render() {
    
    const { currentPage, allRows, pageSize } = this.state
    
    let items = [];
    for (let number = 1; number <= 5; number++) {
      console.log('currentPage',(currentPage + 1) === number)
      console.log('currentPage',currentPage + 1)
      items.push(
        <a className={`link-page ${(currentPage === number) ? 'active' : ''}`} href={number}>
        
          {currentPage}
        </a>
      );
    }

    return (
     <div id="paginate">
     <a className="prev" href="#">
       &#9664;
     </a>
    {items}
    <a className="next" href="#">
      &#9654;
    </a>
    </div>
    );
  }
}

export default Pagination;






