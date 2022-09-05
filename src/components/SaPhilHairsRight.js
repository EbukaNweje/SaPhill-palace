import React from 'react'
// import NewData from "../components/NewData.json"
import { FaRegEye } from 'react-icons/fa';
import {  AiOutlineShoppingCart  } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { addBooking,  } from "./Global/ProductState";
import { useNavigate } from "react-router-dom";
import { SpinnerCircularSplit } from "spinners-react"
import "../Css/styleC.css"
import "../Css/mobileC.css"

const SaPhilHairsRight = () => {
    // let Data = NewData.slice(0, NewData.length - 12)
    // console.log(Data)

    const hist = useNavigate();
    const dispatch = useDispatch();
    const MyProduct = useSelector((state) => state.persisitedReducer.AllProduct);
    // dispatch(addProduct(NewData));

    const HairsId = '62fc37008e06434fc603ec9a'
    // const GetHairsAip = JSON.parse(localStorage.getItem('ClothApi'))
    // dispatch(addProduct(GetHairsAip));


    let GetHairsAipData = MyProduct.filter((datum) => datum.category === HairsId )

    return (
     <>

      {
        GetHairsAipData.length ? 
        
          GetHairsAipData.map((props)=>(
            <div className='ProductsPageRightCard' key={props._id}> 
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
          ))
        : <div className='Loading'><SpinnerCircularSplit size={100} thickness={100} speed={100} color="red" secondaryColor="gray" /></div>
      }
     </>
    )
}

export default SaPhilHairsRight