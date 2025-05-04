import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));

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
    return res.json({
        message: "world"
    })
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})
