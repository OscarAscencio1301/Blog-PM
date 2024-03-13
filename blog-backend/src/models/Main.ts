import express from "express";
import cors from "cors";
import { PostsRoutes } from "../routes/posts.routes";
import { sequelize } from "../db/config";

class Main {
  private app: express.Application;
  private port: string;
  private prefix: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "4000";
    this.prefix = "/api/v1";
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(cors());
  }

  routes() {
    this.app.use(`${this.prefix}/posts`, PostsRoutes);
  }

  listen() {
    this.app.listen(this.port, async () => {
      try {
        await sequelize.authenticate();
        console.log("Ok Database");
      } catch (error) {
        console.error("Error Database", error);
      }
      console.log(`Run: ${this.port}`);
    });
  }
}

export default Main;
