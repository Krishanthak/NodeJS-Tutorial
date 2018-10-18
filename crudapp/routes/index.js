var express = require('express');
var router = express.Router();
var connection = require('../config/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM users', function(err, rows) {
    if(err) throw err;
    res.render('index', { users:rows });
  });
  
});

/* POST users to the database */
router.post('/addUser', function(req, res) {
  const userdata = {
    fname:req.body.fname,
    lname:req.body.lname,
    email:req.body.email,
    prof:req.body.prof
  }
  connection.query('INSERT INTO users SET ?', userdata, function(err, result) {
    if(err) throw err;
    res.redirect('/');
  });
});

router.get('/deleteUser/:id', function(req, res) {
  var userid = req.params.id;
  console.log(userid);
  res.send("deleted");
});
module.exports = router;
