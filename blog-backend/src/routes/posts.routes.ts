import { Router } from "express";
import {
  addPost,
  addPostsMulti,
  deletePost,
  getPost,
  getPosts,
  loadImage,
  searchPosts,
} from "../controllers/posts.controllers";
import { check } from "express-validator";
import { verifyErrors } from "../middlewares/verifyError";

const router = Router();

/**
 * @swagger
 * /api/v1/posts:
 *   post:
 *     summary: Agrega un nuevo post.
 *     description: Agrega un nuevo post con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post creado exitosamente.
 *       500:
 *         description: Error del servidor.
 */
router.post(
  "/",
  [
    check("title", "The title is required").notEmpty(),
    check("author", "The author is required").notEmpty(),
    check("description", "The author is required").notEmpty(),
    verifyErrors
  ],
  addPost
);

/**
 * @swagger
 * /api/v1/posts:
 *   get:
 *     summary: Obtiene todos los posts.
 *     description: Retorna una lista de todos los posts.
 *     responses:
 *       200:
 *         description: Lista de posts.
 *       500:
 *         description: Error del servidor.
 */
router.get("/", getPosts);

/**
 * @swagger
 * /api/v1/posts/{id}:
 *   get:
 *     summary: Obtiene un post por su ID.
 *     description: Retorna un post basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del post a obtener.
 *     responses:
 *       200:
 *         description: Detalles del post.
 *       404:
 *         description: Post no encontrado.
 *       500:
 *         description: Error del servidor.
 */
router.get("/:id", getPost);

/**
 * @swagger
 * /api/v1/posts/{id}:
 *   delete:
 *     summary: Elimina un post por su ID.
 *     description: Elimina un post basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del post a eliminar.
 *     responses:
 *       200:
 *         description: Post eliminado exitosamente.
 *       404:
 *         description: Post no encontrado.
 *       500:
 *         description: Error del servidor.
 */
router.delete("/:id", deletePost);

/**
 * @swagger
 * /api/v1/posts/multi:
 *   post:
 *     summary: Agrega varios posts.
 *     description: Agrega varios posts con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *     responses:
 *       201:
 *         description: Posts creados exitosamente.
 *       400:
 *         description: Solicitud incorrecta.
 *       500:
 *         description: Error del servidor.
 */
router.post("/multi", addPostsMulti);

/**
 * @swagger
 * /api/v1/posts/image:
 *   post:
 *     summary: Sube una imagen para un post.
 *     description: Sube una imagen para un post existente.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Imagen subida exitosamente.
 *       400:
 *         description: Solicitud incorrecta.
 *       500:
 *         description: Error del servidor.
 */
router.post("/image", loadImage);

/**
 * @swagger
 * /api/v1/posts/search/post:
 *   get:
 *     summary: Busca posts.
 *     description: Busca posts por título o contenido.
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Término de búsqueda.
 *     responses:
 *       200:
 *         description: Lista de posts que coinciden con el término de búsqueda.
 *       500:
 *         description: Error del servidor.
 */
router.get("/search/post", searchPosts);

export { router as PostsRoutes };
