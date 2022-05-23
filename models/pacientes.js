const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dni: {
        type: Number,
        required: true,
        unique: true,
    },
    socialWelfare: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }

});
const Paciente = mongoose.model('Paciente', storeSchema);

module.exports = {Paciente}