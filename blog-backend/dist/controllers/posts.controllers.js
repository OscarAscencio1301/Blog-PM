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
exports.searchPosts = exports.loadImage = exports.deletePost = exports.getPost = exports.getPosts = exports.addPostsMulti = exports.addPost = void 0;
const Posts_1 = require("../models/Posts");
const data_1 = require("../services/data");
const cloudinary_1 = require("cloudinary");
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
cloudinary_1.v2.config(process.env.CLOUDINARY_URL);
const addPost = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, author, image } = req.body;
        const post = Posts_1.Post.build({ title, description, author, image });
        yield post.save();
        resp.status(201).json({ ok: true, post });
    }
    catch (error) {
        console.log(error);
        resp.status(500).json({ ok: false });
    }
});
exports.addPost = addPost;
const addPostsMulti = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Posts_1.Post.destroy({
            where: {},
            truncate: true,
        });
        yield Posts_1.Post.bulkCreate(data_1.postsData);
        resp.status(201).json({ ok: true });
    }
    catch (error) {
        console.log(error);
        resp.status(500).json({ ok: false });
    }
});
exports.addPostsMulti = addPostsMulti;
const getPosts = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Posts_1.Post.findAll({ where: { isActive: true } });
        const postsLatest = posts.reverse().slice(0, 3);
        resp.status(200).json({ ok: true, posts, postsLatest });
    }
    catch (error) {
        resp.status(500).json({ ok: false });
    }
});
exports.getPosts = getPosts;
const getPost = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const post = yield Posts_1.Post.findByPk(id);
        if (!post) {
            return resp.status(500).json({
                ok: false,
                msg: "The id is invalid",
            });
        }
        resp.status(200).json({ ok: true, post });
    }
    catch (error) {
        resp.status(500).json({ ok: false });
    }
});
exports.getPost = getPost;
const deletePost = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const post = yield Posts_1.Post.findByPk(id);
        if (!post) {
            return resp.status(500).json({
                ok: false,
                msg: "The id is invalid",
            });
        }
        yield post.update({ isActive: false });
        resp.status(200).json({
            ok: true,
            post,
        });
    }
    catch (error) {
        resp.status(500).json({ ok: false });
    }
});
exports.deletePost = deletePost;
const loadImage = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const image = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image;
        if (!image || Array.isArray(image)) {
            return resp.status(400).json({
                ok: false,
                message: "The image is invalid",
            });
        }
        const { secure_url } = yield cloudinary_1.v2.uploader.upload(image.tempFilePath);
        resp.status(200).json({
            ok: true,
            image: secure_url,
        });
    }
    catch (error) {
        console.log(error);
        resp.status(500).json({ ok: false });
    }
});
exports.loadImage = loadImage;
const searchPosts = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query } = req.query;
        const posts = yield Posts_1.Post.findAll({
            where: {
                [sequelize_1.Op.or]: [
                    {
                        author: {
                            [sequelize_1.Op.like]: `%${query}%`,
                        },
                    },
                    {
                        title: {
                            [sequelize_1.Op.like]: `%${query}%`,
                        },
                    },
                    {
                        description: {
                            [sequelize_1.Op.like]: `%${query}%`,
                        },
                    },
                ],
            },
        });
        resp.status(200).json({
            ok: true,
            query,
            posts,
        });
    }
    catch (error) {
        console.log(error);
        resp.status(500).json({ ok: false });
    }
});
exports.searchPosts = searchPosts;
//# sourceMappingURL=posts.controllers.js.map