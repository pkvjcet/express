const express=require("express");
const chalk=require('chalk');
var app=new express();
app.all('/',function(req,res){
    res.send("Hello world prince");
});
app.listen(3000,()=>{
    console.log("listening to port"+chalk.green('3000'));
});