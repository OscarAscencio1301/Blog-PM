import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME!,
  process.env.DATABASE_USER!,
  process.env.DATABASE_PASSWORD!,
  {
    dialect: "mysql",
    host: process.env.HOSTNAME!,
    port: Number(process.env.DATABASE_PORT || 3333),
  }
);
