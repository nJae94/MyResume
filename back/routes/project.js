const express = require('express');
const {User,Project,Image} = require('../models');
const multer = require('multer');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { isLoggedIn } = require('./middlewares');
const db = require('../models');

try {
    fs.accessSync('uploads');
  } catch (error) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
  }

const upload = multer({

    storage: multer.diskStorage({

      destination(req, file, done) {

        done(null, 'uploads');

      },
      filename(req, file, done) { 

        const ext = path.extname(file.originalname); 

        const basename = path.basename(file.originalname, ext); 

        done(null, basename + '_' + new Date().getTime() + ext); 

      },
    }),
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
  });

router.post('/',isLoggedIn, upload.none(), async (req, res, next) => {

    try {

      console.log(req.body);

      //const userId = req.user.id === null ? 0 : req.user.id;

      const project = await Project.create({
        title: req.body.title,
        kind: req.body.kind,
        category: req.body.category,
        tag: req.body.tag,
        content: req.body.content,
        UserId: req.user.id,
      });

      if(req.body.image){
        
        if(Array.isArray(req.body.image))
        {
          const images = await Promise.all(req.body.image.map((i)=> Image.create({src:i})));

          await project.addImages(images);
        }
        else {
          const image =  await Image.create({src: req.body.image});
          await project.addImages(image);
        }

      }

      const fullProject = await Project.findOne({
        where : {id: project.id},
        include: [
          {
            model: Image,
          }
        ]
      });

      res.status(201).json(fullProject);

    }
    catch (error){
      console.log(error);
      next(error);
    }
});

router.post('/images', upload.array('image'), async(req,res,next) => {

  console.log(req.files);

  res.json(req.files.map((v) => v.filename));
});

router.get('/:id', async(req,res,next) => {

  try
  {
    console.log("테스트");
    const project = await Project.findAll({
      where: {
        UserId: parseInt(req.params.id, 10)
      },
      include: [{
        model: Image,
      }]
    });

    res.json(project);

  }

  catch (e){

    console.log(e);
    next(e);

  }
});

module.exports = router;