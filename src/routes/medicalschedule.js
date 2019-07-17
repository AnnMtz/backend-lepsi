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

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const foundMedicalschedule = await medicalschedule.getById(id)
      res.json({
        success: true,
        message: 'medical schedule found',
        payload: {
          medicalschedule: foundMedicalschedule
        }
      })
    } catch (error) {
      console.error('Error: ', error)
      res.status(404)
      res.json({
        success: false,
        message: 'medical schedule not found',
        error: [
            error
        ]
      })
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const deletedMelicalschedule = await medicalschedule.deleteById(id)
      res.json({
        success: true,
        message: 'Medical schedule deleted',
        payload: {
          medicalschedule: deletedMelicalschedule
        }
      })
    } catch (error) {
      res.status(404)
      res.json({
        success: false,
        message: 'Cannot delete medical schedule',
        error: [
          error
        ]
      })
    }
  })

  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const newMedicalscheduleData = req.body
      const updatedMedicalschedule = await medicalschedule.updateById(id, newMedicalscheduleData)
      res.json({
        success: true,
        message: 'Medical schedule updated',
        payload: {
          medicalschedule: updatedMedicalschedule
        }
      })
    } catch (error) {
      res.status(404)
      res.json({
        success: false,
        message: 'Cannot update medical schedule',
        error: [
            error
        ]
      })
    }
  })

module.exports = router