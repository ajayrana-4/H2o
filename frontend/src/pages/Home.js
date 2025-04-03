import React from 'react';
import { useEffect ,useState } from 'react';
import Workoutdetails from '../components/Workoutdetails';
import WorkoutForm from '../components/WorkoutForm'; // Importing the WorkoutForm component

function Home() {
  const [Workouts,setWorkouts]=useState([]); //to store the data fetched from the backend

  useEffect(()=>{ //to fetch data from backend and display it on the console
    const fetchWorkouts=async()=>{

      const res=await fetch('/api/workouts');
      const data=await res.json();
      if(res.ok){
        setWorkouts(data);
        console.log(data);
      }
      else{
        console.log("Error"); //if there is an error in fetching data from the backend  
      }
    }
    fetchWorkouts();
  },[])

  return (
    <div className='home'>
      <div className='workouts'>
        {Workouts.map((workout)=>{
          return(
            <Workoutdetails key={workout._id} workout={workout}/>
          )
        })}
      </div> 
      <WorkoutForm/> {/* Adding the WorkoutForm component here */} 
      
    </div>
  );
}

export default Home;