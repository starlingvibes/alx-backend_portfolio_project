let Flight = require('../models/Flight');

// get all flights
exports.fetch = (req, res) => {
  Flight.find()
    .then((flight) => res.json(flight))
    .catch((err) => res.status(400).json('Error ' + err));
};

// add a flight
exports.add = (req, res) => {
  const title = req.body.title;
  const time = req.body.time;
  const price = req.body.price;
  const date = req.body.date;

  const newFlight = new Flight({
    title,
    time,
    price,
    date,
  });

  newFlight
    .save()
    .then(() => res.json('Flight added!'))
    .catch((err) => res.status(400).json('Error ' + err));
};

// get a single flight
exports.fetchid = (req, res) => {
  Flight.findById(req.params.id)
    .then((flight) => res.json(flight))
    .catch((err) => res.status(400).json('Error ' + err));
};

// delete flight
exports.delete = (req, res) => {
  Flight.findByIdAndDelete(req.params.id)
    .then(res.json('Flight deleted!'))
    .catch((err) => res.status(400).json('Error ' + err));
};

// update flight information
exports.update = (req, res) => {
  Flight.findById(req.params.id)
    .then((flight) => {
      flight.title = req.body.title;
      flight.time = req.body.time;
      flight.price = req.body.price;
      flight.date = req.body.date;

      flight
        .save()
        .then(res.json('Flight updated!'))
        .catch((err) => res.status(400).json('Error ' + err));
    })
    .catch((err) => res.status(400).json('Error ' + err));
};
