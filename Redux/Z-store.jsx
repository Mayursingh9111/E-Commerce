import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDate: [],
  userInfo: null,
};

export const Zstore = createSlice({
  name: "Z-store",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productDate.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productDate.push(action.payload);
      }
    },
    deletelItem: (state, action) => {
      state.productDate = state.productDate.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productDate = [];
    },
    incrementQty: (state, action) => {
      const item = state.productDate.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQty: (state, action) => {
      const item = state.productDate.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, deletelItem, resetCart, incrementQty, decrementQty } =
  Zstore.actions;
export default Zstore.reducer;
