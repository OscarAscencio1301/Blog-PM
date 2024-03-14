import { Router } from "express";
import {
  addPost,
  addPostsMulti,
  deletePost,
  getPost,
  getPosts,
  loadImage,
} from "../controllers/posts.controllers";

const router = Router();

router.post("/", addPost);
router.post("/multi", addPostsMulti);
router.get("/", getPosts);
router.get("/:id", getPost);
router.delete("/:id", deletePost);
router.post("/image", loadImage);

export {router as PostsRoutes}
