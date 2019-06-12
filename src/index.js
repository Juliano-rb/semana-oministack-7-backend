const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://julianoro:onailuj123@cluster0-wfnn3.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use(require('./routes'))

app.listen(3333)