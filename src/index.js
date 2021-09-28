const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api/users',require('./routes/user.routes'));

//Start the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});