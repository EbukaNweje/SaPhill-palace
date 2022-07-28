import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "react-slick";
import "../Css/style.css"
import "../Css/mobile.css"
import Img1 from "../asset/1.jpg"
// import styled from "styled-components"

const Slider = () => {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      // fade: true,
    };
  return (
    <div className='Sliders'>
    <Sliders {...settings} className="Slid" >
      <div className='SliderImg'>
       <img src= {Img1} alt="slider"/>
      </div>
      <div className='SliderImg'>
       <img src= {Img1} alt="slider"/>
      </div>
      <div className='SliderImg'>
       <img src= {Img1} alt="slider"/>
      </div>
      <div className='SliderImg'>
       <img src= {Img1} alt="slider"/>
      </div>
      <div className='SliderImg'>
       <img src= {Img1} alt="slider"/>
      </div>
      <div className='SliderImg'>
       <img src= {Img1} alt="slider"/>
      </div>
    </Sliders>
    </div>
  )
}

export default Slider
