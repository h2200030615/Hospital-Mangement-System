import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

// Sample doctor data (replace this with actual API call)
const doctors = [
  { id: 1, name: "Dr.Vysyaraju Sahithi", category: "Cardiologist", experience: "15 years", specialty: "Cardiology"},
  { id: 2, name: "Dr.Shaik Rihana", category: "Dentist" ,experience: "10 years", specialty: "Orthodontics"},
  { id: 3, name: "Dr. Ganesh Balaji", category: "Pediatrician",experience: "9 years", specialty: "Pediatric Oncology" },
  { id: 4, name: "Dr.Shaik Ruhi", category: "gynecologist",experience: "18 years", specialty: "Reproductive Endocrinology" },
  // Add more doctors and their information
];

const getDoctorsList = () => {
  return doctors.map((doctor) => doctor.name);
};

const ViewDoctorsPage = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    // Fetch doctor data from the API and set it in the state
    setDoctorData(doctors); // Replace with your API call
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        View Doctors
      </Typography>
      {doctorData.map((doctor) => (
        <Card key={doctor.id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography>{doctor.category}</Typography>
                <Typography>Experience: {doctor.experience}</Typography>
            <Typography>Specialty: {doctor.specialty}</Typography>
              </Grid>
              <Grid item xs={4}>
                {/* Add a button or link for viewing doctor details */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export { ViewDoctorsPage, getDoctorsList };