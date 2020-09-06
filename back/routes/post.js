const express = require('express');
const db = require('../models');
const router = express.Router();
const { isLoggedIn } = require('./middlewares');


router.post('/', async (req,res,next) => {

    try{
          const newPost = await db.Post.create({
            content: req.body.content,
            UserId : req.body.UserId,
        });
    
        const fullPost = await db.Post.findOne({
            where: {
                id: newPost.id
            },
            include: [{
                model: db.User,
            }],
        });

        console.log(fullPost);
    
        res.json(fullPost);
    
    }

    catch(e)
    {
        console.error(e);
        next(e);
    }
    
});

module.exports = router;