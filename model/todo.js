var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name can't be blank!"
    },
    completed: {
        type: Boolean,
        default: false,
    }
    
})