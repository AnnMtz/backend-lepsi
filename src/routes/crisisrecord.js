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

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const foundCrisisrecord = await crisisrecord.getById(id)
      res.json({
        success: true,
        message: 'crisis record found',
        payload: {
          crisisrecord: foundCrisisrecord
        }
      })
    } catch (error) {
      res.status(404)
      res.json({
        success: false,
        message: 'crisis record not found',
        error: [
            error
        ]
      })
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const deleteCrisisrecord = await crisisrecord.deleteById(id)
      res.json({
        success: true,
        message: 'Crisis record deleted',
        payload: {
          crisisrecord: deleteCrisisrecord
        }
      })
    } catch (error) {
      res.status(404)
      res.json({
        success: false,
        message: 'Cannot delete crisis record',
        error: [
          error
        ]
      })
    }
  })

module.exports = router