import React from "react";

const Workoutdetails = ({workout, ondelete}) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const deleteworkout=async ()=>{
        const response=await fetch(`api/workouts/${workout._id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"},

        });
        const json =await response.json();
        if(response.ok){
            console.log('workout deleted',json);
            ondelete(workout._id); // Call the onDelete function passed from the parent component
        // This will remove the workout from the list in the parent component
        }
        else{
            console.log('error deleting workout',json);
        }
    }

    return (
        <div className="workout-details">
            <h1>{workout.exercise}</h1>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weight(Kg): {workout.weight}</p>
            <p>Date: {formatDate(workout.createdAt)}</p>
            <p>DropSet: {workout.dropSets.toString()}</p>
            <button className ="btn" onClick={deleteworkout}>delete workout</button>
        </div>
    );
}

export default Workoutdetails;