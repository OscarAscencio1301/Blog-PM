import { Request, Response } from "express";
import { Post } from "../models/Posts";
import { postsData } from "../services/data";

export const addPost = async (req: Request, resp: Response) => {
  try {
    const { title, description, author } = req.body;
    const post = Post.build({ title, description, author });

    await post.save();

    resp.status(201).json({ ok: true, post });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ ok: false });
  }
};

export const addPostsMulti = async (req: Request, resp: Response) => {
  try {
    await Post.destroy({
      where: {},
      truncate: true,
    });

    await Post.bulkCreate(postsData);
    resp.status(201).json({ ok: true });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ ok: false });
  }
};

export const getPosts = async (req: Request, resp: Response) => {
  try {
    const posts = await Post.findAll();
    const postsLatest = posts.reverse().slice(0, 3);

    resp.status(201).json({ ok: true, posts, postsLatest });
  } catch (error) {
    resp.status(500).json({ ok: false });
  }
};

export const getPost = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post) {
      return resp.status(500).json({
        ok: false,
        msg: "The id is invalid",
      });
    }

    resp.status(201).json({ ok: true, post });
  } catch (error) {
    resp.status(500).json({ ok: false });
  }
};

export const deletePost = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;
    resp.status(201).json({ ok: true, id });
  } catch (error) {
    resp.status(500).json({ ok: false });
  }
};
