import React from 'react'
import SaPhilHairsRight from './SaPhilHairsRight'
import hairAda from "../asset/cat10.jpg"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const SaPhilHairsMain = () => {
    const hist = useNavigate()
    const Mycart = useSelector((state) => state.persisitedReducer.Mycat);
    return (
        <div className='ProductsPage'>
        <div className='ProductsPageWrapper'> 
            <div className='ProductsPageLeft'> 
                <div className='ProductsPageLeftTop'> 
                    <h3> Saphill Hairs </h3>
                    <ul > 
                    </ul>
                </div>
    
                <span onClick={() => hist(`/ProductPage/${Mycart[3]._id}/${Mycart[3].name}`)} > View All </span>

            </div>
            
            <div className='ProductsPageMid'> 
                <img src={hairAda} alt="PImage"/> 
            </div>
            
            <div className='ProductsPageRight'> 
                <SaPhilHairsRight/>               
            </div>
            </div>
        </div>
      )
}

export default SaPhilHairsMain