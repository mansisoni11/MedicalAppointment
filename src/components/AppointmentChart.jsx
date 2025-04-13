// src/components/AppointmentChart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AppointmentChart = () => {
  const appointments = useSelector((state) => state.appointments.appointments);

  const chartData = {
    labels: [...new Set(appointments.map(appt => appt.doctor))],
    datasets: [{
      label: 'Appointments Per Doctor',
      data: appointments.reduce((acc, appt) => {
        acc[appt.doctor] = (acc[appt.doctor] || 0) + 1;
        return acc;
      }, {}),
      backgroundColor: '#4CAF50',
    }],
  };

  return (
    <div>
      <h2>Appointments per Doctor</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default AppointmentChart;
