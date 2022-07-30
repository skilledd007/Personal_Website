import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'

function App() {
  return (
    <> 
      <Router> 
        <Navbar></Navbar>
        <Routes> 
        <Route path = "/" element={<Home/>} />  
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
