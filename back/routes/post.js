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

router.get('/posts', async(req,res,next)=> {

    try{

        console.log("test");

        let value = 0;

        if(req.query.off > 1)
        {
            value = parseInt((req.query.off - 1) * 10, 10); 
        }

        const posts = await db.Post.findAll({

            include: [{
                model: db.User,
                attributes: ['name','email'],
              }],

            order: [['createdAt', 'DESC']],
            offset: value, 
            limit: parseInt(req.query.limit, 10),
        });

        res.json(posts);
    }

    catch(e)
    {
        console.log(e);
        next(e);
    }

});

module.exports = router;