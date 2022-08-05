import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct, addBooking } from "./Global/ProductState";
import data from "../components/NewData.json"


const Details = () => {
const { id } = useParams();
// const hist = useNavigate();
const dispatch = useDispatch();
dispatch(addProduct(data));
const myValue = data[id - 1];
  return (
    <div className='DetailsWrapper'>
        <div className='DetailsWrapperArticle'>
            <div className='DetailsWrapperArticle_1'> 
                <h2> {myValue.Name}</h2>
                {/* <h4> SKU: Y12S 3GB/32GB </h4> */}
            </div>
            
            <div className='DetailsWrapperArticle_2'> 
                <div className='DetailsWrapperArticle_2Left'> <img src={myValue.Image} alt='ProductImg'/> </div>
                <div className='DetailsWrapperArticle_2Right'> 
                    <div className='DetailsWrapperArticle_2Right_1'> 
                        <div className='DetailsWrapperArticle_2Right_1_In'> 
                            <h3> ₦ {myValue.Price} </h3>
                            <h5> ₦ {myValue.DicPrice} </h5>
                            {/* <span> (-3%) </span> */}
                        </div>
                        <div className='DetailsWrapperArticle_2Right_1_In'> 
                            <h4> Status: </h4>
                            <p> In stock </p>
                        </div>
                    </div>
                    <div className='DetailsWrapperArticle_2Right_1'> 
                        <h2> {myValue.Name} </h2>
                    </div>
                    <div className='DetailsWrapperArticle_2Right_1'> 
                        <button  onClick={() => {
                     dispatch(addBooking(myValue));
                    }}> Add to Cart </button>
                    </div>
                </div>
            </div>

            <div className='DetailsWrapperArticle_3'>
                <div className='DetailsWrapperArticle_3In1'>
                    <h2> Description </h2>
                </div>
                <div className='DetailsWrapperArticle_3In2'> 
                    <h4> {myValue.Name} </h4>
                    <p> {myValue.Descrition}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Details