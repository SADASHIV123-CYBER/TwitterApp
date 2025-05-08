import express from 'express';
import { createTwit, getTweetById, getTweets } from '../../controllers/tweetController.js';
import { validate } from '../../validator/zodValidator.js'
import { tweetZodSchema } from '../../validator/tweetZodSchema.js';

const router = express.Router();

router.get('/', getTweets)

router.get('/:id', getTweetById);

router.post('/', validate(tweetZodSchema) , createTwit);

export default router;