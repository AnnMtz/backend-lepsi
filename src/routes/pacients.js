//Conexión con la base de datos
const express = require('express') //para hacer las conexiones HTTP
const app = express()
const router = express.Router()
const pacient = require('../usecases/pacients')

router.get('/', async(req, res) => {
    const pacients = await pacient.get()

    res.json({
        success: true,
        message: 'DONE',
        payload: {
            pacients
        }
    })
})

router.post('/', async(req, res) => {
    try{
        const pacientData = req.body
        console.log(pacientData);
        
        const newPacient = await pacient.create(pacientData)

        res.json({
            success: true,
            message: 'New pacient created',
            payload: {
                pacient: newPacient
            }
        })
        }   catch(error) {
            res.status(400)
            res.json({
                success: false,
                message: 'Pacient couldn´t be created',
                error: [
                    error
                ]
            })
    }
})

module.exports = router