import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function ReactNavbar({}) {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate('/');
  }
  return (
    <div className="navbar">
      <span className="left_header">
        <img height="40" width="40" src="https://w7.pngwing.com/pngs/83/15/png-transparent-logo-health-care-medicine-hospital-automotive-battery-emblem-logo-first-aid-supplies-thumbnail.png" />
        <span style={{fontSize: '26px', color: 'blue', fontWeight: 500}}>Save Life Hospital</span></span>
      <span className="right_header">{new Date().toLocaleString()}<Button onClick={()=>goLogin()} variant='info'>Logout</Button></span>
    </div>
  );
}
