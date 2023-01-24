const express = require('express');
const router = express();
const controller = require('../controllers/userController');
const { verifyUser } = require('../middlewares/auth');

require('dotenv').config();

// registration
router.post('/user/register', controller.userRegister);

// deleting a user
router.delete('/user/delete/:userID', verifyUser, controller.userDelete);

// logging in
router.post('/user/login', controller.userLogin);

// fetching all users
router.get('/users', controller.userFetch);

module.exports = router;
