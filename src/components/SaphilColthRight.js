import React, { useEffect } from 'react'
// import NewData from "../components/NewData.json"
import { FaRegEye } from 'react-icons/fa';
import {  AiOutlineShoppingCart  } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "./Global/ProductState";
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import { SpinnerCircularSplit } from "spinners-react"
import { GetAllProduct } from "../components/Global/ProductState"

const SaphilColthRight = () => {
    // let Data = NewData.slice(0, NewData.length - 12)
    // const [getclothAip, steGetclothAip] = useState()
    
    const hist = useNavigate();
    const dispatch = useDispatch();
    const MyProduct = useSelector((state) => state.persisitedReducer.AllProduct);
    
    const ClothId = '62fc35eb8e06434fc603ec8f'
    
    // const GetclothAip = JSON.parse(localStorage.getItem('ClothApi'))
    // dispatch(addProduct(getclothAip));
    // console.log("This is Api data ", getclothAip)

    // const GetClothData = () =>{
    //   Axios.get('https://saphill-palace.herokuapp.com/user/products/')
    //   .then(res =>dispatch(GetAllProduct(res.data.data)))
    //   // localStorage.setItem("ClothApi", JSON.stringify(res.data.data))  
    // }

    useEffect(()=>{
      Axios.get('https://saphill-palace.herokuapp.com/user/products/')
      .then(res =>dispatch(GetAllProduct(res.data.data)))
      // localStorage.setItem("ClothApi", JSON.stringify(res.data.data))  
    },[dispatch])

    let GetclothAipData = MyProduct.filter((datum) => datum.category === ClothId )
    console.log("What i am looking for", GetclothAipData)

    return (
     <>
      {
        GetclothAipData.length ?
        GetclothAipData.map((props)=>

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
        
       ): <div className='Loading'><SpinnerCircularSplit size={100} thickness={100} speed={100} color="red" secondaryColor="gray" /></div>
      }
     </>
    )
}

export default SaphilColthRight