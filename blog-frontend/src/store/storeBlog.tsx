import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./slices/post.Slice";
import { uiSlice } from "./slices/ui.Slice";
import { authSlice } from "./slices/auth.Slice";

export const storeBlog = configureStore({
  reducer: {
    auth: authSlice.reducer,
    posts: postSlice.reducer,
    ui: uiSlice.reducer,
  },
});
