
const express = require('express');
const app = express();
const port = 3000

app.get("/", function(request, response){
  response.send("Hello");
});

app.get("/contact", function(req,res){
  res.send("<h3> Contact us</h3> ");
});

app.get("/about", function(req,res){
  res.send("<h1>I m a developer</h1>");
});

app.get("/hobies", function(req,res){
  res.send("<ul><li>Coffe</li><li>Weed</li><li>Sport</li></ul>");
});


app.listen(port, function() {
  console.log('That the server which you choice ' + ' ' + port )
});
