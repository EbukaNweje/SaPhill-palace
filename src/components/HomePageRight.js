import React from 'react'
import Home1 from "../asset/home1.jpg"
import home2 from "../asset/home2.jpg"

const HomePageRight = () => {
  return (
    <div className='HomePageRight'>
        <div className='HomePageRightImg'> 
            <img src={Home1} alt="Ade1"/>
        </div>
        <div className='HomePageRightImg'> 
          <img src={home2} alt="Ade1"/>
        </div>
    </div>
  )
}

export default HomePageRight