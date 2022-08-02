import React from 'react'
import Menu from './Menu'
import Slider from './Slider'
import "../Css/style.css"
import "../Css/mobile.css"
import NewProduct from './NewProduct'
import SaPhillClothes from './SaPhillClothes'
import SaPhillMakeup from './SaPhillMakeup'
import SaPhillHairs from './SaPhillHairs'
import SaPhillCaps from './SaPhillCaps'
import SaPhillJewelries from './SaPhillJewelries'
import Deliv from './Deliv'


const Index = () => {
  return (
    <div className='IndexContainer'>
      <div className='TopContainer'>
          <article>  
             <div className='MenuDiv'><Menu/></div>
            <div className='SliderDiv'><Slider/></div>
          </article>
      </div>

      <div className='NewProduct'>
        <article className='NewProductAll'>
          <div className='NewProductHead'>
            <h6>NewProduct</h6>
            <span>See All</span>
          </div>
           <div className='NewPor'>
           <NewProduct/>
           </div>
        </article>
      </div>

      <div className='NewProduct'>
        <article className='NewProductAll'>
          <div className='NewProductHead'>
            <h6>SaPhill Clothes</h6>
            <span>See All</span>
          </div>
           <div className='NewPor'>
           <SaPhillClothes/>
           </div>
        </article>
      </div>

      <div className='NewProduct'>
        <article className='NewProductAll'>
          <div className='NewProductHead'>
            <h6>SaPhill Make-up</h6>
            <span>See All</span>
          </div>
           <div className='NewPor'>
           <SaPhillMakeup/>
           </div>
        </article>
      </div>

      <div className='NewProduct'>
        <article className='NewProductAll'>
          <div className='NewProductHead'>
            <h6>SaPhill Hairs</h6>
            <span>See All</span>
          </div>
           <div className='NewPor'>
           <SaPhillHairs/>
           </div>
        </article>
      </div>

      <div className='NewProduct'>
        <article className='NewProductAll'>
          <div className='NewProductHead'>
            <h6>SaPhill Caps</h6>
            <span>See All</span>
          </div>
           <div className='NewPor'>
           <SaPhillCaps/>
           </div>
        </article>
      </div>

      <div className='NewProduct'>
        <article className='NewProductAll'>
          <div className='NewProductHead'>
            <h6>SaPhill Jewelries</h6>
            <span>See All</span>
          </div>
           <div className='NewPor'>
           <SaPhillJewelries/>
           </div>
        </article>
      </div>

      <div className='DelivC'>
        <Deliv/>
      </div>
    </div>
  )
}

export default Index