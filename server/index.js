const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Application is running on port ', PORT);
});
