const express = require('express');
// express app
const app = express();
const mongoose=require('mongoose');
require('dotenv').config();
// connect to the database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Error connecting to the database', err);
  });

const workoutRoutes=require('./routes/workouts');//importing the routes from the workouts.js file

//middleware: they are global route which will run and then go to next routes everytime
app.use(express.json());//this will parse the json data and convert it into object(eg:req.body)

app.use((req,res,next)=>{
  console.log('middleware');
  next();
});

//routes
app.use('/api/workouts',workoutRoutes);
//port listen where it will run on the server 
app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});

