// src/Components/Dashboard.js
import React from 'react';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement, ArcElement, RadialLinearScale } from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale
);

const Dashboard = () => {
  // Data for Bar chart
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Number of Sales',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
      },
    ],
  };

  // Data for Line chart
  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Visitors',
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)),
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.1,
      },
    ],
  };

  // Data for Pie chart
  const pieData = {
    labels: ['Completed', 'In Progress', 'Pending', 'Cancelled'],
    datasets: [
      {
        label: 'Task Status',
        data: [30, 20, 15, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6347'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6347'],
      },
    ],
  };

  // Data for Radar chart
  const radarData = {
    labels: ['Communication', 'Technical Skills', 'Problem Solving', 'Teamwork', 'Time Management'],
    datasets: [
      {
        label: 'Employee Skills',
        data: [90, 85, 70, 60, 80],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h4 className="text-center">Bar Chart - Sales</h4>
          <Bar data={barData} />
        </div>
        <div className="col-md-6 mb-4">
          <h4 className="text-center">Line Chart - Visitors</h4>
          <Line data={lineData} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h4 className="text-center">Pie Chart - Task Status</h4>
          <Pie data={pieData} />
        </div>
        <div className="col-md-6 mb-4">
          <h4 className="text-center">Radar Chart - Employee Skills</h4>
          <Radar data={radarData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
