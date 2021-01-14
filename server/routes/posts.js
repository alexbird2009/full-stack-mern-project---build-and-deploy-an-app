import express from 'express';
import { getPosts,createPost } from '../controllers/posts.js';

const router = express.Router();

// http://localhost:5000/posts - if open this url in browser the router.get is to perform
router.get('/', getPosts);

router.post('/', createPost);

export default router;