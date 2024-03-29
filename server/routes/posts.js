import express from "express";
import { getUsers, getUser, getPostsBySearch, getPosts, getPost, createPosts, commentPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
import auth from '../middleware/auth.js';
const router = express.Router();

router.get("/search", getPostsBySearch);



router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.get("/:id", getPost);
router.get("/", getPosts);

router.post("/", auth, createPosts);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);




export default router;
