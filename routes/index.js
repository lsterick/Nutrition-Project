var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('datasetSelect');
});

router.get('/dataEntry', function(req, res) {
    res.render('dataEntry');
});

module.exports = router;
