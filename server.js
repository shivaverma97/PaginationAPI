if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const indexRoute = require('./routes/index')
const bodyParser = require('body-parser')

app.listen(process.env.PORT || 5000)
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))
app.use('/index', indexRoute)

// for connection to db
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
const user = require('./models/User')

db.on('error', error => console.log(error))

db.once('open', () => console.log("Mongoose Connected successfully") )



