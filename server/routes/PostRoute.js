import express from 'express';
import { getPost, likePost, getTimelinePosts, getLikedPosts } from '../controllers/PostController.js';

const router = express.Router();

router.get('/:id', getPost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimelinePosts)
router.get('/:id/liked', getLikedPosts)
export default router;