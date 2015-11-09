// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var feedbackSchema = new Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    created: {type: Date },
    url: {type: String},
    date: {type: String}
});

// on every save, add the date
feedbackSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // if created_at doesn't exist, add to that field
    if (!this.created)
        this.created = currentDate;

    next();
});

// the schema is useless so far
// we need to create a model using it
var Feedback = mongoose.model('Feedback', feedbackSchema);

// make this available to our users in our Node applications
module.exports = Feedback;