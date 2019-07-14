const mongoose = require('mongoose') //estructura de los datos

const { Schema } = mongoose //deconstrucción

const schema = new Schema({
    //schema pacientes
    namePacient: {
        required: true,
        type: String,
        trim: true, //quita los espacios de más
        minlength: 1,
        lowercase: true
    },
    lastnamePacient: {
        required: true,
        type: String,
        trim: true,
        minlength: 1,
        lowercase: true
    },
    emailPacient: {
        required: true,
        type: String,
        trim: true,
        minlength: 1,
        lowercase: true
    },
    passwordPacient: {
        required: true,
        type: String,
        trim: true,
        minlength: 1,
        lowercase: true
    }
})

module.exports = {
    model: mongoose.model('Pacient', schema),
    schema
}