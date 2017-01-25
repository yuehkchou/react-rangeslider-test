const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const router = express.Router();

const port = process.env.PORT || 8448;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('dist'))

app.get('bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/bundle.js'));
});

app.get('styles/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/styles/styles.css'));
});

app.get('*', function(req, res) {
  console.log('req.url', req.url);
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(port, function(err){
  if(err) throw error;
  console.log('Express server Live on port: ', port)
})
