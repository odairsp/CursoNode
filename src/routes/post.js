const express = require('express');
const Post = require('../controllers/Post');
const router = express.Router();







router.get("/", Post.index);
router.get("/show", Post.show);









module.exports = router;