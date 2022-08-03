import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addBooking,
  changeDays,
  removeBooking,
  totalState,
} from "./Global/ProductState";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const hist = useNavigate();
  const data = useSelector((state) => state.persisitedReducer.bookings);
  const totalCostState = useSelector(
    (state) => state.persisitedReducer.totalRoomCost
  );
  const days = useSelector((state) => state.persisitedReducer.totalRoomDays);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(totalCostState);
  console.log("total", totalCostState);
  console.log(data);

  useEffect(() => {
    dispatch(totalState());
  }, [data]);
  return (
    <div className="CartContainer">
        <div className="CartHeader">
          <h2>Shopping Cart</h2>
        </div>
      
      <div className="CartList">
        <article className="CartBody">
          <div className="CartListHead">
            <div className="Prd"><h5>	PRODUCT</h5></div>
            <div className="Prc"><h5>PRICE</h5></div>
            <div className="Qutt"><h5>QUANTITY</h5></div>
            <div><h5>TOTAL</h5></div>
          </div>

          <div className="CartPropsBody">
              <div className="CartPoprs">
                
              </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Cart