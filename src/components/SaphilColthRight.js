import React from 'react'
import NewData from "../components/NewData.json"
import { FaRegEye } from 'react-icons/fa';
import {  AiOutlineShoppingCart  } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { addBooking, addProduct } from "./Global/ProductState";
import { useNavigate } from "react-router-dom";

const SaphilColthRight = () => {
    let Data = NewData.slice(0, NewData.length - 12)
    console.log(Data)

    const hist = useNavigate();
    const dispatch = useDispatch();
    dispatch(addProduct(NewData));

    return (
     <>
      {
        Data.map((props)=>(
          <div className='ProductsPageRightCard' key={props.id}> 
          <div className='ProductCardImgDiv'> 
              <img src={props.Image} alt="PImage"/> 
          </div>
          <div className='ProductCardDetails'> 
              <h4> <AiOutlineShoppingCart className='IconC' onClick={() => dispatch(addBooking(props))}/> </h4>
              <h4> <FaRegEye className='IconC' onClick={() => hist(`/Details/${props.id}`)}/> </h4>
          </div>
          <h3> {props.Name} </h3>
          <h5> ₦ {props.Price} </h5>
          <h6> ₦ {props.DicPrice} </h6>
      </div>
        ))
      }
     </>
    )
}

export default SaphilColthRight