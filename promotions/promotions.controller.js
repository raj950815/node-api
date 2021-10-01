const express = require('express');
const router = express.Router();
const promotionService = require('./promotion.service');

// routes
router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    promotionService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}
