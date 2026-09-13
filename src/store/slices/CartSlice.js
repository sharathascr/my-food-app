import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartCount: 0,
    cartIndex: 0,
  },
  reducers: {
    setCartCount(state, action) {
      state.cartCount = action.payload;
    },
    setCartIndex(state) {
      state.cartIndex += 1;
    },
  },
});

export const { setCartCount, setCartIndex } = CartSlice.actions;
