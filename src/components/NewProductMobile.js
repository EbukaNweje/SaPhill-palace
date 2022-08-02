import React from 'react'
import {  AiOutlineHeart, AiOutlineShoppingCart,  } from 'react-icons/ai';
import NewData from "../components/NewData.json"
import Slider from "react-slick";

const NewProductMobile = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3
      };
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

export default NewProductMobile