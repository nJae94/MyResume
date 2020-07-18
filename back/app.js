const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/post');
const userAPIRouter = require('./routes/user');
const db = require('./models');

const app = express();

db.sequelize.sync().then(()=> {
    console.log('db 연결 성공');
})
.catch(console.error);

app.use(cors());
app.use(express.json());
//form으로 넘어오는 데이터 처리
app.use(express.urlencoded({extended: true}));

app.use('/api/post',postRouter);
app.use('/api/user',userAPIRouter);

app.listen(3065,() => {
    console.log("서버실행중");
});