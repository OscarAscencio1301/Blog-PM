import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./slices/post.Slice";
import { uiSlice } from "./slices/ui.Slice";

export const storeBlog = configureStore({
  reducer: {
    posts: postSlice.reducer,
    ui: uiSlice.reducer,
  },
});
