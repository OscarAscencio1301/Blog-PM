import { Router } from "express";
import { loginUser, registerUser, renewUser } from "../controllers/users.controllers";
import { check } from "express-validator";
import { verifyErrors } from "../middlewares/verifyError";
import { verifyJWT } from "../jwt/verifyJWT";

const router = Router();


/**
 * @swagger
 * /auth/renew:
 *   get:
 *     summary: Renueva el token de acceso.
 *     description: Renueva el token de acceso del usuario actual.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token de acceso renovado exitosamente.
 *       401:
 *         description: No autorizado.
 *       500:
 *         description: Error del servidor.
 */
router.get("/renew", [verifyJWT, verifyErrors], renewUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Inicia sesión de usuario.
 *     description: Inicia sesión de un usuario con su correo electrónico y contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario autenticado exitosamente.
 *       400:
 *         description: Solicitud incorrecta.
 *       401:
 *         description: Credenciales inválidas.
 *       500:
 *         description: Error del servidor.
 */
router.post(
  "/login",
  [
    check("email", "El correo electrónico es obligatorio").notEmpty(),
    check("password", "La contraseña es obligatoria").notEmpty(),
    verifyErrors,
  ],
  loginUser
);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra un nuevo usuario.
 *     description: Registra un nuevo usuario con su nombre, correo electrónico y contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente.
 *       400:
 *         description: Solicitud incorrecta.
 *       500:
 *         description: Error del servidor.
 */
router.post(
  "/register",
  [
    check("name", "El nombre es obligatorio").notEmpty(),
    check("email", "El correo electrónico es obligatorio").notEmpty(),
    check("password", "La contraseña es obligatoria").notEmpty(),
    verifyErrors,
  ],
  registerUser
);

export { router as authRouter };
