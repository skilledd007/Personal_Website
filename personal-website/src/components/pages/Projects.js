import React from "react";
import '../../App.css'
import './Projects.css'
import './BatteryAdvancer.jpg'
import './nosTicket.jpg'
export default function Projects() {
    return (<> 
    <h1 className='page-name-projects'> PROJECTS </h1> 
      <div className='cardy'> 
          <div className='text-div' > The Battery Advancer </div>
         <img src={require('./BatteryAdvancer.jpg')} className='image-class'/> 
      </div>  
      <div className="card-spacer"/> 
      <div className='cardy'> 
          <div className='text-div' > nosTicket </div>
         <img src={require('./nosTicket.jpg')} className='image-class'/> 
      </div> 
      <div className="card-spacer" />
      <div className='cardy'> 
          <div className='text-div' > The Battery Advancer </div>
         <img src={'https://media1.s-nbcnews.com/i/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.jpg'} className='image-class'/> 
      </div>            
    </>)
}