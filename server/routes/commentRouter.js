const express = require('express');
const mongoose = require('mongoose');
const Comment = require('../models/Comment');

const commentRouter = express.Router();

commentRouter.get('/dish/:dishId', async (req, res) => {

    try {

        const { dishId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(dishId)) {

            return res.status(400).json({
                message: 'Invalid dish ID'
            });

        }

        const comments = await Comment
            .find({ dishId })
            .sort({ createdAt: -1 });

        res.status(200).json(comments);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Unable to retrieve comments'
        });

    }

});

commentRouter.post('/', async (req, res) => {

    try {

        const {
            dishId,
            rating,
            author,
            comment
        } = req.body;


        if (!mongoose.Types.ObjectId.isValid(dishId)) {

            return res.status(400).json({
                message: 'Invalid dish ID'
            });

        }


        const newComment = new Comment({
            dishId,
            rating,
            author,
            comment
        });


        const savedComment = await newComment.save();


        res.status(201).json(savedComment);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Unable to save comment'
        });

    }

});


module.exports = commentRouter;
