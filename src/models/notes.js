const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
    title: {type:String, required: true},
    content: {type:String, required: true}
},{
    timestamps: true //añade createdAt y updated At
});

module.exports = model('Notes',noteSchema);