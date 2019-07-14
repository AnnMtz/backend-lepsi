const express = require('express')
const app = express()
const router = express.Router()
const personalinformation = require('../usecases/personalInformation')

router.get('/', async(req, res) => {
    const allpersonalinformation = await personalinformation.get()

    res.json({
        success: true,
        message: 'DONE',
        payload: {
            allpersonalinformation
        }
    })
})

router.post('/', async(req, res) => {
    try{
        const personalinformationData = req.body
        console.log("2do console")
        console.log(personalinformationData);
        
        const newPersonalinformation = await personalinformation.create(personalinformationData)
        console.log("new personal")
        console.log(newPersonalinformation)
        res.json({
            success: true,
            message: 'New personal information created',
            payload: {
                personalinformation: newPersonalinformation
            }
        })
        }   catch(error) {
            res.status(400)
            res.json({
                success: false,
                message: 'Personal information couldn´t be created',
                error: [
                    error
                ]
            })
    }
})

module.exports = router