import React from 'react'
import SaohilShoeRight from './SaohilShoeRight'
import shoeAda from "../asset/cat1.jpg"

const SaphilShoeMain = () => {
    return (
        <div className='ProductsPage'>
        <div className='ProductsPageWrapper'> 
            <div className='ProductsPageLeft'> 
                <div className='ProductsPageLeftTop'> 
                    <h3> Saphill  Shoes </h3>
                    <ul > 
                    </ul>
                </div>
    
                <span> View All </span>
            </div>
            
            <div className='ProductsPageMid'> 
                <img src={shoeAda}/> 
            </div>
            
            <div className='ProductsPageRight'> 
                <SaohilShoeRight/>               
            </div>
            </div>
        </div>
      )
}

export default SaphilShoeMain