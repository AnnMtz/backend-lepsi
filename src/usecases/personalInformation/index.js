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

async function getById(personalinformationId) {
    const personalinformation = await PersonalInformation(personalinformationId).lean();
    if(!personalinformation) throw new Error('Personal information not found');
    const { cleanPersonalinformation } = personalinformation;
    return cleanPersonalinformation;
}

const deleteById = (personalinformationId) => PersonalInformation.findByIdAndDelete(personalinformationId)

const updateById = (personalinformationId, personalinformationData) => PersonalInformation.findByIdAndUpdate(personalinformationId, personalinformationData)

module.exports ={
    get,
    create,
    getById,
    deleteById,
    updateById
}