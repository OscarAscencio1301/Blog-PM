"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRoutes = void 0;
const express_1 = require("express");
const posts_controllers_1 = require("../controllers/posts.controllers");
const router = (0, express_1.Router)();
exports.PostsRoutes = router;
router.post("/", posts_controllers_1.addPost);
router.get("/", posts_controllers_1.getPosts);
router.get("/:id", posts_controllers_1.getPost);
router.delete("/:id", posts_controllers_1.deletePost);
router.post("/multi", posts_controllers_1.addPostsMulti);
router.post("/image", posts_controllers_1.loadImage);
router.get("/search/post", posts_controllers_1.searchPosts);
//# sourceMappingURL=posts.routes.js.map