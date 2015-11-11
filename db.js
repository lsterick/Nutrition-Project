var mongoose = require('mongoose');
/*
 * This file is not included for security purposes. Please create a JSON file,
 * with 'username' and 'password' fields equal to those used to access the SE390
 * wiki, in the root directory of this project (do not check in this file via git).
 */
var dbCredentials = require('./dbCredentials.json');
mongoose.connect(`mongodb://${dbCredentials.username}:${dbCredentials.password}@ds053164.mongolab.com:53164/database1`);

var connectionPromise = new Promise(function(resolve, reject) {
    var db = mongoose.connection;
    db.on('error', function (err) {
        console.error('Connection Error: ', err);
        reject();
    });
    db.once('open', function (callback) {
        console.log('Successfully connected to Mongo database.');
        resolve(db);
    });
});

module.exports = connectionPromise;

