const express = require('express');
const {User,Project,Image} = require('../models');
const multer = require('multer');
const router = express.Router();
const fs = require('fs');

router.post('/', (req,res) => {

    res.status(200).send('Ok');
});

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

router.post('/images', upload.none(), async(req,res,next) => {

    console.log("테스트");

    res.status(200).send('Ok');
});

module.exports = router;