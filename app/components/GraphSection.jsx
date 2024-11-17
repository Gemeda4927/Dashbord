'use client'

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

function GraphSection() {
  // Dummy data for the bar chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Projected Revenue',
        data: [12000, 19000, 30000, 50000, 42000, 60000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Dummy data for the line chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'User Signups',
        data: [30, 50, 20, 80, 60, 100],
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 1)',
        borderColor: 'rgba(153, 102, 255, 0.6)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="font-semibold text-lg">Total Projected</h3>
        <Bar data={barData} options={{ responsive: true }} />
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="font-semibold text-lg">Data Activity</h3>
        <Line data={lineData} options={{ responsive: true }} />
      </div>
    </div>
  );
}

export default GraphSection;