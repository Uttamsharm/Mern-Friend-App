import express from 'express';
import { sendFriendRequest, getFriendRecommendations } from '../controllers/friendController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/request', protect, sendFriendRequest);
router.get('/recommendations/:userId', protect, getFriendRecommendations);

export default router;
