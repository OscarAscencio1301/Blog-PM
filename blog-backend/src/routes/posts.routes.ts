import { Router } from "express";
import {
  addPost,
  addPostsMulti,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.controllers";

const router = Router();

router.post("/", addPost);
router.post("/multi", addPostsMulti);
router.get("/", getPosts);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export {router as PostsRoutes}
