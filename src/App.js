import logo from './logo.svg';
import './App.css';
import Reactmarkdown from 'react-markdown'
import Main from './component/main.js'
import { useState } from 'react';

function App() {
  return (
    <div className="App">
  
      <Main/>
      <Reactmarkdown></Reactmarkdown>
    </div>
  );
}

export default App;
