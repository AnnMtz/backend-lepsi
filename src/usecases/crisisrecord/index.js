const Crisisrecord = require('../../models/crisisrecord').model

async function get() {
    const allCrisisrecords = await Crisisrecord.find({}).exec()
    return allCrisisrecords
}

async function create(crisisrecordData) {
    console.log(crisisrecordData);

    const existingCrisisrecords = await Crisisrecord.find({...crisisrecordData}).exec()
    const crisisrecordExists = existingCrisisrecords.length > 0

    if(crisisrecordExists) throw new Error('Crisis record information already exists')

    const crisisrecord = new Crisisrecord(crisisrecordData)
    const crisisrecordCreate = await crisisrecord.save()
    return crisisrecordCreate
    
}

async function getById(crisisrecordId) {
    const crisisrecord = await Crisisrecord(crisisrecordId).lean();
    if(!crisisrecord) throw new Error('Crisis record not found')
    const { cleanCrisisrecord } = crisisrecord
    return cleanCrisisrecord
}

const deleteById = (crisisrecordId) => Crisisrecord.findByIdAndDelete(crisisrecordId)

module.exports = {
    get,
    create,
    getById,
    deleteById
}