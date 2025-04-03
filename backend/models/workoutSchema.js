const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const workoutSchema=new Schema({
    exercise:{
        type:String,
        required:true
    },
    sets:{
        type:Number,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    dropSets:{
        type:Boolean,
        required:true
    },
},{timestamps:true});

const Workout=mongoose.model('Workout',workoutSchema);
module.exports=Workout;