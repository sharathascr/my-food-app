import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    firstname: null,
    lastname: null,
    email: null,
    isAuthenticated: false,
  },
  reducers: {
    handleLogin(state, action) {
      state.firstname = action.payload.firstName || action.payload.firstname;
      state.lastname = action.payload.lastName || action.payload.lastname;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },
    handleLogout(state) {
      state.firstname = null;
      state.lastname = null;
      state.email = null;
      state.isAuthenticated = false;
    },
  },
});

export const { handleLogin, handleLogout } = AuthSlice.actions;
