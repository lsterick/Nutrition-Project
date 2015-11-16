var path = require('path');
var reviewModel = require(path.join(__dirname, '../models/review_model'));
var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res) {
    reviewModel.findAll().then(function(reviews) {
        res.render('datasetSelect', {
            title: 'Form Select',
            reviews: reviews
        });
    });
});

router.get('/dataEntry', function(req, res) {
    res.render('dataEntry');
});

module.exports = router;
