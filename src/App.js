import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Header, Footer} from './components/'
import Detail from './pages/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
     {/* <Router>
       <Route path="/" component={Home} />
       <Route path="/character/:id" component={Detail} />
     </Router> */}
    <Header />
    <Detail />
    <Footer />
    </>
  );
}

export default App;
