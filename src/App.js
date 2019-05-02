import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store'
import {HashRouter} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    
    <Provider store = {store}>
      <HashRouter>
        <Navbar />

      </HashRouter>
    </Provider>
  );
}

export default App;
