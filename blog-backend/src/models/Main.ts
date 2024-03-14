import express from "express";
import cors from "cors";
import files from "express-fileupload";
import { PostsRoutes } from "../routes/posts.routes";
import { sequelize } from "../db/config";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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
    this.setupSwagger();
  }
  setupSwagger() {
    const swaggerOptions = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Blog PM",
          version: "1.0.0",
          description: "Documentación de Blog PM",
        },
        servers: [
          {
            url: `http://localhost:${this.port}${this.prefix}`,
          },
        ],
      },
      apis: ['./src/routes/*.ts'],
    };

    const swaggerSpec = swaggerJsdoc(swaggerOptions);
    this.app.use("/", swaggerUi.serve);
    this.app.get("/", swaggerUi.setup(swaggerSpec));
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(cors());
    this.app.use(files({
      useTempFiles: true,
      createParentPath: true
    }))
  }

  routes() {
    this.app.use(`${this.prefix}/posts`, PostsRoutes);
  }

  listen() {
    this.app.listen(this.port, async () => {
      try {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log("Ok Database");
      } catch (error) {
        console.error("Error Database", error);
      }
      console.log(`Run: ${this.port}`);
    });
  }
}

export default Main;
