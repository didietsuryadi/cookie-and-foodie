var models = require('../models')

module.exports = {
  findAllForum : (req,res)=>{
    models.Forum.findAll({
      include: [
        {
          model: models.User
        },
        {
          model: models.Comment
        },
        {
          model:models.Vote
        }
      ]
    }).then(questions => {
      res.send(questions)
    })
  },
  findForumById : (req,res)=>{
    models.Forum.findById(req.params.id, {
      include: [
        {
          model: models.Comment,
          include: [
            {
              model: models.User
            }
          ]
        },
        {
          model: models.Vote,
          include: [
            {
              model:models.User
            }
          ]
        }
      ]
    }).then(function (user) {
      res.send(user)
    })
  },
  deleteForum : (req,res)=>{
    models.Forum.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.send(`data has been deleted for id ${req.params.id}`)
    })
  },
  updateForum : (req,res)=>{
    models.Forum.update({
      title: req.body.title,
      content: req.body.content,
      price: req.body.price,
      hash_tag: req.body.hash_tag,
      category: req.body.category,
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
  createForum : (req,res)=>{
    models.Forum.create(
      {title: req.body.title,
       content: req.body.content,
        UserId: req.body.UserId,
        price: req.body.price,
        hash_tag: req.body.hash_tag,
        category: req.body.category
      }).then(function (user) {
        res.send(user)
      })
    }
  }
