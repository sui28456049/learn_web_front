var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/html', function(req, res, next) {
  res.render('html', { 
    title: '渲染 html',
    desc: "描述页面",
    datas:{"data1":"111","data2":"222"}
  });
});



module.exports = router;
