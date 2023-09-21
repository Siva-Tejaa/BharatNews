import React,{useState} from 'react'
import "./App.css";

import Header from './components/Header/Header';
import Search from './components/Search/Search';

import Context from './components/utils/Context';

// import {Routes , Route} from 'react-router-dom';

const App = () => {

  const[search, setSearch] = useState(false);
  const[searchtext, setSearchText] = useState("");

  return (
    <Context.Provider value={{search, setSearch, searchtext, setSearchText}}>
    <div>
      <Header/>
      <Search/>
    </div>
    </Context.Provider>
  )
}

export default App