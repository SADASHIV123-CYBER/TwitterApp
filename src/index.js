import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
    return res.json({
        message: "pong"
    })
})

app.post('/hello', (req, res) => {
    return res.json({
        message: "world"
    })
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
    
})
