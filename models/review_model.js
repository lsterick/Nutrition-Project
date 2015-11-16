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

var find = function(restaurantId, raterId) {
    return Review.find({
        restaurantId: restaurantId,
        raterId: raterId
    }).exec();
};

var addNew = function(body) {
    var newReview = {
        restaurantId: body.restaurantId,
        raterId: body.raterId
    };

    return Review.findOneAndUpdate(
        {
            restaurantId: body.restaurantId,
            raterId: body.raterId
        },
        newReview,
        { upsert: true }
    );

};

var deleteAll = function(body) {
    return Review.remove({}).exec(); 
};

module.exports = {
    findAll: findAll,
    find: find,
    addNew: addNew,
    deleteAll: deleteAll
};

