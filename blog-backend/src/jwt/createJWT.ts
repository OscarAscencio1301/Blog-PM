import jsonwebtoken from "jsonwebtoken";

export const createJWT = (id: number) => {
  const payload = { id };

  return new Promise((resolve, reject) => {
    jsonwebtoken.sign(
      payload,
      process.env.SECRET_KEY!,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};