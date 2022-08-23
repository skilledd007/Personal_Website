import React from 'react'
import '../../App.css'
import './BatteryAdvancer.css'
const BatteryAdvancer = () => {
  return (
    <>
     <h1 className='page-name-advancer'> The Battery Advancer </h1> 
     <div className="div"> 
        <img src={require('./BatteryAdvancer.jpg')} alt="Travel Image" className='image-style'/>
         <div className='div-text'> The Battery Advancer originally started as </div> 
      </div>  
     </>
  )
}

export default BatteryAdvancer