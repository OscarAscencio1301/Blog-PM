import { createSlice } from "@reduxjs/toolkit";
import { InitialStatePosts } from "../../interfaces/posts/post.interfaces";

const initialState: InitialStatePosts = {
  posts: [],
  postsLatest: [],
  postsSearch: [],
  postSelected: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, { payload }) => {
      state.posts = payload;
    },
    getLatestPosts: (state, { payload }) => {
      state.postsLatest = payload;
    },
    getLatestSearch: (state, { payload }) => {
      state.postsLatest = payload;
    },
    addPost: (state, { payload }) => {
      state.posts.push(payload);
    },
    activePost: (state, { payload }) => {
      state.postSelected = payload;
    },
    updatePost: (state, { payload }) => {
      state.posts = state.posts.map((post) =>
        post.id === payload.id ? payload : post
      );
    },
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post.id !== payload.id);
    },
    cleanPost: (state) => {
      state.postSelected = null;
    },
    cleanPosts: (state) => {
      state.posts = [];
      state.postSelected = null;
    },
  },
});

export const {
  activePost,
  addPost,
  cleanPost,
  cleanPosts,
  deletePost,
  getPosts,
  getLatestPosts,
  updatePost,
} = postSlice.actions;
