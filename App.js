var express = require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
sequelize.sync();
app.use(require('./middleware/headers'));
app.listen(3000, () => {
    console.log('App is listening on 3000')
});

app.use('/login', require('./routes/Login'));
app.use('/bikelog', require('./routes/BikeLog'));
app.use('/create_user', require('./routes/User'));