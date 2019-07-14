const mongoose= require('mongoose'); //hace la conexión a la bd

const connect = () => new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost:27017/pacients', {
        useNewUrlParser: true
    });
    const db = mongoose.connection; //para escuchar el puerto

    //event listener, conexión abierta
    db.on('open', () => {
        console.warn('connection open')
        resolve(mongoose)
    })
    
    //event listener, error en la conexión
    db.on('error', () => {
        console.error('Can´t make connection', error)
        reject(error)
    })
})

module.exports = { connect }