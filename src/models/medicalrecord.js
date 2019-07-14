const mongoose= require('mongoose');

const { Schema }= mongoose;

const schema = new Schema ({
    //schema registro médico
    pacientDiagnostic: {
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
    pacientMedicine: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    medicationDose: {
        required: true,
        type: Number,
        trim: true,
        minlength: 1
    },
    medicationSchedule: {
        required: false,
        type: String,
        trim: true,
        minlength: 1
    }
})

module.exports = {
    model: mongoose.model('Medicalrecord', schema),
    schema
}