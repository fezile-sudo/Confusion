"use strict";

var express = require('express');

var mongoose = require('mongoose');

var Dish = require('../models/Dish');

var dishRouter = express.Router();
dishRouter.get('/', function _callee(req, res) {
  var dishes;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Dish.find());

        case 3:
          dishes = _context.sent;
          res.status(200).json(dishes);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).json({
            message: 'Unable to retrieve dishes'
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
dishRouter.get('/:dishId', function _callee2(req, res) {
  var dishId, dish;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          dishId = req.params.dishId;

          if (mongoose.Types.ObjectId.isValid(dishId)) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Invalid dish ID'
          }));

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(Dish.findById(dishId));

        case 6:
          dish = _context2.sent;

          if (dish) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: 'Dish not found'
          }));

        case 9:
          res.status(200).json(dish);
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).json({
            message: 'Unable to retrieve dish'
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
module.exports = dishRouter;
//# sourceMappingURL=dishRouter.dev.js.map
