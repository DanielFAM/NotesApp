const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
    title: String,
    content: String
});

module.exports = model('Notes',noteSchema);