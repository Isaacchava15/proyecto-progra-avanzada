var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    task = require('./api/models/tasks/taskModel'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/proyecto');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var taskRoutes = require('./api/routes/tasks/taskRoute');

taskRoutes(app);

app.listen(port);

console.log('Task RESTful API server started on port ' + port);


// hola soy thony