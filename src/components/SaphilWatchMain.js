import React from 'react'
import SaphilWatchRight from './SaphilWatchRight'
import WatchAda from "../asset/cat9.jpg"

const SaphilWatchMain = () => {
  return (
    <div className='ProductsPage'>
    <div className='ProductsPageWrapper'> 
        <div className='ProductsPageLeft'> 
            <div className='ProductsPageLeftTop'> 
                <h3> Saphill  Watchs </h3>
                <ul > 
                </ul>
            </div>

            <span> View All </span>
        </div>
        
        <div className='ProductsPageMid'> 
            <img src={WatchAda} alt="PImage"/> 
        </div>
        
        <div className='ProductsPageRight'> 
            <SaphilWatchRight/>               
        </div>
        </div>
    </div>
  )
}

export default SaphilWatchMain