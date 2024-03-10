import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Button, Card, CardContent, Container, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook


function PaymentPage() {
  const navigate = useNavigate(); // Initializing the useNavigate hook
  const [consultationFee, setConsultationFee] = useState(0);
  const [scanningCost, setScanningCost] = useState(0);
  const [pharmacyFee, setPharmacyFee] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCalculateTotal = () => {
    const total = parseFloat(consultationFee) + parseFloat(scanningCost) + parseFloat(pharmacyFee);
    setTotalAmount(total);
  };

  const handlePayment = () => {
    // Implement your payment logic here
    console.log('Payment details:', {
      consultationFee,
      scanningCost,
      pharmacyFee,
      selectedPaymentMethod,
      totalAmount,
    });

    // Simulate a successful payment
    const paymentSuccess = true; // Change it to false to simulate failed payment

    if (paymentSuccess) {
      // Payment successful
      // Navigate to the payment success page
      alert('payment is successful');
      navigate('/user');
    } else {
      // Payment failed
      // Display error message or take other actions
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Payment Information
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Consultation Fee
          </Typography>
          <TextField
            label="Consultation Fee"
            variant="outlined"
            fullWidth
            value={consultationFee}
            onChange={(e) => setConsultationFee(e.target.value)}
          />

          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Scanning & Reports Cost
          </Typography>
          <TextField
            label="Scanning Cost"
            variant="outlined"
            fullWidth
            value={scanningCost}
            onChange={(e) => setScanningCost(e.target.value)}
          />

          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Pharmacy Fee
          </Typography>
          <TextField
            label="Pharmacy Fee"
            variant="outlined"
            fullWidth
            value={pharmacyFee}
            onChange={(e) => setPharmacyFee(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateTotal}
            style={{ marginTop: '20px' }}
          >
            Total
          </Button>

          <Box
            border={1} // You can adjust border styles
            borderColor="primary.main" // You can choose your own color
            p={2} // Padding
            mt={2} // Margin-top
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6" gutterBottom>
              Amount to be Paid: ₹ {totalAmount} /-
            </Typography>
          </Box>

          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Select Payment Method
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="payment-method-label">Payment Method</InputLabel>
            <Select
              labelId="payment-method-label"
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            >
              <MenuItem value="card">Credit/Debit Card</MenuItem>
              <MenuItem value="upi">UPI Payment</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={handlePayment}
            style={{ marginTop: '20px' }}
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default PaymentPage;
