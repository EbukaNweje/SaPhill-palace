import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from 'react-icons/fa';
import {  AiOutlineShoppingCart  } from 'react-icons/ai';
import { addBooking } from "./Global/ProductState";

const Search = () => {
    const hist = useNavigate();
    const dispatch = useDispatch();
    const Mysearch = useSelector((state) => state.persisitedReducer.SearchItem);
    // const {element} = find
    // console.log("the is it ooo", Mysearch)
  return (
    <div className='Searchitem'>
       {
       Mysearch.length? 
        Mysearch.map((props)=>( 
            <div className='ProductsPageRightCard searchcard' key={props._id}> 
      <div className='ProductCardImgDiv'> 
          <img src={props.image} alt="PImage"/> 
      </div>
      <div className='ProductCardDetails'> 
          <h4> <AiOutlineShoppingCart className='IconC' onClick={() => dispatch(addBooking(props))}/> </h4>
          <h4> <FaRegEye className='IconC' onClick={() => hist(`/Details/${props._id}`)}/> </h4>
      </div>
      <h3> {props.name} </h3>
      <h5> ₦ {props.price} </h5>
  </div>
        )): "No item Match"
       }
    </div>
  )
}

export default Search