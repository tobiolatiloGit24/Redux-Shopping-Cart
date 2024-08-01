/**
 * Here we have the Global-Store/ Redux-Store where we manage all the slices
 * To use the react redux in your app project you import the redux store in the root level to have access to the store globally in the index.js file by Providing the store in the root file.
 */

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
