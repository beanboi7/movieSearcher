import React from 'react';
import './App.css';
import SearchComponent from './searchComponent';
import Credits from './Credits'


function App({data}){
  return(
    <div>
      <h1 className = 'title'>The Movie Searcher</h1> 
      <SearchComponent />
      <Credits />
    </div>
    
  )
}

export default App;