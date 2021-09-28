const Mongoose = require("mongoose");

Mongoose.connect('mongodb://localhost/notes-db', {

})
    .then((db) => console.log(`DB ${db} is connected`))
    .catch((err) => console.error(err));