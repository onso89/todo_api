var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

    
var todoRoutes = require("./routes/todos.js");

app.get("/", function(req, res){
   res.sendFile("index.html"); 
});

app.use("/api/todos", todoRoutes);
    
app.listen(port, function(){
    console.log("App is Running on PORT " + port);
});
