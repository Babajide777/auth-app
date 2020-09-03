var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/register', function (req, res, next) {
    res.send('Register');
});

module.exports = router;