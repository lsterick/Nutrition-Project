var Schema = require('mongoose').Schema;
var db = require('../db');

var reviewSchema = Schema({
    restaurantId: String,
    raterId: String
});

var Review = db.model('Review', reviewSchema);

var findAll = function() {
    return Review.find({}).exec();
};

var addNew = function(body) {
    var review = new Review({
        restaurantId: body.restaurantId,
        raterId: body.raterId
    });

    return review.save();
};

var deleteAll = function(body) {
    return Review.remove({}).exec(); 
};

module.exports = {
    findAll: findAll,
    addNew: addNew,
    deleteAll: deleteAll
};

