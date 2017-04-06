var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var forumController = require('../controllers/forumController')
var commentController = require('../controllers/commentController')
var voteController = require('../controllers/voteController')
var auth = require('../helper/auth')

//User Router
router.get('/user',auth.verify, userController.findAllUser);

router.get('/user/:id',auth.verify, userController.findUserById);

router.post('/user',auth.verify, userController.createUser);

router.put('/user/:id',auth.verify, userController.updateUser);

router.delete('/user/:id',auth.verify, userController.deleteUser);


//Forum router
router.get('/forum', forumController.findAllForum);

router.get('/forum/:id', forumController.findForumById);

router.post('/forum',auth.verify, forumController.createForum);

router.put('/forum/:id',auth.verify, forumController.updateForum);

router.delete('/forum/:id',auth.verify, forumController.deleteForum);

// Comment Router
router.get('/comment',auth.verify, commentController.findAllComment);

router.get('/comment/:id',auth.verify, commentController.findCommentById);

router.post('/comment',auth.verify, commentController.createComment);

router.put('/comment/:id',auth.verify, commentController.updateComment);

router.delete('/comment/:id',auth.verify, commentController.deleteComment);

// Vote Router
router.post('/upvote',auth.verify, voteController.upVote);

router.post('/downvote',auth.verify, voteController.downVote);

module.exports = router;
