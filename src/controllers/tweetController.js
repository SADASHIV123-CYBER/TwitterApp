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

export const createTwit = (req, res) => {
    return res.json({
        message: "welcome to the tweet route",
        body: req.body
    })
}