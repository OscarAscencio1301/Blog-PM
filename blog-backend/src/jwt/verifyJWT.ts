import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { User } from "../models/Users";


export const verifyJWT = async (
  req: Request | any,
  resp: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("jwt");

    if (!token) {
      return resp.status(400).json({
        ok: false,
        msg: "El token no existe",
      });
    }

    const { id } = jsonwebtoken.verify(token, process.env.SECRET_KEY!) as any;

    const user = await User.findByPk(id);

    if (!user) {
      return resp.status(400).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return resp.status(500).json({
      ok: false,
      msg: "El token no es  válido",
    });
  }
};