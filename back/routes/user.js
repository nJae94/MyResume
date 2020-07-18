const express =require('express');
const bcrypt = require('bcrypt');
const {User} = require('../models');

const router = express.Router();

router.post('/', async(req,res,next)=> {
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

        // await User.create({
        //     email: req.body.email,
        //     name: req.body.name,
        //     password: hashedPassword
        // });

        res.status(200).send('Ok');
    }
    catch(error){

        console.log(error);
        next(error);
    }
});


module.exports = router;