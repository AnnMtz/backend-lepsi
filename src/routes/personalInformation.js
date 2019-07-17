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

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const foundPersonalinformation = await personalinformation.getById(id)
      res.json({
        success: true,
        message: 'personal information found',
        payload: {
          personalinformation: foundPersonalinformation
        }
      })
    } catch (error) {
      console.error('Error: ', error)
      res.status(404)
      res.json({
        success: false,
        message: 'personal information not found',
        error: [
            error
        ]
      })
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const deletedPersonalInformation = await personalinformation.deleteById(id)
      res.json({
        success: true,
        message: 'Personal information deleted',
        payload: {
          personalinformation: deletedPersonalInformation
        }
      })
    } catch (error) {
      res.status(404)
      res.json({
        success: false,
        message: 'Cannot delete personal information',
        error: [
          error
        ]
      })
    }
  })

  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const newPersonalinformationData = req.body
      const updatedPersonalinformation = await personalinformation.updateById(id, newPersonalinformationData)
      res.json({
        success: true,
        message: 'Personal information updated',
        payload: {
          personalinformation: updatedPersonalinformation
        }
      })
    } catch (error) {
      console.error('Error: ', error)
      res.status(404)
      res.json({
        success: false,
        message: 'Cannot update personal information',
        error: error.message
      })
    }
  })

module.exports = router