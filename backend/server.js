// Create express server
const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const colors = require('colors');

const app = express();

app.use(morgan('dev'));

const port = process.env.PORT || 5000;

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
