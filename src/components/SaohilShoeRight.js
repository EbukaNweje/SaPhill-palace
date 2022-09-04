import React from 'react'
import NewData from "../components/NewData.json"
import { FaRegEye } from 'react-icons/fa';
import {  AiOutlineShoppingCart  } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { addBooking, addProduct } from "./Global/ProductState";
import { useNavigate } from "react-router-dom";
import { SpinnerCircularSplit } from "spinners-react"


const SaohilShoeRight = () => {
    let Data = NewData.slice(0, NewData.length - 12)
    console.log(Data)

    const hist = useNavigate();
    const dispatch = useDispatch();
    dispatch(addProduct(NewData));
    
    const ShoesId = '62fc36c08e06434fc603ec97'
    const GetShoesAip = JSON.parse(localStorage.getItem('ClothApi'))
    dispatch(addProduct(GetShoesAip));


    let GetShoesAipData = GetShoesAip.filter((datum) => datum.category === ShoesId )

    return (
     <>
      {
        GetShoesAipData.length ?
        
        GetShoesAipData.map((props)=>(
          <div className='ProductsPageRightCard' key={props._id}> 
          <div className='ProductCardImgDiv'> 
              <img src={props.image} alt="PImage"/> 
          </div>
          <div className='ProductCardDetails'> 
              <h4> <AiOutlineShoppingCart className='IconC' onClick={() => dispatch(addBooking(props))}/> </h4>
              <h4> <FaRegEye className='IconC'  onClick={() => hist(`/Details/${props._id}`)}/> </h4>
          </div>
          <h3> {props.name} </h3>
          <h5> ₦ {props.price} </h5>
          {/* <h6> ₦ {props.DicPrice} </h6> */}
      </div>
        ))
        : <div className='Loading'><SpinnerCircularSplit size={100} thickness={100} speed={100} color="red" secondaryColor="gray" /></div>

      }
     </>
    )
}

export default SaohilShoeRight