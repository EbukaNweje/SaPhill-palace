import React from 'react'
import SaohilShoeRight from './SaohilShoeRight'
import shoeAda from "../asset/cat1.jpg"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SaphilShoeMain = () => {
    const hist = useNavigate();
    const Mycart = useSelector((state) => state.persisitedReducer.Mycat);

    return (
        <div className='ProductsPage'>
        <div className='ProductsPageWrapper'> 
            <div className='ProductsPageLeft'> 
                <div className='ProductsPageLeftTop'> 
                    <h3> Saphill  Shoes </h3>
                    <ul > 
                    </ul>
                </div>
    
                <span onClick={() => hist(`/ProductPage/${Mycart[2]._id}/${Mycart[2].name}`)} > View All </span>
            </div>
            
            <div className='ProductsPageMid'> 
                <img src={shoeAda} alt="PImage"/> 
            </div>
            
            <div className='ProductsPageRight'> 
                <SaohilShoeRight/>               
            </div>
            </div>
        </div>
      )
}

export default SaphilShoeMain