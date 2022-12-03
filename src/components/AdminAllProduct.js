import React from 'react'
import { useSelector } from "react-redux";
import axios from "axios"

const AdminAllProduct = () => {
  const MyProduct = useSelector((state) => state.persisitedReducer.AllProduct);
  // console.log(MyProduct)

  const deleteHandler = async (_id) => {
    try{
      await axios.delete(`https://saphillpalaceback.up.railway.app/user/product/${_id}`)
      window.location.reload()
    }catch(error){
      console.log(error.response)
      
    }
   
  };

  return (
    <div className='AdminAllProduct'>
      {
        MyProduct.map((props)=>(
          <div className='ProductRow' key={props._id}> 
          <div className='ProImg'><img src={props.image} alt="Productimage" /> </div>
          <h4> {props.name} </h4>
          <h4> {props.quantity} </h4>
          {/* <h4> Description </h4> */}
          <h4> {props.price}  </h4>
          <h4> Stock</h4>
          <button onClick={(_id)=>deleteHandler(props._id)}>Delete</button>
      </div>
        ))
      }

    </div>
  )
}

export default AdminAllProduct