const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true
        },

        lastname: {
            type: String,
            required: true,
            trim: true
        },

        telnum: {
            type: String,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        contactType: {
            type: String,
            enum: ['Email', 'Phone'],
            default: 'Email'
        },

        message: {
            type: String,
            required: true,
            trim: true
        },

        agree: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Contact', contactSchema);
