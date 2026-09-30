"use strict";

var express = require('express');

var mongoose = require('mongoose');

var Comment = require('../models/Comment');

var commentRouter = express.Router();
commentRouter.get('/dish/:dishId', function _callee(req, res) {
  var dishId, comments;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          dishId = req.params.dishId;

          if (mongoose.Types.ObjectId.isValid(dishId)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Invalid dish ID'
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(Comment.find({
            dishId: dishId
          }).sort({
            createdAt: -1
          }));

        case 6:
          comments = _context.sent;
          res.status(200).json(comments);
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).json({
            message: 'Unable to retrieve comments'
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
commentRouter.post('/', function _callee2(req, res) {
  var _req$body, dishId, rating, author, comment, newComment, savedComment;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, dishId = _req$body.dishId, rating = _req$body.rating, author = _req$body.author, comment = _req$body.comment;

          if (mongoose.Types.ObjectId.isValid(dishId)) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Invalid dish ID'
          }));

        case 4:
          newComment = new Comment({
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
          });
          _context2.next = 7;
          return regeneratorRuntime.awrap(newComment.save());

        case 7:
          savedComment = _context2.sent;
          res.status(201).json(savedComment);
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).json({
            message: 'Unable to save comment'
          });

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
module.exports = commentRouter;
//# sourceMappingURL=commentRouter.dev.js.map
