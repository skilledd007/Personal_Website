import React from "react";
import '../../App.css'
import image5 from '../../images/myWebsitePic.jpg'
import './AboutMe.css'
export default function AboutMe() {
    return (<> 
    <h1 className='aboutme'> ABOUT ME </h1> 
      <div className="div"> 
        <p> Example text for a description of who I am </p>
        <img src={image5} alt="Travel Image" className='myPicture'></img>
       
      </div>     

    </>)
}