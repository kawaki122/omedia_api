const express = require('express');
const httpStatus = require('http-status');
const bodyParser = require('body-parser');
const ApiError = require('./src/utils/ApiError')
const routes = require('./src/routes/v1');
const { errorConverter, errorHandler } = require('./src/middleware/error');

const app = express();

// Middleware section
app.use(bodyParser.json());

app.use('/v1', routes);

// Error handling middleware
app.use((req, res, next) => {
    console.log('Inside 404 middleware')
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on port ${port}`));
