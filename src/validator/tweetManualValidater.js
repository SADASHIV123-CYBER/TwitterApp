export const createManualTweetValidater = (req, res, next) => {
    if(!req.body.tweet) {
        return res.status(400).json({
            error: "tweet is required"
        })
    }

    // next();

    if(req.body.tweet.length > 280) {
        return res.status(400).json({
            error: "tweet must be 280 characters or less"
        });
    }

    next()
}
