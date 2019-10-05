const express=require("express");
const chalk=require('chalk');
const path=require('path');
var app=new express();
app.use(express.static(path.join(__dirname,"/public")));
app.all('/',function(req,res){
   res.sendFile(__dirname+"/index.html");
});
app.listen(3000,()=>{
    console.log("listening to port"+chalk.green('3000'));
});