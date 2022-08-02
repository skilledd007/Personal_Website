import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience'
import AboutMe from './components/pages/AboutMe';

function App() {
  return (
    <> 
      <Router> 
        <Navbar></Navbar>
        <Routes> 
        <Route path = "/" element={<Home/>} />  
        <Route path = "/projects" element ={<Projects />} />
        <Route path = "/experience" element ={<Experience />} />
        <Route path ="/about" element ={<AboutMe />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
