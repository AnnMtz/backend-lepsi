const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema ({
    //schema medical record
    medicalDiagnostic: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    diagnosisYears: {
        required: true,
        type: Number,
        trim: true,
        minlength: 1
    },
    medicine: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    medicamentationDose: {
        required: true,
        type: Number,
        trim: true,
        minlength: 1
    },
    medicationHours: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    }
})

module.exports = {
    model: mongoose.model('Medicalrecord', schema),
    schema
}