import React from 'react'
import SaphilWatchRight from './SaphilWatchRight'
import WatchAda from "../asset/cat9.jpg"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SaphilWatchMain = () => {
    const hist = useNavigate();
    const Mycart = useSelector((state) => state.persisitedReducer.Mycat);
  return (
    <div className='ProductsPage'>
    <div className='ProductsPageWrapper'> 
        <div className='ProductsPageLeft'> 
            <div className='ProductsPageLeftTop'> 
                <h3> Saphill  Watches </h3>
                <ul > 
                </ul>
            </div>

            <span onClick={() => hist(`/ProductPage/${Mycart[11]._id}/${Mycart[11].name}`)}> View All </span>
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