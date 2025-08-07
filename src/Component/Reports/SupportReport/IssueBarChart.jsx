import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IssueBarChart = () => {
  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const issueTypes = ['Login Issues', 'Account Issues', 'Payment Issues', 'Technical Issues'];
  const issueData = [20, 15, 25, 10]; // Dummy data per issue type

  const data = {
    labels: issueTypes,
    datasets: [
      {
        label: 'Issues Count',
        data: issueData,
        backgroundColor: '#FFD700',
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed.y}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'yellow',
          font: { weight: 'bold' },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: 'yellow',
          font: { weight: 'bold' },
        },
        grid: {
          color: '#444',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{
      backgroundColor: '#002d18',
      padding: '30px',
      borderRadius: '10px',
      color: 'yellow',
      width: '100%',
      maxWidth: '700px',
      margin: 'auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h3>Chart Type:</h3>
        <div>
          <span style={{ marginRight: '20px' }}>Date Range:</span>
          <span style={{ background: '#222', padding: '5px 10px', borderRadius: '4px' }}>18/July/25</span>
          <span style={{ margin: '0 10px' }}>to</span>
          <span style={{ background: '#222', padding: '5px 10px', borderRadius: '4px' }}>21/July/25</span>
        </div>
        <div>Sort: <b>Day</b> ⌄</div>
      </div>

      <div style={{ height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default IssueBarChart;
