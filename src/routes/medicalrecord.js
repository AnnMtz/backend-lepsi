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

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const foundMedicalrecord = await medicalrecord.getById(id)
      res.json({
        success: true,
        message: 'medical record found',
        payload: {
          medicalrecord: foundMedicalrecord
        }
      })
    } catch (error) {
      console.error('Error: ', error)
      res.status(404)
      res.json({
        success: false,
        message: 'medical record not found',
        error: [
            error
        ]
      })
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const deletedMedicalrecord = await medicalrecord.deleteById(id)
      res.json({
        success: true,
        message: 'Medical record deleted',
        payload: {
          medicalrecord: deletedMedicalrecord
        }
      })
    } catch (error) {
      res.status(404)
      res.json({
        success: false,
        message: 'Cannot delete medical record',
        error: [
          error
        ]
      })
    }
  })

  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const newMedicalrecordData = req.body
      const updatedMedicalrecord = await medicalrecord.updateById(id, newMedicalrecordData)
      res.json({
        success: true,
        message: 'Medical record updated',
        payload: {
          medicalrecord: updatedMedicalrecord
        }
      })
    } catch (error) {
      res.status(404)
      res.json({
        success: false,
        message: 'Cannot update medical record',
        error: [
            error
        ]
      })
    }
  })

module.exports = router