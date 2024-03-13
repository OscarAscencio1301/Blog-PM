import { InitialStatePosts } from "../posts/post.interfaces";
import { InitialStateIO } from "../ui/ui.unterfaces";

export interface GlobalSlice {
    ui: InitialStateIO,
    posts: InitialStatePosts
}