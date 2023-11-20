const express = require('express')
const Workout = require('../model/workoutModel')
const mongoose = require('mongoose')
const router = express.Router()
const{
    getWorkOuts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout}=require('../controllers/workoutController')

//get all workouts
router.get('/',getWorkOuts)
//get a single workout                     
router.get('/:id',getWorkout)
//Post a new workout
router.post('/',createWorkout)
//Delete a new workout
router.delete('/:id',deleteWorkout)
//Update an new workout
router.patch('/:id',updateWorkout)
module.exports = router


