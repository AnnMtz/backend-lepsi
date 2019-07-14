const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema ({
  //schema información personal pacientes
    birthdatePacient: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    agePacient: {
        required: true,
        type: Number,
        trim: true,
        minlength: 1
    },
    addressPacient: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    phonePacient: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    }
})

module.exports = {
    model: mongoose.model('PersonalInformation', schema),
    schema
}
