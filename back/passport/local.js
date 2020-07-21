const passport = require('passport');
const {Strategy: Local} = require('passport-local');
const {User} = require('../models');
const bcrypt = require('bcrypt');
module.exports= () => {
    
    //Strategy 설정
    passport.use(new Local({
        //req.body.다음 들어가는 이름
        usernameField: 'email',
        passwordField: 'password'

    },async (email,password, done)=> {
       try{

            const user = await User.findOne({
                where: {email}
            });

            if(!user)
            {   
            //  done 서버에러, 성공, 클라이언트 에러
                return done(null, false, {reason: '존재하지 않은 사용자 입니다.'});
            }

        const result = await bcrypt.compare(password , user.password);

        if(result){

            return done(null, user);
        }
        return done(null, false, {reason:'비밀번호가 틀렸습니다'});

    }
    catch(e)
    { 
        console.error(e);
        return done(e);
    }


    }));

};