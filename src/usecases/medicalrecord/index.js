const Medicalrecord = require('../../models/medicalrecord').model

async function get() {
    const allMedicalrecord = await Medicalrecord.find().exec()
    return allMedicalrecord
}

async function create(medicalrecordData) {
    console.log(medicalrecordData);

    const existingMedicalrecord = await Medicalrecord.find({...medicalrecordData}).exec()
    const medicalrecordExists = existingMedicalrecord.length > 0

    if(medicalrecordExists) throw new Error('Medical record already exists')

    const medicalrecord = new Medicalrecord(medicalrecordData)
    const medicalrecordCreate = await medicalrecord.save()
    return medicalrecordCreate
    
}

module.exports = {
    get,
    create
}