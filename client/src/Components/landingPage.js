import React, {useEffect,useState} from "react";
import { Link } from 'react-router-dom';
import { Typography, Container, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ViewDoctorsPage, getDoctorsList } from './ViewDoctorsPage';// Adjust the path accordingly

import Box from "@mui/material/Box";




const LandingPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then((response) => {
        if (response.status === 200) {
          return response.json(); // Parse the response body as JSON
        } else {
          throw new Error('User not authenticated');
        }
      })
      .then((data) => {
        console.log(data); // Log the data here
        setUser(data.data);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);
  

  useEffect(() => {
    if (user) {
      navigate('/user')
    }
  }, [user, navigate]);




 return(
<>

      <div className="page-wrapper p-0 overflow-hidden">
        <header className="header">
          <nav className="navbar navbar-expand-lg py-0">
            <div className="container">
            
                <img src="logo.png" alt="Logo" />  
          
          <button
            className="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti ti-menu-2 fs-9" />
          </button>
          <button
            className="navbar-toggler border-0 p-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            
            <i className="ti ti-menu-2 fs-9" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center mb- mb-lg-0 ms-auto">
              <li className="nav-item dropdown hover-dd mega-dropdown pages-dropdown">
                <a
                  href="/Components/Payments"
                  className="btn btn-primary fs-3 rounded btn-hover-shadow px-3 py-2"
            
                >
                 <Button color="inherit" component={Link} to="/PaymentsPage">Payments</Button>
                  
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                   
                  className="btn btn-primary fs-3 rounded btn-hover-shadow px-3 py-2"
                  
                
                >
                  <Button color="inherit" component={Link} to="/login">Login</Button>
                  
                  
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                   
                 href="/Components/SignUp"
                  className="btn btn-primary fs-3 rounded btn-hover-shadow px-3 py-2"
            
                >
                 <Button color="inherit" component={Link} to="/SignUp">Register</Button>
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  
    <div className="body-wrapper overflow-hidden">
    <section className="blackbox-overlay">
       <div className="container">
          <div className="row align-items-center">
            <div class="col-xl-6">
              
              <div className="hero-content my-11 my-xl-0">
                <h1 className="fw-bolder mb-8 fs-13" >Join the Circle of Wellness- <span class="text-primary"> Health Connect</span>
                  </h1>
                <p className="fs-5 mb-5 text-dark fw-normal" >Linking Health and Compassion – Welcome to Health Connect, Your Trusted Medical Companion.</p>
                <div className="d-sm-flex align-items-center gap-3" >
                  <a className="btn btn-primary px-5 btn-hover-shadow d-block mb-3 mb-sm-0" >
                  <Button color="inherit" component={Link} to="/AppointmentPage">Book An Appointment</Button></a>
                  <a className="btn btn-outline-primary d-block scroll-link">
                  <Button color="inherit" component={Link} to="/ViewDoctorsPage">View Doctors</Button></a>
                   
                </div>
              </div>
            </div>
       </div>    
</div>
       </section>
      <Box m={7}/>



      <section className="bg-primary pt-5 pt-xl-9 pb-8">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-5 pt-lg-8 mb-7 mb-lg-0">
              <h2 className="fs-12 text-white text-center text-lg-start fw-bolder mb-8">
                Elevating Lives through Connections – Discover Health Connect:
                Nurturing Your Vitality.
              </h2>
              <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                <a
                 
                  className="btn bg-white text-primary fw-semibold d-block mb-3 mb-sm-0 btn-hover-shadow"
                >
                  Login
                </a>
                <a
                 
                  className="btn border-white text-white fw-semibold btn-hover-white d-block"
                >
            
                
                 <Button color="inherit" component={Link} to="/FeedbackForm">Feedback</Button>
              
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-xl-5">
              <div className="text-center text-lg-end">
                <img
                  src="{{ url_for('static', filename='landing/landing/dist/images/backgrounds/business-woman-checking-her-mail.png') }}"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer className="footer-part pt-8 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="text-center">
              <a href="index1.1.html">
                <img
                  src=""
                  alt=""
                  className="img-fluid pb-3"
                />
              </a>
              <p className="mb-0 text-dark">
                All rights reserved by Health Connect.

              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div
      className="offcanvas offcanvas-start modernize-lp-offcanvas"
      tabIndex={-1}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header p-4">
        <img
          src="{{ url_for('static', filename='landing/dist/images/logos/logo-dark.svg') }}"
          alt=""
          className="img-fluid"
          width={150}
        />
      </div>
    
  </div>
  </div>
 
</>
 )
};

export default LandingPage;