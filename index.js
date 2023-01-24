// importing external dependencies and routes
const express = require('express');
const { json } = require('express');
const { default: mongoose } = require('mongoose');
// const flights = require('./controllers/flightController');
// const models = require('./models/Flight');
const flightRoutes = require('./routes/flightRoute');
const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');

require('dotenv').config();

const app = express();

app.use(json());

// initializing environment variables
const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

// setting the root route
app.use('/', flightRoutes);

// configuring server listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
