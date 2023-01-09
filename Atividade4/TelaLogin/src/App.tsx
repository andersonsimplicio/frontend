import { useState } from 'react'
import './assets/css/global.css'
import { Navbar } from './components/NavBar';
import { Body } from './components/Body';

function App() {
  

  return (
    <div className="App">
        <Navbar />
        <Body />
    </div>
  )
}

export default App
