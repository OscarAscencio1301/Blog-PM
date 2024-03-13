import { createSlice } from "@reduxjs/toolkit";
import { InitialStatePosts } from "../../interfaces/posts/post.interfaces";

const initialState: InitialStatePosts = {
  posts: [],
  postSelected: null
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const {} = postSlice.actions;
