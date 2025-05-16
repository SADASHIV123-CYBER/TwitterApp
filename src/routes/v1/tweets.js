import express from 'express';
import { createTweet, getTweetById, getTweet } from '../../controllers/tweetController.js';
import { validate } from '../../validator/zodValidator.js';
import { tweetZodSchema } from '../../validator/tweetZodSchema.js';
import cloudinaryUploader from '../../config/multerConfig.js';
import { getTweetByIdManualValidator } from '../../validator/tweetManualValidater.js';
import { deleteTweet } from '../../controllers/tweetController.js'
import { updateTweet } from '../../controllers/tweetController.js';
const router = express.Router();

router.get('/', getTweet);

router.get('/:id', getTweetByIdManualValidator, getTweetById);


router.post(
  '/',
  cloudinaryUploader('tweets').single('tweetImage'), 
  validate(tweetZodSchema),
  createTweet
);

router.delete('/:id', getTweetByIdManualValidator, deleteTweet);

router.put('/:id', getTweetByIdManualValidator, updateTweet)

export default router;
