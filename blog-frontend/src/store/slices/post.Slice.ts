import { createSlice } from "@reduxjs/toolkit";
import { InitialStatePosts } from "../../interfaces/posts/post.interfaces";

const initialState: InitialStatePosts = {
  isLoading: true,
  posts: [],
  postsLatest: [],
  postsSearch: [],
  postSelected: null,
  postView: null,
  totalPosts: 0,
  LatestPosts: 0,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, { payload }) => {
      state.isLoading = true;
      state.posts = payload.posts;
      state.postsLatest = payload.postsLatest;
      state.imagePost = undefined;
    },
    getLatestSearch: (state, { payload }) => {
      state.postsLatest = payload;
    },
    addPost: (state, { payload }) => {
      state.posts.push(payload);
      state.imagePost = undefined;
    },
    viewPost: (state, { payload }) => {
      state.postView = payload;
      state.isLoading = false;
    },
    activePost: (state, { payload }) => {
      state.postSelected = payload;
    },
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post.id !== payload);
    },
    countPosts: (state) => {
      state.totalPosts = state.posts.length;
      state.LatestPosts = state.postsLatest.length;
    },
    loadImage: (state, { payload }) => {
      state.imagePost = payload;
    },
  },
});

export const {
  activePost,
  addPost,
  deletePost,
  getPosts,
  viewPost,
  countPosts,
  loadImage,
} = postSlice.actions;
