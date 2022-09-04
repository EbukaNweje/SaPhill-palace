import React from 'react'
// import NewData from "../components/NewData.json"
import { FaRegEye } from 'react-icons/fa';
import {  AiOutlineShoppingCart  } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { addBooking, addProduct } from "./Global/ProductState";
import { useNavigate } from "react-router-dom";

const ProductPageRightCard = () => {
  // console.log(Data)
  const hist = useNavigate();
  const dispatch = useDispatch();
  // dispatch(addProduct(NewData));
  
  const Datas = JSON.parse(localStorage.getItem('ClothApi'))
  let Data = Datas.slice(0,8)
  dispatch(addProduct(Datas));


  return (
  
   <>
    {
      Data.map((props)=>(
        <div className='ProductsPageRightCard' key={props._id}> 
        <div className='ProductCardImgDiv'> 
            <img src={props.image} alt="PImage"/> 
        </div>
        <div className='ProductCardDetails'> 
            <h4> <AiOutlineShoppingCart className='IconC'  onClick={() => dispatch(addBooking(props))}/> </h4>
            <h4> <FaRegEye className='IconC' onClick={() => hist(`/Details/${props._id}`)}/> </h4>
        </div>
        <h3> {props.name} </h3>
        <h5> ₦ {props.price} </h5>
        {/* <h6> ₦ {props.DicPrice} </h6> */}
    </div>
      ))
    }
   </>
  )
}

export default ProductPageRightCard