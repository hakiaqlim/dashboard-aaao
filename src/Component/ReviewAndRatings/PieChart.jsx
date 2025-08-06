// src/components/PieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const PieChart = () => {
  const data = {
    labels: ['5-Star: 30%', '4-Star: 20%', '3-Star: 5%', '2-Star: 3%', '1-Star: 2%'],
    datasets: [
      {
        data: [30, 20, 5, 3, 2],
        backgroundColor: [
          '#FFD700', // 5-Star (Yellow)
          '#FF3B30', // 4-Star (Red)
          '#4B0082', // 3-Star (Indigo)
          '#0000CD', // 2-Star (Blue)
          '#228B22', // 1-Star (Green)
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'white',
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
   <div className="w-full max-w-md h-[300px] mx-auto">
  <Pie data={data} options={options} />
</div>

  );
};

export default PieChart;
