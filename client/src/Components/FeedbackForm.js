import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  TextareaAutosize,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook


const FeedbackForm = () => {
  const navigate = useNavigate(); // Initializing the useNavigate hook

  const [formData, setFormData] = useState({
    appointmentExperience: '',
    doctorService: '',
    treatment: '',
    medicationFacility: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server for processing (not implemented here).
    console.log('Submitted Feedback:', formData);
    alert('Feedback submitted successfully!');
    navigate('/user'); // Navigate to the user landing page after successful submission

  };

  
  
  
  return (
    <div>
      <h1>Feed Back Form</h1>
      <form></form>
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Appointment Experience</InputLabel>
          <Select
            name="appointmentExperience"
            value={formData.appointmentExperience}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="excellent">Excellent</MenuItem>
            <MenuItem value="good">Good</MenuItem>
            <MenuItem value="average">Average</MenuItem>
            <MenuItem value="poor">Poor</MenuItem>
          </Select>
          <h4></h4>
        </FormControl>
        <br /> {/* Add a line break here */}
        <FormControl fullWidth variant="outlined">
          <InputLabel>Doctor Service</InputLabel>
          <Select
            name="doctorService"
            value={formData.doctorService}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="excellent">Excellent</MenuItem>
            <MenuItem value="good">Good</MenuItem>
            <MenuItem value="average">Average</MenuItem>
            <MenuItem value="poor">Poor</MenuItem>
          </Select>
          <h4></h4>
        </FormControl>
        <br /> {/* Add a line break here */}
        <FormControl fullWidth variant="outlined">
          <InputLabel>Treatment</InputLabel>
          <Select
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="excellent">Excellent</MenuItem>
            <MenuItem value="good">Good</MenuItem>
            <MenuItem value="average">Average</MenuItem>
            <MenuItem value="poor">Poor</MenuItem>
          </Select>
          <h4></h4>
        </FormControl>
        <br /> {/* Add a line break here */}
        <FormControl fullWidth variant="outlined">
          <InputLabel>Medication Facility</InputLabel>
          <h4></h4>
          <Select
            name="medicationFacility"
            value={formData.medicationFacility}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="excellent">Excellent</MenuItem>
            <MenuItem value="good">Good</MenuItem>
            <MenuItem value="average">Average</MenuItem>
            <MenuItem value="poor">Poor</MenuItem>
          </Select>
          <h3></h3>
        </FormControl>
        <TextField
          name="comments"
          label="Additional Comments"
          variant="outlined"
          fullWidth
          multiline
          value={formData.comments}
          onChange={handleChange}
        />
        <h4></h4>
        <Button type="submit" variant="contained" color="primary">
          Submit Feedback
        </Button>
      </form>
    </Container>
    </div>
  );
};

export default FeedbackForm;
