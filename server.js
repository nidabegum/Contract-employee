"use strict"

const express = require("express");
var path = require('path');
var routes = require('./routes/index');
const server = express();


server.use(express.static(path.join(__dirname, 'public')));

server.use('/', routes);

server.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});