const express = require('express');
const controller = require('../controllers/flightController');

const router = express.Router();

// configuring the public API routes
router.get('/', controller.fetch);
router.get('/:id', controller.fetchid);

// configuring the private API routes
router.post('/add', controller.add);
router.post('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
