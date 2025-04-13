// src/components/Home.jsx
import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentTable from '../components/AppointmentTable';
import AppointmentChart from '../components/AppointmentChart';


const Home = () => {
  return (
    <div>
      <h1>Medical Appointments Management</h1>
      <AppointmentForm />
      <AppointmentTable />
      <AppointmentChart />
    </div>
  );
};

export default Home;
