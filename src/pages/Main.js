import React from 'react';
import {Header, Footer} from '../components';
import List from './List';
import Detail from './Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Page = () => <> 
<div className="content">
  <Header />
  <Router>
       <Route exact path="/" component={List} />
       <Route path="/character/:id" component={Detail} />
  </Router>
  <Footer />
</div>

</>

export default Page;
