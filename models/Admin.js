const db = require('../database');

const adminSchema = new db.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: {
      type: String,
      enum: ['user', 'staff', 'manager', 'admin'],
      default: 'admin',
    },
  },
  { timestamps: true }
);

const Admin = db.model('Admin', adminSchema);
module.exports = Admin;
