var express = require("express"),
    router = express.Router();
var db = require("../models");

    
router.get("/", function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(error){
            res.send(error);
    })
});

module.exports = router;

