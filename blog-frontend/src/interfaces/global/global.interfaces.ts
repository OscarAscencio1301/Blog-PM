import { InitialStateAuth } from "../auth/auth.interfaces";
import { InitialStatePosts } from "../posts/post.interfaces";
import { InitialStateIO } from "../ui/ui.unterfaces";

export interface GlobalSlice {
  auth: InitialStateAuth;
  ui: InitialStateIO;
  posts: InitialStatePosts;
}
