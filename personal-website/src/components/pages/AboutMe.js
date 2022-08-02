import React from "react";
import '../../App.css'
import image5 from '../../images/img-5.jpg'
import './AboutMe.css'
export default function AboutMe() {
    return (<> 
    <h1 className='aboutme'> ABOUT ME </h1> 
    <li className='cards__item'> 
          <div className="cards__item__link">
            <figure className='cards__item__pic-wrap'>
              <img src={image5} alt="Travel Image" className='cards__item__img'></img>
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards_item_text' > A nice Picture of Me </h5>
            </div>
          </div>
        </li>

    </>)
}