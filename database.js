const { default: mongoose } = require('mongoose');
require('dotenv').config();

const URI = process.env.ATLAS_URI;

mongoose.connect(URI, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', (req, res) => {
  console.log(`Database connection established successfully!`);
});

module.exports = mongoose;
