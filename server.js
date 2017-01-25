const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const router = express.Router();

const port = process.env.PORT || 8448;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./dist'));

app.use('/', function (req, res){
  res.sendFile(path.resolve('client/index.html'));
})

app.listen(port, function(err){
  if(err) throw error;
  console.log('Express server Live on port: ', port)
})
