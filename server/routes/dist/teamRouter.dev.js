"use strict";

var express = require('express');

var Team = require('../models/Team');

var teamRouter = express.Router();
teamRouter.get('/', function _callee(req, res) {
  var team;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Team.find());

        case 3:
          team = _context.sent;
          res.json(team);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching team:', _context.t0);
          res.status(500).json({
            message: 'Unable to fetch team members'
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = teamRouter;
//# sourceMappingURL=teamRouter.dev.js.map
