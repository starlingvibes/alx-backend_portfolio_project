const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// creating a new mongoose schema
const FlightSchema = new Schema(
  {
    title: { type: String, required: true },
    time: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// using the schema as a database model
const Flight = mongoose.model('Flight', FlightSchema);

module.exports = Flight;
