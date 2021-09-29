const Mongoose = require("mongoose");

Mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then((db) => console.log('DB is connected'))
    .catch((err) => console.error(err));