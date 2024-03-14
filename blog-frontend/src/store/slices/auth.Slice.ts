import { createSlice } from "@reduxjs/toolkit";

import { InitialStateAuth } from "../../interfaces/auth/auth.interfaces";

const initialState: InitialStateAuth = {
  statusAuth: "analyzing",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.statusAuth = "login";
      state.user = payload;
      state.error = undefined;
    },
    logoutUser: (state) => {
      state.statusAuth = "logout";
      state.user = undefined;
      state.error = undefined;
    },
    errorUser: (state, { payload }) => {
      state.statusAuth = "logout";
      state.user = undefined;
      state.error = payload;
    },
    analyzingUser: (state) => {
      state.statusAuth = "analyzing";
      state.user = undefined;
      state.error = undefined;
    },
  },
});

export const { loginUser, logoutUser, errorUser, analyzingUser } =
  authSlice.actions;
