import {  BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import React from 'react';
import LandingPage from "./Components/landingPage";
import Login from './Components/Login'; 
import SignUp from './Components/SignUp';
import AppointmentPage from './Components/AppointmentPage';
import UserLandingPage from './Components/UserLandingPage';
import PaymentsPage from './Components/PaymentsPage';
import FeedbackForm from './Components/FeedbackForm';
import { ViewDoctorsPage } from './Components/ViewDoctorsPage';

function App() {
  return <React.Fragment>

 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/user" element={<UserLandingPage/>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/AppointmentPage" element={<AppointmentPage />} />
      <Route path="/PaymentsPage" element={<PaymentsPage/>} />
      <Route path="/FeedbackForm" element={<FeedbackForm/>} />
      <Route path="/ViewDoctorsPage" element={<ViewDoctorsPage/>} />
    </Routes>
     </BrowserRouter>
   


  </React.Fragment>;
}

export default App;
