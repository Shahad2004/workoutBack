const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./Routes/workout')
const mongoose = require('mongoose')
const cors = require('cors')


//express app
const app = express()
app.use(cors())
//middleare
app.use(express.json())
//routes
app.use('/api/workouts', workoutRoutes)



mongoose.connect(process.env.MONGO_URL).then(() => {
 app.listen(process.env.PORT,() =>{
    console.log('connected to db and listening for requests',process.env.PORT)
 })
})
.catch((err) =>{
    console.log(err.message)
})