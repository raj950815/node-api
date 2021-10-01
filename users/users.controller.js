const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.get('/:id', getById);

module.exports = router;

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}
