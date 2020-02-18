import React from 'react';
import { Provider } from 'react-redux'
import {store} from './redux/store'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <Provider store = {store}>
    <Router>
    <Routes />
    <div className="App">

    </div>
    </Router>
    </Provider>
  );
}

export default App;
