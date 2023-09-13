var express = require('express');
const routes = require('./routes');
var cors = require('cors');
var app = express();

// Use CORS middleware
app.use(cors({optionsSuccessStatus: 200}));

// Import routes
app.use('/api', routes);

// Start listening on process.env.PORT
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
