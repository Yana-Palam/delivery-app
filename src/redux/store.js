import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";
import filterReducer from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
  },
});
