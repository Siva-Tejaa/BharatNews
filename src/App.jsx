import React from 'react'
import "./App.css";

import Header from './components/Header/Header';
import Search from './components/Search/Search';

// import {Routes , Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header/>
      <Search/>
    </div>
  )
}

export default App