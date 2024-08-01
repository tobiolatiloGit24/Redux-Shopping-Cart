/**
 * create the slice
 * initialize initial state
 * slice => name, declare initial state, dispatch the actions.
 * To access the item added to cart with redux store, we make use of useSelector hook from react-redux tool kit. in the cart component
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
