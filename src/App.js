import React from 'react';
import './App.css';
import List from './pages/List';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <div className="content">
        <Header />
        <List />
      </div>
      <Footer />
    </>
  );
}

export default App;
