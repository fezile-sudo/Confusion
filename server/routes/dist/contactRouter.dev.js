"use strict";

var express = require('express');

var Contact = require('../models/Contact');

var contactRouter = express.Router();
contactRouter.get('/', function _callee(req, res) {
  var messages;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Contact.find().sort({
            createdAt: -1
          }));

        case 3:
          messages = _context.sent;
          res.status(200).json(messages);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching contact messages:', _context.t0);
          res.status(500).json({
            message: 'Unable to fetch contact messages'
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
contactRouter.post('/', function _callee2(req, res) {
  var _req$body, firstname, lastname, telnum, email, contactType, message, agree, newContact, savedContact;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, telnum = _req$body.telnum, email = _req$body.email, contactType = _req$body.contactType, message = _req$body.message, agree = _req$body.agree;

          if (!(!firstname || !lastname || !email || !message)) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Please complete all required fields'
          }));

        case 4:
          if (agree) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Please allow us to contact you'
          }));

        case 6:
          newContact = new Contact({
            firstname: firstname,
            lastname: lastname,
            telnum: telnum,
            email: email,
            contactType: contactType,
            message: message,
            agree: agree
          });
          _context2.next = 9;
          return regeneratorRuntime.awrap(newContact.save());

        case 9:
          savedContact = _context2.sent;
          res.status(201).json({
            message: 'Your message has been received',
            contact: savedContact
          });
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.error('Error saving contact message:', _context2.t0);
          res.status(500).json({
            message: 'Unable to send your message'
          });

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 13]]);
});
module.exports = contactRouter;
//# sourceMappingURL=contactRouter.dev.js.map
