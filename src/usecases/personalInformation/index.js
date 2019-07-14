const PersonalInformation = require('../../models/perosonalInformation').model

async function get() {
    const allpersonalInformation = await PersonalInformation.find({}).exec()
    return allpersonalInformation
}

async function create(personalinformationData) {
    console.log("create")
    console.log(personalinformationData);

    const existingPersonalinformation = await PersonalInformation.find({...personalinformationData}).exec()
    const personalinformationExists = existingPersonalinformation.length > 0

    if (personalinformationExists) throw new Error('Personal information already exists')

    const pesonalinformation = new PersonalInformation(personalinformationData)
    const pesonalinformationCreate = await pesonalinformation.save()
    return pesonalinformationCreate
}

module.exports = {
    get,
    create
}