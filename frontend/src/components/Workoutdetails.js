import React from "react";

const Workoutdetails = ({workout}) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="workout-details">
            <h1>{workout.exercise}</h1>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weight(Kg): {workout.weight}</p>
            <p>Date: {formatDate(workout.createdAt)}</p>
            <p>DropSet: {workout.dropSets.toString()}</p>
        </div>
    );
}

export default Workoutdetails;