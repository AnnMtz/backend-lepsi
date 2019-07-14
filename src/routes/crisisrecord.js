const express = require('express')
const app = express()
const router = express.Router()
const crisisrecord = require('../usecases/crisisrecord')

router.get('/', async(req, res) => {
    const crisisrecords = await crisisrecord.get()

    res.json({
        success: true,
        message: 'DONE',
        payload: {
            crisisrecords
        }
    })
})

router.post('/', async(req, res) => {
    try{
        const crisisrecordData = req.body
        console.log(crisisrecordData);

        const newCrisisrecord = await crisisrecord.create(crisisrecordData)

        res.json({
            success: true,
            message: 'Crisis information created',
            payload: {
                crisisrecord: newCrisisrecord
            }
        })
        
    } catch(error) {
        res.status(400),
        res.json({
            success: false,
            message: 'Crisis information couldn´t be created',
            error: [
                error
            ]
        })
    }
})

module.exports = router