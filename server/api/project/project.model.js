'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    'name': String,
    'variables': [],
    'configurations': {
        'default': {},
        'development': {},
        'production': {},
        'test': {}
    }
});

module.exports = mongoose.model('Project', ProjectSchema);