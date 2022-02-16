// Create express server
const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

const port = process.env.PORT || 5000;

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
