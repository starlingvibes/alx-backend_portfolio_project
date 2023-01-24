const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let Admin = require('../models/Admin');

exports.adminRegister = async (req, res) => {
  await Admin.find({ email: req.body.email })
    .exec()
    .then((users) => {
      if (users.length >= 1) {
        return res.status(409).json({
          message: 'Email already taken!',
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new Admin({
              name: req.body.name,
              email: req.body.email,
              password: hash,
            });

            user
              .save()
              .then((result) =>
                res.status(201).json({
                  message: result,
                })
              )
              .catch((err) => res.status(500).json({ error: err }));
          }
        });
      }
    });
};

exports.adminDelete = async (req, res) => {
  await Admin.deleteOne({ _id: req.params.userID })
    .exec()
    .then((response) =>
      res.status(200).json({ message: 'User deleted successfully!' })
    )
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.adminLogin = async (req, res) => {
  await Admin.find({ email: req.body.email })
    .exec()
    .then((admins) => {
      if (admins.length == 0) {
        return res.sendStatus(404);
      }
      bcrypt.compare(req.body.password, admins[0].password, (err, same) => {
        if (err) {
          res.sendStatus(401);
        }
        if (same) {
          // create a token
          const token = jwt.sign(
            {
              email: admins[0].email,
              userID: admins[0]._id,
            },
            process.env.SECRET_KEY_ADMIN,
            {
              expiresIn: '1h',
            }
          );
          return res.status(200).json({
            message: 'Authorization successful',
            token: token,
          });
        }
        res.sendStatus(401);
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};

exports.adminFetch = async (req, res) => {
  await Admin.find()
    .then((admins) => {
      return res.status(200).json({
        message: admins,
      });
    })
    .catch((err) => res.status(400).json({ 'Error: ': err }));
};
