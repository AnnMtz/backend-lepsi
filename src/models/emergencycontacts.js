const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema ({
    //schema emergency contacts
    contactName: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    contactLastname: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    contactRelationship: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    concactPhone: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    },
    contactCelphone: {
        required: true,
        type: String,
        trim: true,
        minlength: 1
    }
})

module.exports = {
    model: mongoose.model('Emergencycontacts', schema),
    schema
}
