import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "../Css/style.css"
import "../Css/mobile.css"

import {  AiOutlineHeart, AiOutlineShoppingCart,  } from 'react-icons/ai';
import NewData from "../components/NewData.json"

const SaPhillClothes = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth < 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  let settings;

    
      isDesktop ? 
    settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3
  }: 
      settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      }

  return (
    <div className='ProductSlider'>
    <Slider {...settings} className= "ProductSliderSlider">
        {
         NewData?.map((props)=>(
           <div className='NewPrudCard' key={props.id}>
           <img src={props.Image} alt='ProductImg' className='ProductImg'/>
           <h3>{props.Name}</h3>
           <span>&#8358; {props.Price} </span>
           <p className='ProductPriceDic'>&#8358; {props.DicPrice} </p>
           <div className='AddButton'>
             <AiOutlineShoppingCart className='IconC'/>
             <AiOutlineHeart className='IconC'/>
           </div>
         </div>
        ))
      }
     </Slider>
    </div>
  )
}

export default SaPhillClothes