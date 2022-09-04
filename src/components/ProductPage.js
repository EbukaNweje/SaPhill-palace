import React from 'react'
import datas from "../components/Cartigories.json"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addBooking } from "./Global/ProductState";
import "../Css/styleC.css"
import Categories from './Categories';
import { AiOutlineShoppingCart  } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const ProductPage = () => {
const { id } = useParams();
// console.log("This is Allpage id",id)
const hist = useNavigate();
const dispatch = useDispatch();
dispatch(addProduct(datas));
const Mycart = useSelector((state) => state.persisitedReducer.Mycat);
// console.log(myValue.Product)

const GetAllProductApi = JSON.parse(localStorage.getItem('ClothApi'))

let myValue = GetAllProductApi.filter((datum) => datum.category === id )
let myValueCAt = Mycart.filter((datumcat) => datumcat._id === id )
// const GetAllProductApiLength = GetAllProductApi.length
// const myValue = GetAllProductApi[GetAllProductApiLength - 1];
console.log("This is Allpage GetAllProductApi",myValueCAt)



  return (
    <div className='ProductPageWrapper'>
        <article> 
            <h2>{myValueCAt[0].name}</h2>
            <div className='ProductPageIn2'> 
                <div className='ProductPageIn2_1'><Categories className="ShopCat"/></div>
                <div className='ProductPageIn2_2'> 
                    <h3> {myValue.length} product found </h3>
                    <div className='CartigoriesProductMain'> 
                        {
                            myValue.map((item)=>( 
                            <div className='CartigoriesProductCard' key={item._id}>
                            <img src={item.image} alt='ProductImg' className='CartigoriesProductImg'/>
                            <h3> {item.name} </h3>
                            <div className='PriceAdd'> 
                                <span>&#8358; {item.price} </span>
                            </div>
                            <div className='AddButton'>
                                <AiOutlineShoppingCart className='IconC'  onClick={() => dispatch(addBooking(item))}/>
                                <FaRegEye className='IconC'  onClick={() => hist(`/Details/${item._id}`)}/>
                            </div>
                        </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </article>
    </div>
  )
}

export default ProductPage