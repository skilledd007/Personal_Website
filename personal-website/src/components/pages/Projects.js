import React from "react";
import '../../App.css'
import './Projects.css'
import './BatteryAdvancer.jpg'
import './nosTicket.jpg'
import { Link } from "react-router-dom";
export default function Projects() {
    return (<> 
    <h1 className='page-name-projects'> PROJECTS </h1> 
    <Link to="/advancer">
      <div className='cardy'> 
          <div className='text-div' > The Battery Advancer </div>
         <img src={require('./BatteryAdvancer.jpg')} className='image-class-advancer'/> 
      </div> 
    </Link> 
    <div className="card-spacer"/> 
    <Link to="/nosTicket"> 
      <div className='cardy'> 
          <div className='text-div' > nosTicket </div>
         <img src={require('./nosTicket.jpg')} className='image-class'/> 
      </div> 
      </Link> 
      <div className="card-spacer"/>          
    </>)
}