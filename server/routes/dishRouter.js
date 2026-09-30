const express = require('express');
const mongoose = require('mongoose');
const Dish = require('../models/Dish');

const dishRouter = express.Router();

dishRouter.get('/', async (req, res) => {

    try {

        const dishes = await Dish.find();

        res.status(200).json(dishes);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Unable to retrieve dishes'
        });

    }

});


dishRouter.get('/:dishId', async (req, res) => {

    try {

        const dishId = req.params.dishId;


        if (!mongoose.Types.ObjectId.isValid(dishId)) {

            return res.status(400).json({
                message: 'Invalid dish ID'
            });

        }


        const dish = await Dish.findById(dishId);


        if (!dish) {

            return res.status(404).json({
                message: 'Dish not found'
            });

        }


        res.status(200).json(dish);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Unable to retrieve dish'
        });

    }

});


module.exports = dishRouter;
