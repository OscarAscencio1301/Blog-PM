import { Request, Response } from "express";
import { Post } from "../models/Posts";
import { postsData } from "../services/data";
import { v2 as cloudinary } from "cloudinary";
import { UploadedFile } from "express-fileupload";
import dotenv from "dotenv";
import { Op } from "sequelize";
dotenv.config();
cloudinary.config(process.env.CLOUDINARY_URL!);

export const addPost = async (req: Request, resp: Response) => {
  try {
    const { title, description, author, image } = req.body;
    const post = Post.build({ title, description, author, image });

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
    const posts = await Post.findAll({ where: { isActive: true } });
    const postsLatest = posts.reverse().slice(0, 3);

    resp.status(200).json({ ok: true, posts, postsLatest });
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

    resp.status(200).json({ ok: true, post });
  } catch (error) {
    resp.status(500).json({ ok: false });
  }
};

export const deletePost = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;

    const post = await Post.findByPk(id);

    if (!post) {
      return resp.status(500).json({
        ok: false,
        msg: "The id is invalid",
      });
    }

    await post.update({ isActive: false });

    resp.status(200).json({
      ok: true,
      post,
    });
  } catch (error) {
    resp.status(500).json({ ok: false });
  }
};

export const loadImage = async (req: Request, resp: Response) => {
  try {
    const image: UploadedFile | UploadedFile[] | undefined = req.files?.image;

    if (!image || Array.isArray(image)) {
      return resp.status(400).json({
        ok: false,
        message: "The image is invalid",
      });
    }

    const { secure_url } = await cloudinary.uploader.upload(image.tempFilePath);

    resp.status(200).json({
      ok: true,
      image: secure_url,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ ok: false });
  }
};

export const searchPosts = async (req: Request, resp: Response) => {
  try {
    const { query } = req.query;

    const posts = await Post.findAll({
      where: {
        [Op.or]: [
          {
            author: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            title: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${query}%`,
            },
          },
        ],
      },
    });

    resp.status(200).json({
      ok: true,
      query,
      posts,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ ok: false });
  }
};
