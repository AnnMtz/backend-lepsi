const express = require('express')
const app = express()
const router = express.Router()
const medicalrecord = require('../usecases/medicalrecord')

router.get('/', async(req, res) => {
    const medicalrecords = await medicalrecord.get()

    res.json({
        success: true,
        message: 'DONE',
        payload: {
            medicalrecords
        }
    })
})

router.post('/', async(req, res) => {
    try{
        const medicalrecordData = req.body
        console.log(medicalrecordData);

        const newMedicalrecord = await medicalrecord.create(medicalrecordData)

        res.json({
            success: true,
            message: 'New medical record created',
            payload: {
                medicalrecord: newMedicalrecord
            }
        })
    } catch(error) {
        res.status(400),
        res.json({
            success: false,
            message: 'Medical record couldn´t be created',
            error: [
                error
            ]
        })
    }
})

module.exports = router