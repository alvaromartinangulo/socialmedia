import express from 'express';
import { getPost, likePost, getTimelinePosts } from '../controllers/PostController.js';

const router = express.Router();

router.get('/:id', getPost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimelinePosts)

export default router;