import { useDispatch, useSelector } from "react-redux";
import { GlobalSlice } from "../interfaces/global/global.interfaces";
import {
  InitialStatePosts,
  Post,
  PostsResponse,
} from "../interfaces/posts/post.interfaces";
import {
  getPosts,
  addPost,
  viewPost,
  countPosts,
  deletePost,
  loadImage,
} from "../store/slices/post.Slice";
import blogAPI from "../api/config";
import { useEffect } from "react";

export const usePosts = () => {
  const {
    postSelected,
    posts,
    postsLatest,
    postsSearch,
    postView,
    isLoading,
    LatestPosts,
    totalPosts,
    imagePost,
  } = useSelector<GlobalSlice, InitialStatePosts>((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countPosts());
  }, [posts]);

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
      const { data } = await blogAPI.post(`/posts`, { ...post });

      if (!data.ok) return;

      dispatch(addPost(data.post));
    } catch (error) {
      console.log({ error });
    }
  };

  const deletePostAction = async (id: number) => {
    try {
      const { data } = await blogAPI.delete(`/posts/${id}`);
      if (!data.ok) return;
      dispatch(deletePost(id));
    } catch (error) {
      console.log({ error });
    }
  };

  const loadImagePostAction = async (image: File) => {
    try {
      const form = new FormData();
      form.append("image", image);

      const { data } = await blogAPI.post(`/posts/image`, form);
      if (!data.ok) return;
      dispatch(loadImage(data.image));
    } catch (error) {
      return null;
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
    isLoading,
    LatestPosts,
    totalPosts,
    deletePostAction,
    loadImagePostAction,
    imagePost
  };
};
