const express =require('express');
const bcrypt = require('bcrypt');
const {User} = require('../models');
const passport = require('passport');
const router = express.Router();
                                                
router.post('/login',(req,res,next)=> {
    console.log("테스트");
                                 // done으로 넘어오는 데이터
    passport.authenticate('local',(err, user, info)=>{

        //서버쪽 에러
        if(err)
        {
            console.error(err);
            return next(err);
        }
        // 클라이언트 에러
        if(info)
        {
            return res.status(401).send("클라이언트 에러");
        }
                                    // 요건 passport로그인 시 나는 에러 
        return req.login(user, async(loginErr)=> {
            if(loginErr)
            {
                console.error('passport error');
                return next(loginErr);
            }

            return res.status('201').json(user);
        });
    
    })(req,res,next)

});



router.post('/logout', (req,res,next)=> {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

router.post('/', async(req,res,next)=> {

    console.log("회원가입");
    try{

        const exUser = await User.findOne({
            where: {

                email : req.body.email,
            }
        });

        if(exUser)
        {
            return res.status(403).send("이미 사용중인 아이디입니다.");
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await User.create({
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword
        });

        res.status(200).send('Ok');
    }
    catch(error){

        console.log(error);
        next(error);
    }
});


module.exports = router;