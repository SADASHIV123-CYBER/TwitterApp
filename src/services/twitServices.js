import { Filter } from "bad-words";
import { createTweet as createTweetRepository, 
         getTweets as getTweetsRepository,
         getTweetById as getTweetByIdRepository,
         deleteTweet as deleteTweetRepository,
         updateTweet as updateTweetRepository
} from "../repository/tweetRepository.js";


export const createTweet = async ({ body }) => {

    const filter = new Filter;

    if(filter.isProfane(body)) {
        console.log(body);
        console.log(filter.clean(body))
        throw {
            message: "Tweet contains blocked words",
            status: 400
        }
    }

    const tweet = await createTweetRepository({body});

    return tweet;
    
}

export const getTweet = async () => {
    const tweets = await getTweetsRepository();

    return tweets;
}

export const getTweetById = async (id) => {
    const tweet = getTweetByIdRepository(id);

    if(!tweet) {
        throw {
            message: "Tweet not found",
            status: 404
        }
    }

    return tweet;
}

export const deleteTweet = async (id) => {
    const responce = await deleteTweetRepository(id);
    if(!responce) {
        throw {
            message: "Tweet not found",
            status: 404
        }
    }
}


export const updateTweet = async(id, body) => {
    const responce = await updateTweetRepository(id, body);

    if(!responce) {
        throw {
            message: 'tweet not found',
            status: 404
        }
    }

    return responce;
}