import { StatusCodes } from "http-status-codes"
import { 
    createTweet as createTweetService,
    getTweet as getTweetsService,
    getTweetById as getTweetByIdService,
    deleteTweet as deleteTweetService,
    updateTweet as updateTweetService
} from "../services/twitServices.js";
import { errorResponce, sucessResponce } from "../utils/responces.js";

export const createTweet = async (req, res) => {
   try {

    const responce = await createTweetService({
        body: req.body.body
    })

    return sucessResponce(responce, StatusCodes.CREATED, 'Tweet created successfully');
   } catch(error) {
   return errorResponce(error)
   }
}

export const getTweet = async (req, res) => {
    
  try{
    const responce = await getTweetsService();

    return sucessResponce(responce, StatusCodes.OK, 'Tweets fetched successfully');
  } catch(error) {
   return errorResponce(error)
  }
}

export const getTweetById = async(req, res) => {
    try {
        const responce = await getTweetByIdService(req.params.id);

        return sucessResponce(responce, StatusCodes.OK, 'Tweets fetched successfully');
        
    } catch(error) {
        return errorResponce(error)
    }
}

export const deleteTweet = async (req, res) => {
    try {
        const responce = await deleteTweetService(req.params.id);
        return sucessResponce(responce, StatusCodes.OK, 'Tweet deleted successfully');
    } catch(error) {
        return errorResponce(error)
    }
}

export const updateTweet = async (req, res) => {
    try {
        const responce = await updateTweetService(req.params.id, req.body.body);
        return sucessResponce(responce, StatusCodes.OK, 'Tweet updated successfully')
    } catch(error) {
         return errorResponce(error)
    }
}

