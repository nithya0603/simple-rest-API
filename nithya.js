var express = require('express');
var a = express();
 
a.get('/', function(req, res)
{   res.send("Hello world!"); 
console.log("hello in console");  }   );
a.listen(3000);
