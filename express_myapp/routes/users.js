var express = require('express');
var router = express.Router();
var router = express.Router();
var usersController = require('../controller/usersController');
var mysql  = require('mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// www.xxx.com/users/sui 路径
router.get('/sui', function(req, res, next) {
  res.send('sui 用户路径 http://35.192.208.76:3000/users/sui');
});

// mvc 模式
router.get('/info', usersController.info);

module.exports = router;
