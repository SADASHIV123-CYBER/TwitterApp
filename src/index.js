import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRouter.js'
import connectDB from './config/dbConfig.js';


const app = express();

app.use(morgan('combined'));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded())

app.use('/api', apiRouter)

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

app.use((req, res) => {
    return res.status(404).json({
        message: "not found"
    });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectDB();
})
