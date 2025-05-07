import express from 'express';
import { createTwit, getTweetById, getTweets } from '../../controllers/tweetController.js';

const router = express.Router();

router.get('/', getTweets)

router.get('/:id', getTweetById);

router.post('/', createTwit);

export default router;