import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import BatteryAdvancer from '../../images/BatteryAdvancer.jpeg'
import NosTicket from '../../images/nosTicket.jpg'
function Cards() {
  return (
    <div className='cards'> 
    <h1> Featured Projects </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src={BatteryAdvancer} text="Battery Advancer" label="Projects" path='/projects'/>
                    <CardItem src={NosTicket} text="NosTicket App" label="App Development" path='/projects'/>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards