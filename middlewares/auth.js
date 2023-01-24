const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretUser = process.env.SECRET_KEY_USER;
const secretStaff = process.env.SECRET_KEY_STAFF;
const secretManager = process.env.SECRET_KEY_MANAGER;
const secretAdmin = process.env.SECRET_KEY_ADMIN;

exports.verifyUser = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secretUser);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

exports.verifyStaff = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secretStaff);
    req.staffData = decoded;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

exports.verifyManager = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secretManager);
    req.managerData = decoded;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

exports.verifyAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secretAdmin);
    req.adminData = decoded;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
