const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: { type: String, required:true },
    email : { type: String, required:true },
    password : { type: String, required:true }
},{
    timestamps:true//Crea los apartados de createdAt $ updated At
});

userSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('User',userSchema);