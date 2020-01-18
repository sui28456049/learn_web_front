// var query=require("./lib/mysql.js");
// query("select 1 from 1",function(err,vals,fields){
//  //do something
// });


exports.info = function (req, res) {
    res.send('我是 express mvc,实现1122');
    // res.render('index', { title: 'Express' });
};