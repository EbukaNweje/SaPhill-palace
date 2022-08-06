import React from 'react'
import datas from "../components/Cartigories.json"
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "./Global/ProductState";
import "../Css/style.css"
import "../Css/mobile.css"
import Menu from './Menu';
import { AiOutlineShoppingCart  } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa';


const ProductPage = () => {
const { id } = useParams();
console.log(id)
// const hist = useNavigate();
const dispatch = useDispatch();
dispatch(addProduct(datas));
const myValue = datas[id - 1];
console.log(myValue.Product)
  return (
    <div className='ProductPageWrapper'>
        <article> 
            <h2>{myValue.CartigoriesName}</h2>

            <div className='ProductPageIn2'> 
                <div className='ProductPageIn2_1'><Menu/></div>
                <div className='ProductPageIn2_2'> 
                    <h3> 1 product found </h3>
                    <div className='CartigoriesProductMain'> 
                        {
                            myValue.Product.map((item)=>( 
                            <div className='CartigoriesProductCard' key={item.id}>
                            <img src={item.Image} alt='ProductImg' className='CartigoriesProductImg'/>
                            <h3> {item.Name} </h3>
                            <div className='PriceAdd'> 
                                <span>&#8358; {item.Price} </span>
                                <p className='ProductPriceDic'>&#8358; {item.DicPrice} </p>
                            </div>
                            <div className='AddButton'>
                            <AiOutlineShoppingCart className='IconC'/>
                            <FaRegEye className='IconC'/>
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