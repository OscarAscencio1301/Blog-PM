"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const posts_routes_1 = require("../routes/posts.routes");
const config_1 = require("../db/config");
class Main {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "4000";
        this.prefix = "/api/v1";
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
        this.app.use((0, cors_1.default)());
        this.app.use((0, express_fileupload_1.default)({
            useTempFiles: true,
            createParentPath: true
        }));
    }
    routes() {
        this.app.use(`${this.prefix}/posts`, posts_routes_1.PostsRoutes);
    }
    listen() {
        this.app.listen(this.port, () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield config_1.sequelize.authenticate();
                console.log("Ok Database");
            }
            catch (error) {
                console.error("Error Database", error);
            }
            console.log(`Run: ${this.port}`);
        }));
    }
}
exports.default = Main;
//# sourceMappingURL=Main.js.map