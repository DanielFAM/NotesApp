const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

require('dotenv').config();
require('./database');

//Settings
app.set('port', process.env.PORT || 2000);
app.set('views', path.join(__dirname,'views'));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api/users',require('./routes/user.routes'));
app.use('/api/notes', require('./routes/note.routes'));

//Start the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});