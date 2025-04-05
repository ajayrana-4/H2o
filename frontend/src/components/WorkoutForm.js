import { useState } from "react";
import React from "react";

const WorkoutForm = ({setWorkouts}) => {
  const [title, settitle] = useState("");
  const [sets, setsets] = useState("");
  const [reps, setreps] = useState("");
  const [weight, setweight] = useState("");
  const [dropsets, setdropsets] = useState(false);
  const [error, seterror] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing when the form is submitted

    // Update field names to match the backend
    const workouts = { exercise: title, sets, reps, weight, dropSets: dropsets };

    const response = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workouts),
    });

    const json = await response.json();
    if (!response.ok) {
      seterror(json.error);
    }
    if (response.ok) {
      settitle("");
      setsets("");
      setreps("");
      setweight("");
      setdropsets(false);
      seterror(null);
      console.log("New workout added", json);
    }
    setWorkouts((prev)=>[json,...prev]); // Update the workouts state in the parent component
  };

  return (
    <form className="create" onSubmit={handlesubmit}>
      <h3>Add a new Workout</h3>

      {/* Fixed: Label spelling error */}
      <label>Exercise</label>
      <input
        type="text"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <label>Sets</label>
      <input
        type="number"
        onChange={(e) => setsets(e.target.value)}
        value={sets}
      />

      <label>Reps</label>
      <input
        type="number"
        onChange={(e) => setreps(e.target.value)}
        value={reps}
      />

      <label>Weight (Kg)</label>
      <input
        type="number"
        onChange={(e) => setweight(e.target.value)}
        value={weight}
      />

      <label>Drop Sets</label>
      <input
        type="checkbox"
        onChange={(e) => setdropsets(e.target.checked)}
        checked={dropsets}
      />

      <button className="addworkout">Add workout</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
