const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        image: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true,
            enum: ['starter', 'main', 'side', 'dessert']
        },

        label: {
            type: String,
            default: ''
        },

        price: {
            type: Number,
            required: true
        },

        featured: {
            type: Boolean,
            default: false
        },

        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
