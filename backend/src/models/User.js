const { Schema, model} = require ('mongoose');

const userSchema = new Schema({
    nombre: String,
    email: String,
    password: String,
    rol: String
},{
    timestamps: true
});

module.exports = model('User',userSchema);