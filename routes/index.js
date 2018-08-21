var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../views/login.html'));
});

router.get('/index1', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../views/index1.html'));
});

router.get('/index', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

// router.get('/login', function(req, res, next) {
//     res.sendFile(path.join(__dirname + '/../views/signin.html'));
// });

// router.get('/index', function(req, res, next) {

//     res.sendFile(path.join(__dirname + '/../views/index.html'));
// });

router.get('*', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../views/login.html'));
});

module.exports = router;