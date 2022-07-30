import React from 'react'
import '../App.css'
import './HeroSection.css'
import { Button } from './Button'
import myVideo from '../videos/video-2.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src = {myVideo} autoPlay loop muted/>

        <h1 style={{color: 'white'}}> A geek, hacker and maker to the core </h1>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Resume
            </Button>
        </div>
    </div>
  )
}

export default HeroSection