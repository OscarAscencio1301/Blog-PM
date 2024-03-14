## Backend
1. Clona el repositorio
2. Accede a la carpeta blog-backend
```bash
 cd blog-backend/
```
3. Crea el archivo `.env` en base a `.env.example`.
  ```bash
PORT=PUERTO_DESPLEGAR
DATABASE_NAME=NOMBRE_BASE_DE_DATOS
DATABASE_USER=NOMBRE_USUARIO
DATABASE_PASSWORD=CONTRASEÑA_BASE_DE_DATOS
DATABASE_PORT=PUERTO_ALOJADO_BASE_DE_DATOS
HOSTNAME=HOST
CLOUDINARY_URL=KEY_CLOUDINARY
```
4. Asegúrate de tener Node.js instalado (versión >= 18.18.2).
5. Es necesario contar con una base de datos en MySQL
6. Ejecuta los siguientes comandos para su ejecución:
```bash
# Instalar Dependencias
npm install
# Inciar Servidor
npm run dev
```