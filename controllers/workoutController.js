const Workout = require('../model/workoutModel')
const mongoose = require('mongoose')

const getWorkOuts =async (req, res) => {
    const work = await Workout.find().sort({createdAt:-1})
    res.status(200).json(work)   
}

const getWorkout =  async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No workout with this id '})
    }
  const work = await Workout.findById(id)
  if(!work){
    return res.status(404).json({error:'Workout not found!'})
  } 
  res.status(200).json(work)
  }

const createWorkout = async (req, res) =>{
    const{title,load,reps} = req.body
    try{
        const work = await Workout.create({title, load, reps})
        res.status(200).json(work)
    } catch(error){
        res.status(400).json({error:error.message})
    }
    }

    const updateWorkout = async(req,res) =>{
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No workout with this id '})
        }
      const work = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
      })
      if(!work){
        return res.status(400).json({error:'No Such Workout'})
      } 
      res.status(200).json(work)
    }
    const deleteWorkout = async (req,res) =>{
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No workout with this id '})
        }
      const work = await Workout.findOneAndDelete({_id: id})
      if(!work){
        return res.status(404).json({error:'No Such Workout'})
      } 
      res.status(200).json(work)
      }
      module.exports={
        getWorkOuts,
        getWorkout,
        createWorkout,
        updateWorkout,
        deleteWorkout}
    









