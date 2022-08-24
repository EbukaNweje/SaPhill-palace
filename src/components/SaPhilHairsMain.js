import React from 'react'
import SaPhilHairsRight from './SaPhilHairsRight'
import hairAda from "../asset/cat10.jpg"

const SaPhilHairsMain = () => {
    return (
        <div className='ProductsPage'>
        <div className='ProductsPageWrapper'> 
            <div className='ProductsPageLeft'> 
                <div className='ProductsPageLeftTop'> 
                    <h3> Saphill Hairs </h3>
                    <ul > 
                    </ul>
                </div>
    
                <span> View All </span>
            </div>
            
            <div className='ProductsPageMid'> 
                <img src={hairAda}/> 
            </div>
            
            <div className='ProductsPageRight'> 
                <SaPhilHairsRight/>               
            </div>
            </div>
        </div>
      )
}

export default SaPhilHairsMain