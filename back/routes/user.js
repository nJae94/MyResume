const express =require('express');
const bcrypt = require('bcrypt');
const {User,Post,Project} = require('../models');
const passport = require('passport');
const db = require('../models');
const router = express.Router();

router.get('/', async(req,res,next)=> {
   console.log(req.headers);
   try {

    if(req.user)
    {
        const fulldata = await User.findOne({
            where:{id:req.user.id},
            attributes: {
                exclude: ['password']
            },

            include: [{
                model: Post,
            },{
                model: Project
            }]

        });
        res.status(200).json(fulldata);
    }
    else {
        res.status(200).json(null);
    }
    
   }
   catch(err)
   {
       console.error(err);
       next(err);
   }

});
                                                
router.post('/login',(req,res,next)=> {
   
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
            return res.status(401).send(info.reason);
        }
                                    // 요건 passport로그인 시 나는 에러 
        return req.login(user, async(loginErr)=> {
            if(loginErr)
            {
                console.error('passport error');
                return next(loginErr);
            }

            const fulldata = await User.findOne({where:{id:user.id},
                attributes: {
                    exclude: ['password']
                },

                include: [{
                    model: Post,
                },{
                    model: Project
                }]

            });
            return res.status('201').json(fulldata);
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