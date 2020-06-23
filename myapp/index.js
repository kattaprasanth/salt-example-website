var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('Hello World Prasanth Katta!..');
});

app.listen(8000, function(){
  console.log('Prasanth Katta WebSite Up And Running on 8000!');
});
