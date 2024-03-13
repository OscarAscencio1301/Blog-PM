import { Request, Response } from "express";

export const addPost = async (req: Request, resp: Response) => {
  try {
    resp.status(201).json({ ok: true, msg: 0 });
  } catch (error) {
    resp.status(500).json({ ok: false });
  }
};

export const getPosts = async (req: Request, resp: Response) => {
  try {
    resp.status(201).json({ ok: true });
  } catch (error) {
    resp.status(500).json({ ok: false });
  }
};

export const getPost = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;
    resp.status(201).json({ ok: true, id });
  } catch (error) {
    resp.status(500).json({ ok: false });
  }
};

export const updatePost = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;
    resp.status(201).json({ ok: true, id });
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
