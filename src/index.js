import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));

app.use(express.json());
app.use(express.text());
// app.use(express.urlencoded())

function mid1(req, res, next) {
    console.log("mid1");
    next();
}

function mid2(req, res, next) {
    console.log("mid2");
    next();
}

function mid3(req, res, next) {
    console.log("mid3");
    next();
};

const middleware = [mid1, mid2, mid3]

function commonMiddleware(req, res, next) {
    console.log("commonMiddleware");
    next();
}

app.use(commonMiddleware);

app.get('/ping', middleware, (req, res) => {
    return res.json({
        message: "pong"
    })
});

app.post('/hello', [mid1, mid2], (req, res) => {
    console.log( "query params", req.query); // query params
    console.log( "request body", req.body); // req body
    return res.json({
        message: "world"
    })
});

app.get('/tweets/:tweet_id/comments/:comment_id', (req, res) => {
    console.log(req.params) // url params
    return res.json({
        message: "tweet details"
    })
});

app.use((req, res) => {
    return res.status(404).json({
        message: "not found"
    });
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})
