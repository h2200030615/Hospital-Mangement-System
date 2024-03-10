import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getDoctorsList } from './ViewDoctorsPage';

function AppointmentPage() {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [patientName, setPatientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [problem, setProblem] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [slotTimings, setSlotTimings] = useState([]);
  const [scheduledTime, setScheduledTime] = useState('');

  const doctorsList = getDoctorsList();

  useEffect(() => {
    // Fetch slot timings from the API or define them locally
    const fetchedSlotTimings = [
      '9:00 AM - 10:00 AM',
      '10:00 AM - 11:00 AM',
      '11:00 AM - 12:00 PM',
      // Add more slot timings as needed
    ];
    setSlotTimings(fetchedSlotTimings);
  }, []);

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    const appointmentData = {
      selectedDoctor,
      patientName,
      mobileNumber,
      problem,
      scheduledTime: selectedSlot, // Use selected slot as scheduled time
    };
    console.log(appointmentData);
    // Other code for booking appointment

    // Simulate a successful appointment booking
    // Here, you might call an API to book the appointment
    // For demonstration purposes, let's assume booking is successful
    const response = { ok: true }; // Simulated response

    if (response.ok) {
      // Appointment booking successful
      // Display success message
      alert("Appointment booked successfully!");

      // Navigate to the payment page
      navigate('/user');
    } else {
      // Appointment booking failed
      // Display error message
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <Container>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleBookAppointment}>
        <TextField
          label="Patient Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <TextField
          label="Mobile Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <TextField
          label="Problem"
          variant="outlined"
          fullWidth
          margin="normal"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        />
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Select a Doctor:</label>
          <select style={{ marginRight: '10px' }} onChange={(e) => setSelectedDoctor(e.target.value)} value={selectedDoctor}>
            <option value="">Select a doctor</option>
            {doctorsList.map((doctor) => (
              <option key={doctor} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Select a Time Slot:</label>
          <select style={{ marginRight: '10px' }} onChange={(e) => setSelectedSlot(e.target.value)} value={selectedSlot}>
            <option value="">Select a time slot</option>
            {slotTimings.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Book Appointment
        </Button>
      </form>
    </Container>
  );
}

export default AppointmentPage;