import { configureStore } from "@reduxjs/toolkit";
import { SearchSlice } from "./slices/SearchSlice";
import { AuthSlice } from "./slices/AuthSlice";
import { CartSlice } from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    search: SearchSlice.reducer,
    auth: AuthSlice.reducer,
    cart: CartSlice.reducer,
  },
});
