var express = require("express"),
    app = express();
    
app.get("/", function(req, res){
   res.send("Hi there from Express"); 
});
    
app.listen(process.env.PORT, function(){
    console.log("App is Running on PORT " + process.env.PORT);
});
 