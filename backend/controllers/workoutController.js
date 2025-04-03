const Workout=require('../models/workoutSchema');

//get all
const getWorkouts=async(req,res)=>{
    try{
        const workouts=await Workout.find({});

        res.status(200).json(workouts);
    }
    catch(err){
        res.status(400).json(err);
    }
}

const getWorkout=async(req,res)=>{
    const{id}=req.params;
    try{
        const workout=await Workout.findById(id);
        res.status(200).json(workout);
    }catch(err){
        res.status(400).json(err);
    }
}
//create workout (Post)
const createWorkout=async(req,res)=>{
    const{exercise,sets,reps,weight,dropSets}=req.body;
    try{
        const workout=await  Workout.create({ //no new keyword is used here instead use .create or .save()
            exercise,
            sets,
            reps,
            weight,
            dropSets
        })
        res.status(201).json(workout); //201 status code is for created
    }catch(err){
        res.status(400).json(err);
    }

}

const deleteWorkout=async(req,res)=>{
    const{id}=req.params;
    const workout=await Workout.findByIdAndDelete(id);

    try{
        res.status(200).json(workout);
    }catch(err){
        res.status(400).json(err);
    }
}

const updateWorkout = async (req, res) => {
    const { id } = req.params;
    
    try {
        const workout = await Workout.findByIdAndUpdate(id, {...req.body}, {new: true});
        
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports={
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}