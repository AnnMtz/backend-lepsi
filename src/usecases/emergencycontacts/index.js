const Emergencycontacts = require('../../models/emergencycontacts').model

async function get() {
    const allemergencycontacts = await Emergencycontacts.find({}).exec()
    return allemergencycontacts
}

async function create(emergencycontactsData) {
    console.log("create")
    console.log(emergencycontactsData);

    const existingEmergencycontacts = await Emergencycontacts.find({...emergencycontactsData}).exec()
    const emergencycontactsExists = existingEmergencycontacts.length > 0

    if (emergencycontactsExists) throw new Error('Emergency contact information already exists')

    const emergencycontacts = new Emergencycontacts(emergencycontactsData)
    const emergencycontactsCreate = await emergencycontacts.save()
    return emergencycontactsCreate
}

module.exports = {
    get,
    create
}