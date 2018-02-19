var db = require("../models");

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(error){
       res.send(error);
    });
};

exports.postTodos = function(req, res){
//   console.log(req.body);
  db.Todo.create(req.body)
  .then(function(newTodo){
      res.status(201).json(newTodo);
  })
  .catch(function(error){
      res.send(error);
  });
};

exports.showTodo = function(req, res){
   db.Todo.findById(req.params.todoId)
   .then(function(foundTodo){
       res.send(foundTodo);
   })
   .catch(function(error){
       res.send(error);
   });
};

exports.updateTodo = function(req, res){
   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
   .then(function(updatedTodo){
       res.json(updatedTodo);
   })
   .catch(function(error){
       res.send(error);
   });
};

exports.deleteTodo = function(req, res){
   db.Todo.remove({_id: req.params.todoId})
   .then(function(){
       res.send({message: "Todo was Deleted"});
   })
   .catch(function(error){
       res.send(error);
   });
};


module.exports = exports;