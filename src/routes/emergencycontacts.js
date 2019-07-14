const express = require('express')
const app = express()
const router = express.Router()
const emergencycontacts = require('../usecases/emergencycontacts')

router.get('/', async(req, res) => {
    const allemergencycontacts = await emergencycontacts.get()

    res.json({
        success: true,
        message: 'DONE',
        payload: {
            allemergencycontacts
        }
    })
})

router.post('/', async(req, res) => {
    try{
        const emergencycontactsData = req.body
        console.log("2do console")
        console.log(emergencycontactsData);
        
        const newEmergencycontacts = await emergencycontacts.create(emergencycontactsData)
        // console.log("new personal")
        console.log(newEmergencycontacts)
        res.json({
            success: true,
            message: 'New emergency contact information created',
            payload: {
                emergencycontacts: newEmergencycontacts
            }
        })
        }   catch(error) {
            res.status(400)
            res.json({
                success: false,
                message: 'Emergency contacts information couldn´t be created',
                error: [
                    error
                ]
            })
    }
})

module.exports = router