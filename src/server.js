const express = require('express') //para conectarme con la API
const cors = require('cors') //conecta con front

const app = express() //método que pertenece a express

const pacientsRoutes = require('./routes/pacients')
const personalInformationRoutes = require('./routes/personalInformation')
const emergencycontactsRoutes = require('./routes/emergencycontacts')
const medicalrecordRoutes = require('./routes/medicalrecord')

//middleware 
app.use(cors())
app.use(express.json())

app.use('/pacients', pacientsRoutes)
app.use('/personalInformation', personalInformationRoutes)
app.use('/emergencycontacts', emergencycontactsRoutes)
app.use('/medicalrecord', medicalrecordRoutes)

app.get('/', (req, res) => {
    res.json({
        success: true,
        message:'pacientsApi running'
    })
})

module.exports = app