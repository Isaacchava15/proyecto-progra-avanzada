'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'in progress', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Task', TaskSchema);