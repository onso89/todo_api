var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
    
var todoRoutes = require("./routes/todos.js");

app.get("/", function(req, res){
   res.send("Hello from the Root Routes"); 
});

app.use("/api/todos", todoRoutes);
    
app.listen(port, function(){
    console.log("App is Running on PORT " + port);
});
