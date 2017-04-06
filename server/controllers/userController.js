var models = require('../models')
var hash = require('password-hash')
require('dotenv').config()

module.exports = {
  findAllUser : (req,res)=>{
    models.User.findAll({
      include: [
        {
          model: models.Forum,
          include: [
            {
              model: models.Comment
            },
            {
              model:models.Vote
            }
          ]
        }
      ]
    }).then(users => {
      res.send(users)
    })
  },
  findUserById : (req,res)=>{
    models.User.findById(req.params.id).then(function (user) {
      res.send(user)
    })
  },
  deleteUser : (req,res)=>{
    models.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.send(`data has been deleted for id ${req.params.id}`)
    })
  },
  updateUser : (req,res)=>{
    models.User.update({
      username: req.body.username,
      name: req.body.fullname,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      image: req.body.image,
      updatedAt: new Date()
    }, {
      where: { id: req.params.id },
      returning: true,
      plain: true
    })
    .then(function (result) {
      // console.log(result);
      res.send(result[1]);
    });
  },
  createUser : (req,res)=>{
    models.User.create(
      {username: req.body.username,
        password: hash.generate(req.body.password),
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        image: req.body.image
      }).then(function (user) {
        res.send(user)
      })
    }
  }
