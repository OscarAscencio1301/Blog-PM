import { useDispatch, useSelector } from "react-redux";
import { GlobalSlice } from "../interfaces/global/global.interfaces";
import { postData } from "../api/posts";
import { InitialStatePosts, Post } from "../interfaces/posts/post.interfaces";
import { getPosts, getLatestPosts, addPost } from "../store/slices/post.Slice";

export const usePosts = () => {
  const { postSelected, posts, postsLatest } = useSelector<
    GlobalSlice,
    InitialStatePosts
  >((state) => state.posts);
  const dispatch = useDispatch();

  const getPostsAction = async () => {
    try {
      dispatch(getPosts(postData));
    } catch (error) {
      console.log({ error });
    }
  };
  const getLatestPostsAction = async () => {
    try {
      dispatch(getLatestPosts(postData.slice(0, 3)));
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
    postsLatest,
    getPostsAction,
    getLatestPostsAction,
    createPostsAction
  };
};
