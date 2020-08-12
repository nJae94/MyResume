const express = require('express');

const router = express.Router();

router.post('/', (req,res) => {
    console.log("테스트");
    res.json({id:1, content:'hellos'});
});

module.exports = router;