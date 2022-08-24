import React from 'react'
import SaphilColthRight from './SaphilColthRight'
import ClothAda from "../asset/cat8.jpg"


const SaphilClothMain = () => {
  return (
    <div className='ProductsPage'>
    <div className='ProductsPageWrapper'> 
        <div className='ProductsPageLeft'> 
            <div className='ProductsPageLeftTop'> 
                <h3> Saphill  Clothes </h3>
                <ul > 
                </ul>
            </div>

            <span> View All </span>
        </div>
        
        <div className='ProductsPageMid'> 
            <img src={ClothAda} alt="PImage"/> 
        </div>
        
        <div className='ProductsPageRight'> 
            <SaphilColthRight/>               
        </div>
        </div>
    </div>
  )
}

export default SaphilClothMain