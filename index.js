const express = require('express');
const app = express();
const routes = require('./routes');

// Import routes
app.use('/api', routes);

// Enable CORS
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// Listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on localhost:' + listener.address().port);
});
