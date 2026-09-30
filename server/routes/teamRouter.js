const express = require('express');
const Team = require('../models/Team');

const teamRouter = express.Router();

teamRouter.get('/', async (req, res) => {

    try {

        const team = await Team.find();

        res.json(team);

    } catch (error) {

        console.error('Error fetching team:', error);

        res.status(500).json({
            message: 'Unable to fetch team members'
        });

    }

});


module.exports = teamRouter;
