import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS file for styling

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [successOpen, setSuccessOpen] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessOpen(true);
        navigate('/user');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Failed to log in:', error);
      setError('Failed to log in. Please try again later.');
    }
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  return (
    <div className="login-container"> {/* Add a CSS class to the container */}
      <Container>
        <div className="login-box"> {/* Add a CSS class to the login box */}
          <Typography variant="h4" gutterBottom align="center">
            Login
          </Typography>
          <form className="login-form" onSubmit={handleLogin}> {/* Add a CSS class to the form */}
            <div className="form-group">
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </div>
        <Snackbar
          open={successOpen}
          autoHideDuration={6000}
          onClose={handleSuccessClose}
          message="Login successful"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Container>
    </div>
  );
}

export default Login;