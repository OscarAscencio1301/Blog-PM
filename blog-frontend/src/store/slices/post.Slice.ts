import { createSlice } from "@reduxjs/toolkit";
import { InitialStatePosts } from "../../interfaces/posts/post.interfaces";

const initialState: InitialStatePosts = {
  isLoading: true,
  posts: [],
  postsLatest: [],
  postsSearch: [],
  postSelected: null,
  postView: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, { payload }) => {
      state.isLoading = true;
      state.posts = payload.posts;
      state.postsLatest = payload.postsLatest;
    },
    getLatestSearch: (state, { payload }) => {
      state.postsLatest = payload;
    },
    addPost: (state, { payload }) => {
      state.posts.push(payload);
    },
    viewPost: (state, { payload }) => {
      state.postView = payload;
      state.isLoading = false;
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
  updatePost,
  viewPost,
} = postSlice.actions;
