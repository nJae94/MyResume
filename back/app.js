const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/post');
const userAPIRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

db.sequelize.sync().then(()=> {
    console.log('db 연결 성공');
})
.catch(console.error);

passportConfig();

app.use(cors({
    origin: true,
    credentials: false,
}));
app.use(express.json());
//form으로 넘어오는 데이터 처리
app.use(express.urlencoded({extended: true}));
app.use(session({
    saveUninitialized: false,
    resave:false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(passport.initialize());
app.use(passport.session());


app.use('/api/post',postRouter);
app.use('/api/user',userAPIRouter);

app.listen(3065,() => {
    console.log("서버실행중");
});