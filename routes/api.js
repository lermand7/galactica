const express = require('express');

const router = express.Router();

const name = require('../models/name');


// Routes
router.get('/', (req, res) => {

    name.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newName = new name(data);

    newName.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        return res.json({
            msg: 'Your data has been saved!'
        });
    });
});

module.exports = router;