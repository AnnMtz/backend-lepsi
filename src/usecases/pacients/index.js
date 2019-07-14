const Pacient = require('../../models/pacient').model

async function get() {
    const allPacients = await Pacient.find({}).exec()
    return allPacients
}

async function create(pacientData) {
    console.log(pacientData);
    
    const existingPacients = await Pacient.find({...pacientData}).exec()
    const pacientExists = existingPacients.length > 0

    if(pacientExists) throw new Error('Pacient already exist')

    const pacient = new Pacient(pacientData)
    const pacientCreate = await pacient.save()
    return pacientCreate
}

module.exports = {
    get,
    create
}