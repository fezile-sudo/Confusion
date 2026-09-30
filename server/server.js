
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const dishRouter = require('./routes/dishRouter');
const commentRouter = require('./routes/commentRouter');
const teamRouter = require('./routes/teamRouter');
const contactRouter = require('./routes/contactRouter');


// =========================================
// LOAD ENVIRONMENT VARIABLES
// =========================================

dotenv.config({
    path: path.join(__dirname, '..', '.env')
});


// =========================================
// CREATE EXPRESS APP
// =========================================

const app = express();


// =========================================
// MIDDLEWARE
// =========================================

app.use(cors());

app.use(express.json());


// =========================================
// API ROUTES
// =========================================

app.use('/api/dishes', dishRouter);

app.use('/api/comments', commentRouter);

app.use('/api/team', teamRouter);

app.use('/api/contact', contactRouter);


// =========================================
// TEST ROUTE
// =========================================

app.get('/api', (req, res) => {

    res.json({
        message: 'Welcome to the Confusion API',
        restaurant: 'Confusion Modern African Dining'
    });

});


// =========================================
// MONGODB CONNECTION
// =========================================

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {

    console.error('MongoDB connection error: MONGODB_URI is not defined in .env');

} else {

    mongoose
        .connect(mongoUri)
        .then(() => {

            console.log('Connected to MongoDB');

        })
        .catch((error) => {

            console.error('MongoDB connection error:', error);

        });

}


// =========================================
// SERVER
// =========================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Confusion API running on port ${PORT}`);

});

