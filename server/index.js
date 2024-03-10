const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

mongoose.connect('mongodb+srv://admin2:admin2@cluster0.a1asgk9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("mongodb conncted")
})
.catch(()=>{
    console.log("failed to connect")
})

const app = express();
const defaultSessionSecret = 'healthconnect';

app.use(session({
  secret: defaultSessionSecret,
  resave: false,
  saveUninitialized: true
}));
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service:'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
      user: 'praneeth_mcr@srkrec.edu.in',
      pass: 'uzfv zovb bcpb agax'
  }
});

// Middleware to parse JSON data from requests
app.use(bodyParser.json());

// Define a schema for the user data
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  mobileNumber: String,
  dob: String,
});
const appointmentSchema = new mongoose.Schema({
 doctorname: String,
 patient : String,
 patientname: String,
 mobile: String,
 problem : String,
 scheduleTime : String


});



const DoctorSchema = new mongoose.Schema({
  doctorid: String,
  password:String,
  doctorName:String,
  Speciality:String,
  Address:String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
const User = mongoose.model('User', userSchema);
const Doctor = mongoose.model('Doctor',DoctorSchema)

app.get('/api/user', (req, res) => {
  if (req.session.user) {
    console.log(req.session.user)
    res.json({status:200, data : req.session.user});
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});


// Define a route to handle form submissions
app.post('/api/signup', async (req, res) => {
  if(req.session.user){
    res.json({ message: 'Already logged in successful','user':req.session.user });
  }
  else{
    const userData = req.body;
    const User1 = new User(userData);
    try {
      const savedUser = await User1.save();
      console.log('User data saved:', savedUser);
      res.status(200).json({ message: 'Registered successful','user' : savedUser });
    } catch (err) {
      console.error('Error saving user data:', err);
      res.status(500).send('Internal Server Error');
    }
  }
  });

// Define a route to handle login requests
app.post('/api/login', async (req, res) => {
   if(req.session.user){
    res.json({ message: 'Already logged in successful','user':req.session.user });//how to navigate it to user dashboard
   }
  else{
    const { username, password } = req.body;
    try {
      const user = await User.find({ username:username, password:password });
      console.log(user)
      if (user) {
        req.session.user = user
        console.log(req.session.user);
        // User authenticated
        res.status(200).json(user); // Send a JSON response with additional information
      } else {
        // Authentication failed
        res.status(401).json({ message: 'Login failed' }); // Send a JSON response with a message
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' }); // Send a JSON response with an error message
    }}
  });


  app.get("/api/logout", async (req, res) => {
    if(req.session.user){

    try{
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
        } else {
          res.status(200).json({ message: 'Logged out successfully' }); // Send a JSON response with a message
        }
    });
    }
    catch(error){
        console.log(error);
        res.status(401).json({ message: 'internal error' });
    }
  }
});


app.get('/api/doctors', async (req, res) => {
  try {
    const doctor = await Doctor.find({},{'_id':1,'doctorName': 1});
    console.log(doctor);
    res.json(doctor);
    
  } catch (err) {
    res.status(500).send({message: 'Error fetching slots'});
  }
});


app.post('/api/appointments', async (req, res) => {
  console.log(req.body);
  const DoctorName = req.body.selectedDoctor;
  const patientName = req.body.patientName;
  const mobile = req.body.mobileNumber;
  const problem = req.body.problem;
  const scheduletime = req.body.scheduledTime;
  try {
    const appointment = await Appointment.create({
      DoctorName,
      patient: req.session.user._id, 
      patientName,
      mobile,
      problem,
      scheduletime
    });
    transporter.sendMail({
      from: 'praneeth_mcr@srkrec.edu.in',
      to: 'saipraneethkambhampati800@gmail.com',
      subject: 'Appointment Confirmation',
      text: `Your appointment with Dr. ${req.body.selectedDoctor} has been booked for today at ${req.body.scheduledTime}.`
    });
  
    
    res.status(201).json(appointment);
  } catch (err) {
    console.log(err);
    res.status(400).json({message: 'Error booking appointment'}); 
  }
});


app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find({patient: req.session.user._id})
    res.json(appointments);
  } catch (err) {
    res.status(500).json({message: 'Error getting appointments'});
  }
});


// End of Teams Route Handling Functions

app.listen(5000, function () {
    console.log('Server started at port 5000');
   })
