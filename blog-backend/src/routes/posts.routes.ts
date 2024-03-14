import { Router } from "express";
import {
  addPost,
  addPostsMulti,
  deletePost,
  getPost,
  getPosts,
} from "../controllers/posts.controllers";

const router = Router();

router.post("/", addPost);
router.post("/multi", addPostsMulti);
router.get("/", getPosts);
router.get("/:id", getPost);
router.delete("/:id", deletePost);

export {router as PostsRoutes}
