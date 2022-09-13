import { createSlice } from "@reduxjs/toolkit";
// import Axios from "axios"

const initialState = {
  product: [],
  bookings: [],
  AllCart: [],
  LogId: "",
  GetUser: [],
  Mycat: [],
  AllProduct: []
  // totalRoomCost: 0,
};

const ProductState = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product = payload;
    },
    addBooking: (state, { payload }) => {
      const check = state.bookings.findIndex((el) => el._id === payload._id);
      console.log("this is check",check)
      if (check >= 0) {
        state.bookings[check].QTY += 1;
      } else  {
        const addValue = {
          ...payload,
          QTY: 1,
        };
        state.bookings.push(addValue);
      }
    },
    changeDays: (state, { payload }) => {
      const check = state.bookings.findIndex((el) => el._id === payload._id);
      let checkValue = state.bookings[check].QTY;

      if (state.bookings[check].QTY > 1) {
        state.bookings[check].QTY -= 1;
      } else if (checkValue === 1) {
        state.bookings = state.bookings.filter((fl) => fl._id !== payload._id);
      }
    },
    removeBooking: (state, { payload }) => {
      state.bookings = state.bookings.filter((fl) => fl._id !== payload._id);
    },

    totalState: (state, { payload }) => {
      const { totalCost } = state.bookings.reduce(
        (mainCost, allCost) => {
          const { price, QTY } = allCost;
          const totalPrice = price * QTY;
          mainCost.totalCost += totalPrice;
          mainCost.totalDays += QTY;

          return mainCost;
        },
        { totalCost: 0 }
      );

      state.totalRoomCost = totalCost;
      // state.totalRoomDays = totalDays;
    },

    addId: (state, {payload}) =>{
      state.LogId = payload
      console.log(payload)
  },
  removeId: (state, {payload})=>{
    state.LogId = ""
  },
  GetUser: (state, {payload})=>{
    state.GetUser = payload
    console.log(payload)
  },

  GetAllProduct: (state, {payload})=>{
    state.AllProduct = payload
    console.log(payload)
  },

  GetCat: (state, {payload})=>{
    state.Mycat = payload 
    // console.log(payload)
  },
  signOut: (state) => {
    state.LogId = "";
    state.GetUser = [];
  },
    
  },
});

export const { addBooking, addProduct, removeBooking, changeDays, totalState, addId, removeId,GetUser, GetCat, signOut, GetAllProduct} =
  ProductState.actions;
export default ProductState.reducer;
