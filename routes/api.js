var express = require('express');
var router = express.Router();

router.route('/posts')
  .get(function(req,res){
    //temporary solution
    res.send({message: 'TODO return all post'});
  })
  .post(function(req,res){
    res.send({message: 'TODO create a new post'});

  });

router.route('/posts/:id')
  .get(function(req,res){
    res.send({message: 'TODO get'});

  })
  .put(function(req,res){
    res.send({message: 'TODO put all post'});

  })
  .delete(function(req,res){
    res.send({message: 'TODO delete all post'});

  });

module.exports = router;
