var express=require("express");
var app=new express();
app.all('/',function(req,res){
    res.send("Hello world");
});
app.listen(3000);