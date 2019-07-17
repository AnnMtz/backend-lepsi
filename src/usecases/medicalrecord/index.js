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

async function getById(medicalrecordId) {
    const medicalrecord = await Medicalrecord(medicalrecordId).lean();
    if(!medicalrecord) throw new Error('Medical record not found')
    const { cleanMedicalrecord } = medicalrecord
    return cleanMedicalrecord
}

const deleteById = (medicalrecordId) => Medicalrecord.findByIdAndDelete(medicalrecordId)

const updateById = (medicalrecordId, medicalrecordData) => Medicalrecord.findByIdAndUpdate(medicalrecordId, medicalrecordData)

module.exports = {
    get,
    create,
    getById,
    deleteById,
    updateById
}