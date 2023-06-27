import express from 'express'
import { deleteUser, followBrand, getAllUsers, getUser, unfollowBrand } from '../controllers/UserController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.delete('/:id',authMiddleWare, deleteUser)
router.put('/:id/follow',authMiddleWare, followBrand)
router.put('/:id/unfollow',authMiddleWare, unfollowBrand)

export default router