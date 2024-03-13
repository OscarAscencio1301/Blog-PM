import { createSlice } from "@reduxjs/toolkit";
import { InitialStatePosts } from "../../interfaces/posts/post.interfaces";

const initialState: InitialStatePosts = {
  isOpenSidebar: true,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const {} = postSlice.actions;
