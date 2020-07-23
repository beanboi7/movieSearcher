import React from 'react';
import './App.css';
import SearchComponent from './searchComponent';
import Credits from './Credits'

function App(){
  return(
    <div>
      <h1 className = 'title'>Movie Searching App using React</h1> 
      <SearchComponent />
      <Credits />
    </div>
    
  )
}

export default App;