"use strict";

var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  dishId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dish',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  comment: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Comment', CommentSchema);
//# sourceMappingURL=Comment.dev.js.map
