var models = require('../models')

module.exports = {

  downVote : (req,res)=>{
    models.Vote.destroy({
      where: {
        UserId: req.body.UserId,
        ForumId: req.body.ForumId
      }
    }).then(function(){
      res.send(`vote has been deleted for id ${req.body.UserId}`)
    })
  },
  upVote : (req,res)=>{
    models.Vote.findOrCreate({
      where: {
        UserId: req.body.UserId,
        ForumId: req.body.ForumId
      },
     defaults:{
       status: true,
       UserId: req.body.UserId,
       ForumId: req.body.ForumId
     }}).then(function (vote, created) {
          res.send('ok')
      })
    }
  }
