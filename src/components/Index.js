import React from 'react'
import Menu from './Menu'
import Slider from './Slider'


const Index = () => {
  return (
    <div className='IndexContainer'>
      <div className='TopContainer'>
          <article >  
             <div className='MenuDiv'><Menu/></div>
            <div className='SliderDiv'><Slider/></div>
          </article>
      </div>

      <div>
        NewProduct
      </div>
    </div>
  )
}

export default Index