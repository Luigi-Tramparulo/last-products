import React from 'react';
import './App.css';
import Lens from './components/lens'
import Header from './components/header'
import {products} from './costants'

function App() {
  return (
    <div className="App">
      <Header />
      <Lens product={products}/>
    </div>
  );
}

export default App;
