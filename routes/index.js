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
    var restaurantId = req.query.restaurantId;
    var raterId = req.query.raterId;

    var params = {
        title: 'Data Entry',
        review: {}
    };

    if (!restaurantId || !raterId) {
        return res.render('form', params);
    }

    return reviewModel.find(restaurantId, raterId).then(function(reviews) {
        params.review = reviews[0];
        return res.render('form', params);
    })
});

module.exports = router;
