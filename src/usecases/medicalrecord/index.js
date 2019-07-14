const Medicalrecord = require('../../models/medicalrecord')

async function get() {
    const allmedicalrecord = await Medicalrecord.find({}).exec()
    return allmedicalrecord
}

async function create(medicalrecordData) {
    console.log("create")
    console.log(medicalrecordData);

    const existingMedicalrecord = await Medicalrecord.find({...medicalrecordData}).exec()
    const medicalrecordExists = existingMedicalrecord.length > 0

    if (medicalrecordExists) throw new Error('Medical record information already exists')

    const medicalrecord = new Medicalrecord(medicalrecordData)
    const medicalrecordCreate = await medicalrecord.save()
    return medicalrecordCreate
}

module.exports = {
    get,
    create
}