const { Router } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const app = express();

const router = Router();

require('dotenv').config();
require('./database');

//Settings
app.set('port', process.env.PORT || 2000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api/users',require('./routes/user.routes'));
app.use('/api/notes', require('./routes/note.routes'));
app.get('/', (req,res) => {
    res.render('index');
});

//Start the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});