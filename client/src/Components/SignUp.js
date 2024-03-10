import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
      mobileNumber,
    };
  
    // Make an HTTP POST request to the signup endpoint
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (response.ok) {
        const data = await response.json();
        if(data.message === 'Already logged in successful'){
          navigate('/user');
        }
        alert(data.message);
        navigate('/login');
        console.log(data.message);
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error('Failed to sign up:', error);
    }
  };

  return (
    <div className="background-image1">
      <div className="container1">
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSignUp}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputField"
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="inputField"
          />
          <TextField
            label="Mobile Number"
            type="tel"
            fullWidth
            margin="normal"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="inputField"
          />
          <Button type="submit" variant="contained" color="primary" className="submitButton">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
