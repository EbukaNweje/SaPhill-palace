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
    <div>Cart</div>
  )
}

export default Cart