import { createSlice } from "@reduxjs/toolkit";
import { InitialStateIO } from "../../interfaces/ui/ui.unterfaces";

const initialState: InitialStateIO = {
  isOpenSidebar: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});

export const {} = uiSlice.actions;
