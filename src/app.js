const express = require('express');
const httpStatus = require('http-status');
const bodyParser = require('body-parser');
const ApiError = require('./utils/ApiError')
const routes = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middleware/error');

const app = express();

// Middleware section
app.use(bodyParser.json());

app.use('/v1', routes);

// Error handling middleware
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;