var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const a = {
    name: "Michael",
    city: "Beijing",
    street: "Chaoyang Road",
    postcode: 100025
  }
  res.json(a)
});

module.exports = router;
