import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const switchMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="PlayWithText" mode={mode} switchMode={switchMode}/>
      <div className='container'>
      {/* <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm heading="Type the text here to analyse" mode={mode}/>}/>
      </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
