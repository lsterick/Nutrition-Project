var express = require('express');
var router = express.Router();
var reviewModel = require('../models/review_model.js');

router.get('/', function(req, res) {
    return reviewModel
        .findAll()
        .then(function(data) {
            return res.send(data);
        });
});

router.post('/', function(req, res) {
    return reviewModel
        .addNew(req.body)
        .then(function(data) {
            return res.redirect(200, '/');
        });
});

router.delete('/', function(req, res) {
    return reviewModel
        .deleteAll()
        .then(function(data) {
            res.sendStatus(200);
        });
});

module.exports = router;

