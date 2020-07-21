const passport = require('passport');
const local = require('./local');
const {User} = require('../models');

module.exports = ()=> {

    //req.login() 실행할때 실행되는데 쿠키와 세션 만드는데 사용
    //user 데이터를 받아서
    passport.serializeUser((user,done)=>{

        //id만 사용해서 매치
        done(null,user.id);

    });

    //id를 받아서 db의 유저 검색
    passport.deserializeUser(async(id,done)=>{
        try{
            const user = await User.findOne({
                where: {id}
            });

            done(null, user);
        }
        catch(e)
        {
            console.error(e);
            done(e);
        }
    });

    local();
}