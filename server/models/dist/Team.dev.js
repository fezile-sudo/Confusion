"use strict";

var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Team', teamSchema);
//# sourceMappingURL=Team.dev.js.map
