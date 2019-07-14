const mongoose = require('mongoose')

const { Schema } = mongoose

const squema = new Schema ({
    //schema criris record
    crisisDay: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    timeCrisis: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    durationCrisis: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    typeCrisis: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    }
})

module.exports = {
    model: mongoose.model('Crisisrecord', squema),
    squema
}