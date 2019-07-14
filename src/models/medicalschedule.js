const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema ({
    //schema medical shedule
    medicalAppointmentDay: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    appointmentTime: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    }

})

module.exports = {
    model: mongoose.model('Medicalschedule', schema),
    schema
}