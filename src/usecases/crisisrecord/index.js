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

module.exports = {
    get,
    create
}