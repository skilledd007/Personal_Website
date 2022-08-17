import React from "react";
import '../../App.css'
import image5 from '../../images/myWebsitePic.jpg'
import './AboutMe.css'
export default function AboutMe() {
    return (<> 
    <h1 className='page-name-aboutme'> ABOUT ME </h1> 
      <div className="div"> 
        <p> My fascination with Engineering began at a very young Age. I still have fond memories of sitting on the couch as a wide-eyed and optimistic 6 year old being positively
          enthralled by BBC's Top Gear.  
           </p>
        <img src={image5} alt="Travel Image" className='myPicture'></img>
       
      </div>     

    </>)
}