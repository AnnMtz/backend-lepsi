const express = require('express')
const app = express()
const router = express.Router()
const medicalrecord = require('../usecases/medicalrecord')

router.get('/', async(req, res) => {
    const allmedicalrecord= await medicalrecord.get()

    res.json({
        success: true,
        message: 'DONE',
        payload: {
            allmedicalrecord
        }
    })
})

router.post('/', async(req, res) => {
    try{
        const medicalrecordData = req.body
        console.log("2do console")
        console.log(medicalrecordData);
        
        const newMedicalrecord = await medicalrecord.create(medicalrecordData)
        console.log("new personal")
        console.log(newMedicalrecord)
        res.json({
            success: true,
            message: 'New medical record information created',
            payload: {
                medicalrecord: newMedicalrecord
            }
        })
        }   catch(error) {
            res.status(400)
            res.json({
                success: false,
                message: 'Medical record information couldn´t be created',
                error: [
                    error
                ]
            })
    }
})

module.exports = router