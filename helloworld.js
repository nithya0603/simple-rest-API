var express=require("express");
var app=express();

app.get('/', function(req,res){
    res.send("Hello World");
    console.log("log")
}
);

app.listen(3000);