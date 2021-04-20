const express = require('express');
var path = require('path');

//Starting Express app
const app = express();

//Set the base path to the angular-test dist folder
//app.use(express.static(path.join(__dirname, 'dist/')));

//Any routes will be redirected to the angular app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/angular-test/index.html'));
});