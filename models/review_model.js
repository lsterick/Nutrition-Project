var Schema = require('mongoose').Schema;
var db = require('../db');

var reviewSchema = Schema({
    name: String,
    score: Number
});

var Review = db.model('Review', reviewSchema);

var findAll = function() {
    return Review.find({}).exec();
};

var addNew = function(body) {
    console.log('got here');
    var review = new Review({
        name: body.name,
        score: body.score
    });

    return review.save();
};

module.exports = {
    findAll: findAll,
    addNew: addNew
};

