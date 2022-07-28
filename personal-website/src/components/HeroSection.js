import React from 'react'
import '../App.css'
import './HeroSection.css'
import { Button } from './Button'
import myVideo from '../videos/video-1.mp4'
function HeroSection() {
  return (
    <div className='hero-container'>
        <video autoPlay loop muted>
            <source src={myVideo} type='video/mp4'></source>
        </video>  

        <h1> A geek, hacker and maker to the core </h1>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Resume
            </Button>
        </div>
    </div>
  )
}

export default HeroSection