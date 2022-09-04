import React from 'react'
import SaphilColthRight from './SaphilColthRight'
import ClothAda from "../asset/cat8.jpg"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const SaphilClothMain = () => {
    const hist = useNavigate();
    const Mycart = useSelector((state) => state.persisitedReducer.Mycat);
  return (
    <div className='ProductsPage'>
    <div className='ProductsPageWrapper'> 
        <div className='ProductsPageLeft'> 
            <div className='ProductsPageLeftTop'> 
                <h3> Saphill  Clothes </h3>
                <ul > 
                </ul>
            </div>

            <span onClick={() => hist(`/ProductPage/${Mycart[1]._id}/${Mycart[1].name}`)} > View All </span>
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