const mongoose = require("mongoose");
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config/config');
const routes = require('./routes/index');
const env = process.env.NODE_ENV || 'local';

mongoose.connect(config[env].db_url);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
    console.log("Database connection opened.");
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/*app.get('/', function (req, res) {
	res.send('Hello World!');
});
*/
routes(app);
app.listen(3000, function() {
	console.log('app listening on port 3000')
});