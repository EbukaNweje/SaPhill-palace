import React from 'react'
import Menu from './Menu'
import Slider from './Slider'
import "../Css/style.css"
import "../Css/mobile.css"
import NewProduct from './NewProduct'


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
    </div>
  )
}

export default Index