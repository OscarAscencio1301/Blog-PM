import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/Users";
import { createJWT } from "../jwt/createJWT";
import { IUser} from "../interfaces/users.interfaces";
import { Model } from "sequelize";

type UserInstance = Model<IUser> & IUser;

export const loginUser = async (req: Request, resp: Response) => {
  try {
    const { email, password } = req.body;

    const user = (await User.findOne({ where: { email } })) as UserInstance

    if (!user) {
      return resp.status(400).json({
        ok: false,
        msg: "Invalid User",
      });
    }

    if (!bcrypt.compareSync(password, user?.password!)) {
      return resp.status(400).json({
        ok: false,
        msg: "Invalid User",
      });
    }

    const token = await createJWT(user.id);

    resp.status(200).json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    resp.status(500).json({
      ok: false,
    });
  }
};

export const registerUser = async (req: Request, resp: Response) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ where: { email } });

    if (userExist) {
      return resp.status(400).json({
        ok: false,
        msg: "Invalid User",
      });
    }

    const payload = {
      name,
      email: email.toLowerCase(),
      password: bcrypt.hashSync(password, 12),
    };

    const user = User.build(payload) as UserInstance

    await user.save() 

    const token = await createJWT(user.id);

    resp.status(201).json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
    });
  }
};

export const renewUser = async (req: Request | any, resp: Response) => {
  try {
    const user = req.user;

    const token = await createJWT(user.id);

    resp.status(200).json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    resp.status(500).json({
      ok: false,
    });
  }
};
