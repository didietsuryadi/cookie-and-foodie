var models = require('../models')

module.exports = {
  findAllComment : (req,res)=>{
    models.Comment.findAll({
      include: [
        {
          model: models.User
        }
      ]
    }).then(answers => {
      res.send(answers)
    })
  },
  findCommentById : (req,res)=>{
    models.Comment.findById(req.params.id).then(function (comment) {
      res.send(comment)
    })
  },
  findCommentByForumId : (req,res)=>{
    models.Comment.findById(req.params.id).then(function (comment) {
      res.send(comment)
    })
  },
  deleteComment : (req,res)=>{
    models.Comment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.send(`data has been deleted for id ${req.params.id}`)
    })
  },
  updateComment : (req,res)=>{
    models.Comment.update({
      content:req.body.content,
      updateAt: new Date()
    }, {
      where: { id: req.params.id },
      returning: true,
      plain: true
    })
    .then(function (result) {
      console.log(result);
      res.send(result[1]);
    });
  },
  createComment : (req,res)=>{
    models.Comment.create(
      {title: req.body.title,
        content:req.body.content,
        UserId: req.body.UserId,
        ForumId: req.body.ForumId
      }).then(function (comment) {
        res.send(comment)
      })
    }
  }
