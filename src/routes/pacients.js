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

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const foundPacient = await pacient.getById(id)
      res.json({
        success: true,
        message: 'pacient information found',
        payload: {
          pacient: foundPacient
        }
      })
    } catch (error) {
      res.status(404)
      res.json({
        success: false,
        message: 'pacient information not found',
        error: [
            error
        ]
      })
    }
  })

  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const newPacientData = req.body
      const updatedPacient = await pacient.updateById(id, newPacientData)
      res.json({
        success: true,
        message: 'Pacient information updated',
        payload: {
          pacient: updatedPacient
        }
      })
    } catch (error) {
      res.status(404)
      res.json({
        success: false,
        message: 'Cannot update pacient information',
        error: [
            error
        ]
      })
    }
  })

module.exports = router