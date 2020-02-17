import React from 'react';
import { Provider } from 'react-redux'
import {store} from './redux/store'
import './App.css';
import Lens from './components/lens'
import Header from './components/header'
import {products} from './costants'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Header />
      <Lens product={products}/>
    </div>
    </Provider>
  );
}

export default App;
