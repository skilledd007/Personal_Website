import React from 'react'
import '../../App.css'
import './NosTicket.css'
const NosTicket = () => {
  return (
    <>
        <h1 className='page-name-nosTicket'> nosTicket App </h1> 
       <div className='div'> 
            <img src={require('./nosTicket.jpg')} className='image-style'/>
            <div className='div-text'>
                As cities become more concerned about safety 
            </div>
        </div>
    </>
  )
}

export default NosTicket