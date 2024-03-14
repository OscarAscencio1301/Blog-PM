"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = __importDefault(require("./models/Main"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const main = new Main_1.default();
main.listen();
//# sourceMappingURL=index.js.map