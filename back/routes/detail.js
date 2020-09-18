const express = require('express');
const {User,Project,Image} = require('../models');
const router = express.Router();

router.get('/:id', async(req,res,next) => {

  try
  {
    
    console.log("디테일 테스트",req.params);

    const project = await Project.findOne({
      
      where: {id: req.params.id},

      include: [{
        model: Image,
      }]
      
    });

    if(!project)
    {
      return res.status(404).send('존재하지 않는 게시글');
    }

    res.json(project);

  }

  catch (e){

    console.log(e);
    next(e);

  }
});







module.exports = router;