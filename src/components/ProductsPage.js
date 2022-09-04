import React from 'react'
import ProductPageRightCard from './ProductPageRightCard'

const ProductsPage = () => {
  return (
    <div className='ProductsPage'>
        <div className='ProductsPageWrapper'> 
            <div className='ProductsPageLeft'> 
                <div className='ProductsPageLeftTop'> 
                    <h3> New & Product </h3>
                </div>

                {/* <span> View All </span> */}
            </div>
            
            <div className='ProductsPageMid'> 
                <img src='Assets/Images/phones-and-tablets.png' alt="PImage"/> 
            </div>
            
            <div className='ProductsPageRight'> 
                <ProductPageRightCard/>               
            </div>
        </div>
    </div>
  )
}

export default ProductsPage