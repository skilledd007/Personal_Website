import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'> 
    <h1> Featured Projects </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src="../../images/img-9.jpg" text="Battery Advancer" label="Projects" path='/projects'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards