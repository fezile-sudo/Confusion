const express = require('express');
const Contact = require('../models/Contact');

const contactRouter = express.Router();

contactRouter.get('/', async (req, res) => {

    try {

        const messages = await Contact
            .find()
            .sort({ createdAt: -1 });

        res.status(200).json(messages);

    } catch (error) {

        console.error('Error fetching contact messages:', error);

        res.status(500).json({message: 'Unable to fetch contact messages'});

    }

});

contactRouter.post('/', async (req, res) => {

    try {

        const {
            firstname,
            lastname,
            telnum,
            email,
            contactType,
            message,
            agree
        } = req.body;


        if (!firstname || !lastname || !email || !message) {

            return res.status(400).json({
                message: 'Please complete all required fields'
            });

        }


        if (!agree) {

            return res.status(400).json({
                message: 'Please allow us to contact you'
            });

        }


        const newContact = new Contact({
            firstname,
            lastname,
            telnum,
            email,
            contactType,
            message,
            agree
        });


        const savedContact = await newContact.save();


        res.status(201).json({
            message: 'Your message has been received',
            contact: savedContact
        });

    } catch (error) {

        console.error('Error saving contact message:', error);

        res.status(500).json({
            message: 'Unable to send your message'
        });

    }

});


module.exports = contactRouter;
