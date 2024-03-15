var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);

  res.send(`POST Received!`);
});

module.exports = router;
