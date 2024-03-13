import { createSlice } from "@reduxjs/toolkit";
import { InitialStateIO } from "../../interfaces/ui/ui.unterfaces";

const initialState: InitialStateIO = {
  isOpenSidebar: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeStatusSidebar(state) {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
  },
});

export const { changeStatusSidebar } = uiSlice.actions;
