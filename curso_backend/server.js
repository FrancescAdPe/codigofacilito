// Importamos librería a través de la que podremos comunicarnos con el protocolo http
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.urlencoded({extended: true}) );

app.get('/saludo', function(req,res){
  res.send(`Hola ${req.query.name}`);
});

app.post('/',function(req,res){
  res.send(`Hola ${req.query.name}`);

});

app.listen(3000);
