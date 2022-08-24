import { createSlice } from "@reduxjs/toolkit";
// import Axios from "axios"

const initialState = {
  product: [],
  bookings: [],
  AllCart: [],
  LogId: "",
  GetUser: []
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
      const check = state.bookings.findIndex((el) => el.id === payload.id);
      if (check >= 0) {
        state.bookings[check].QTY += 1;
      } else {
        const addValue = {
          ...payload,
          QTY: 1,
        };
        state.bookings.push(addValue);
      }
    },
    changeDays: (state, { payload }) => {
      const check = state.bookings.findIndex((el) => el.id === payload.id);
      let checkValue = state.bookings[check].QTY;

      if (state.bookings[check].QTY > 1) {
        state.bookings[check].QTY -= 1;
      } else if (checkValue === 1) {
        state.bookings = state.bookings.filter((fl) => fl.id !== payload.id);
      }
    },
    removeBooking: (state, { payload }) => {
      state.bookings = state.bookings.filter((fl) => fl.id !== payload.id);
    },

    totalState: (state, { payload }) => {
      const { totalCost } = state.bookings.reduce(
        (mainCost, allCost) => {
          const { Price, QTY } = allCost;
          const totalPrice = Price * QTY;
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
  signOut: (state) => {
    state.LogId = "";
    state.GetUser = [];
  },
    
  },
});

export const { addBooking, addProduct, removeBooking, changeDays, totalState, addId, removeId,GetUser, signOut} =
  ProductState.actions;
export default ProductState.reducer;
