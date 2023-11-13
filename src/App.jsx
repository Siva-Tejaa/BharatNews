import React,{useState} from 'react'
import "./App.css";

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Body from './components/Body/Body';

import Context from './components/utils/Context';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';

// import {Routes , Route} from 'react-router-dom';

const App = () => {

  const[search, setSearch] = useState(false);
  const[searchtext, setSearchText] = useState("");
  const[newscategory, setNewsCategory] = useState("general");
  const[newscountry, setNewsCountry] = useState("in");

  return (
    <Context.Provider value={{search, setSearch, searchtext, setSearchText, newscategory, setNewsCategory, newscountry, setNewsCountry}}>
    <div>
      <Header/>
      <HeaderMenu/>
      <Search/>
      <Body/>
    </div>
    </Context.Provider>
  )
}

export default App