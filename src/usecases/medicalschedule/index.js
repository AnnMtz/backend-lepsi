const Medicalschedule = require('../../models/medicalschedule').model

async function get() {
    const allMedicalschedules = await Medicalschedule.find({}).exec()
    return allMedicalschedules
}

async function create(medicalscheduleData) {
    console.log(medicalscheduleData);

    const existingMedicalschedule = await Medicalschedule.find({...medicalscheduleData}).exec()
    const medicalscheduleExists = existingMedicalschedule.length > 0

    if(medicalscheduleExists) throw new Error('Medical appointment already exists')

    const medicalschedule = new Medicalschedule(medicalscheduleData)
    const medicalscheduleCreate = await medicalschedule.save()
    return medicalscheduleCreate
    
}

async function getById(medicalscheduleId) {
    const medicalschedule = await Medicalschedule(medicalsheduleId).lean();
    if(!medicalschedule) throw new Error('Medical shedule not found')
    const { cleanMedicalschedule } = medicalschedule
    return cleanMedicalschedule
}

const deleteById = (medicalscheduleId) => Medicalschedule.findByIdAndDelete(medicalscheduleId)

const updateById = (medicalscheduleId, medicalscheduleData) => Medicalschedule.findByIdAndUpdate(medicalscheduleId, medicalscheduleData)

module.exports = {
    get,
    create,
    getById,
    deleteById,
    updateById
}