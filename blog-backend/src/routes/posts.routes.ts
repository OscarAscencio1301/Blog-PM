import { Router } from "express";
import {
  addPost,
  addPostsMulti,
  deletePost,
  getPost,
  getPosts,
  loadImage,
  searchPosts,
} from "../controllers/posts.controllers";

const router = Router();

router.post("/", addPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.delete("/:id", deletePost);
router.post("/multi", addPostsMulti);
router.post("/image", loadImage);
router.get("/search/post", searchPosts);

export {router as PostsRoutes}
