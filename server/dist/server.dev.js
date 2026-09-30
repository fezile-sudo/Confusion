"use strict";

var express = require('express');

var cors = require('cors');

var mongoose = require('mongoose');

var dotenv = require('dotenv');

var path = require('path');

var dishRouter = require('./routes/dishRouter');

var commentRouter = require('./routes/commentRouter');

var teamRouter = require('./routes/teamRouter');

var contactRouter = require('./routes/contactRouter'); // =========================================
// LOAD ENVIRONMENT VARIABLES
// =========================================


dotenv.config({
  path: path.join(__dirname, '..', '.env')
}); // =========================================
// CREATE EXPRESS APP
// =========================================

var app = express(); // =========================================
// MIDDLEWARE
// =========================================

app.use(cors());
app.use(express.json()); // =========================================
// API ROUTES
// =========================================

app.use('/api/dishes', dishRouter);
app.use('/api/comments', commentRouter);
app.use('/api/team', teamRouter);
app.use('/api/contact', contactRouter); // =========================================
// TEST ROUTE
// =========================================

app.get('/api', function (req, res) {
  res.json({
    message: 'Welcome to the Confusion API',
    restaurant: 'Confusion Modern African Dining'
  });
}); // =========================================
// MONGODB CONNECTION
// =========================================

var mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error('MongoDB connection error: MONGODB_URI is not defined in .env');
} else {
  mongoose.connect(mongoUri).then(function () {
    console.log('Connected to MongoDB');
  })["catch"](function (error) {
    console.error('MongoDB connection error:', error);
  });
} // =========================================
// SERVER
// =========================================


var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Confusion API running on port ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
