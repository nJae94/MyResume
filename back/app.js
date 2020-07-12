const express = require('express');

const app = express();

app.get('/',(req,res)=> {
    res.send("hello");
});

app.get('/api',(req,res)=> {
    res.send("hello api");
});

app.get('/api/posts',(req,res)=> {
    res.send("hello posts");
});

app.listen(3065,() => {
    console.log("서버실행중");
});