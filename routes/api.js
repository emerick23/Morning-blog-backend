var express = require('express');
var router = express.Router();
var blogsCtrl = require('../controllers/blogs');

/* GET /api/puppies */
router.get('/posts', blogsCtrl.getAllPosts);
router.get('/posts/:id', blogsCtrl.getOnePost);
router.post('/posts', blogsCtrl.createPost);
router.delete('/posts/:id', blogsCtrl.deletePost);

module.exports = router;