import { createTweet as createTweetService } from "../repository/tweetRepository.js"

export const getTweets = (req, res) => {
    return res.json({
        message: "welcome to tweet route"
    })
}

export const getTweetById = (req, res) => {
    return res.json({
        message: "welcome to the tweet route",
        id: req.params.id
    })
}

export const createTweet = async (req, res) => {
   try {

    const responce = await createTweetService({
        body: req.body.body
    })

    return res.status(200).json({
        success: true, 
        data: responce, 
        message: "tweet created sucessfully"
    })

   } catch(error) {
    console.log(error)
    if(error.status) {
        return res.status(error.status).json({
            message: error.message,
            success: false
        });
    }
    return error.res.status(500).json({
        message: "Internal server error",
        success: false
    })
   }
}