const express = require('express');
const {User,Project,Image} = require('../models');
const multer = require('multer');
const router = express.Router();

router.post('/', (req,res) => {
    res.json({id:1, content:'hellos'});
});

router.post('/images', async(req,res,next) => {

});

module.exports = router;