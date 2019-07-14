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

module.exports = {
    get,
    create
}