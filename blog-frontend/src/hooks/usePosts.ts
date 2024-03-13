import { useDispatch, useSelector } from "react-redux";
import { GlobalSlice } from "../interfaces/global/global.interfaces";
import {
  InitialStatePosts,
  Post,
  PostsResponse,
} from "../interfaces/posts/post.interfaces";
import { getPosts, addPost, viewPost } from "../store/slices/post.Slice";
import blogAPI from "../api/config";

export const usePosts = () => {
  const { postSelected, posts, postsLatest, postsSearch, postView, isLoading } = useSelector<
    GlobalSlice,
    InitialStatePosts
  >((state) => state.posts);
  const dispatch = useDispatch();

  const getPostsAction = async () => {
    try {
      const { data } = await blogAPI.get<PostsResponse>("/posts");
      if (!data.ok) return;
      dispatch(getPosts(data));
    } catch (error) {
      console.log({ error });
    }
  };

  const getPostAction = async (id: number) => {
    try {
      const { data } = await blogAPI.get(`/posts/${id}`);
      if (!data.ok) return;
      dispatch(viewPost(data.post));
    } catch (error) {
      console.log({ error });
    }
  };

  const createPostsAction = async (post: Post) => {
    try {
      dispatch(addPost(post));
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    posts,
    postSelected,
    postsSearch,
    postView,
    postsLatest,
    getPostsAction,
    createPostsAction,
    getPostAction,
    isLoading
  };
};
