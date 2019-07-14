const express = require('express')
const app = express()
const router = express.Router()
const medicalschedule = require('../usecases/medicalschedule')

router.get('/', async(req, res) => {
    const medicalschedules = await medicalschedule.get()

    res.json({
        success: true,
        message: 'DONE',
        payload: {
            medicalschedules
        }
    })
})

router.post('/', async(req, res) => {
    try{
        const medicalscheduleData = req.body
        console.log(medicalscheduleData);

        const newMedicalschedule = await medicalschedule.create(medicalscheduleData)

        res.json({
            success: true,
            message: 'New medical appointment created',
            payload: {
                medicalschedule: newMedicalschedule
            }
        })
        
    } catch(error) {
        res.status(400),
        res.json({
            success: false,
            message: 'Medical appointment couldn´t be created',
            error: [
                error
            ]
        })
    }
})

module.exports = router