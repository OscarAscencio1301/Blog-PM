import Main from "./models/Main";
import dotenv from "dotenv";
dotenv.config();

const main = new Main();
console.log({main})

main.listen();
