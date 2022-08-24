import React from 'react'
import "../Css/styleC.css"
import "../Css/mobileC.css"
import Categories from './Categories'
import HomePageRight from './HomePageRight'
import ProductsPage from './ProductsPage'
import SaphilClothMain from './SaphilClothMain'
import SaphilWatchMain from './SaphilWatchMain'
import SaphilShoeMain from './SaphilShoeMain'
import SaPhilHairsMain from './SaPhilHairsMain'

const HomePage = () => {
  return (
    <div className='HomePage'>
        <div className='HomePageWrapper'> 
            <div className='HomePageLeft'> 
            <Categories/>
            </div>
            <HomePageRight/>
        </div>

        <div className='NewProducts'>
          <ProductsPage/>
        </div>

        <div className='NewProducts'>
          <SaphilClothMain/>
        </div>

        <div className='NewProducts'>
          <SaphilWatchMain/>
        </div>

        <div className='NewProducts'>
          <SaphilShoeMain/>
        </div>

        <div className='NewProducts'>
          <SaPhilHairsMain/>
        </div>
    </div>
  )
}

export default HomePage