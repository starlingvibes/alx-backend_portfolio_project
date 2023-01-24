const express = require('express');
const router = express();
const controller = require('../controllers/adminController');
const { verifyAdmin } = require('../middlewares/auth');

require('dotenv').config();

// registration
router.post('/admin/register', controller.adminRegister);

// deleting a user
router.delete('/admin/delete/:userID', verifyAdmin, controller.adminDelete);

// logging in
router.post('/admin/login', controller.adminLogin);

// fetching all users
router.get('/admins', controller.adminFetch);

module.exports = router;
