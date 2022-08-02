import React from "react";
import '../../App.css'
import image5 from '../../images/img-5.jpg'
import '../../../src/components/pages/Cards.css'
export default function AboutMe() {
    return (<> 
    <h1 className='aboutme'> ABOUT ME </h1> 
    <div className=".image-container"> 
            <figure className='cards__item__pic-wrap' data-category="My Story">
                
                <img src={image5} alt="Travel Image"></img>

            </figure>
            <div className='cards__item__info'>
              <h5 className='cards_item_text' > A Nice pic of Me </h5>
            </div>
    </div>

    </>)
}