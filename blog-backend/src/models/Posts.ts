import { DataTypes } from "sequelize";
import { sequelize } from "../db/config";
export const Post = sequelize.define("posts", {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
  },
});
