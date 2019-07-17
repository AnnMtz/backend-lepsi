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

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const foundEmergencycontact = await emergencycontacts.getById(id)
      res.json({
        success: true,
        message: 'emergency contact found',
        payload: {
          emergencycontacts: foundEmergencycontact
        }
      })
    } catch (error) {
    //   console.error('Error: ', error)
      res.status(404)
      res.json({
        success: false,
        message: 'emergency contact not found',
        error: [
            error
        ]
      })
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const deleteEmergencycontact = await emergencycontacts.deleteById(id)
      res.json({
        success: true,
        message: 'Emergency contact deleted',
        payload: {
          emergencycontacts: deleteEmergencycontact
        }
      })
    } catch (error) {
      res.status(404)
      res.json({
        success: false,
        message: 'Cannot delete emergency contact',
        error: [
          error
        ]
      })
    }
  })

  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const newEmergencycontactsData = req.body
      const updatedEmergencycontact = await emergencycontacts.updateById(id, newEmergencycontactsData)
      res.json({
        success: true,
        message: 'Emergency contact updated',
        payload: {
          emergencycontacts: updatedEmergencycontact
        }
      })
    } catch (error) {
    //   console.error('Error: ', error)
      res.status(404)
      res.json({
        success: false,
        message: 'Cannot update emergency contact',
        error: [
            error
        ]
      })
    }
  })

module.exports = router