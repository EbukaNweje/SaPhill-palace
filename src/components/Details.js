import React, {useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct, addBooking } from "./Global/ProductState";
// import data from "../components/NewData.json"
import Axios from "axios"


const Details = () => {

const { id } = useParams();
// const hist = useNavigate();
const dispatch = useDispatch();
const [myValue, setMyValue] = useState("") 
dispatch(addProduct(myValue));


const URL = `https://saphillpalaceback.up.railway.app/user/product/${id}`


    Axios.get(URL)
    .then(res => setMyValue(res.data.data))


    console.log(myValue)

    // useEffect(()=>{
    //     GetSignleproduct()
    // },[])

  return (
    <div className='DetailsWrapper'>
        <div className='DetailsWrapperArticle'>
            <div className='DetailsWrapperArticle_1'> 
                <h2> {myValue.name}</h2>
                {/* <h4> SKU: Y12S 3GB/32GB </h4> */}
            </div>
            
            <div className='DetailsWrapperArticle_2'> 
                <div className='DetailsWrapperArticle_2Left'> <img src={myValue.image} alt='ProductImg'/> </div>
                <div className='DetailsWrapperArticle_2Right'> 
                    <div className='DetailsWrapperArticle_2Right_1'> 
                        <div className='DetailsWrapperArticle_2Right_1_In'> 
                            <h3> ₦ {myValue.price} </h3>
                            {/* <h5> ₦ {myValue.DicPrice} </h5> */}
                            {/* <span> (-3%) </span> */}
                        </div>
                        <div className='DetailsWrapperArticle_2Right_1_In'> 
                            <h4> Status: </h4>
                            <p> In stock </p>
                        </div>
                    </div>
                    <div className='DetailsWrapperArticle_2Right_1'> 
                        <h2> {myValue.name} </h2>
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
                    <h4> {myValue.name} </h4>
                    <p> {myValue.description}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Details