import React from 'react';
import Chart from 'react-apexcharts';

const PaeChart = () => {
  const series = [400, 200, 100]; // Active, Inactive, Pending
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Active', 'Inactive', 'Pending'],
    colors: ['#13B255', '#FBBF24', '#EF4444'],
    legend: {
      position: 'bottom',
    },
    dataLabels: {
      enabled: true,
    },
  };

  const rows = [
    { name: 'Hamza Abbas', id: '9347837', status: 'Active' },
    { name: 'Ali Raza', id: '9347838', status: 'Inactive' },
    { name: 'Sara Khan', id: '9347839', status: 'Pending' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start justify-start p-4">
      {/* Pie Chart */}
      <div className="w-64">
        <Chart options={options} series={series} type="pie" width="100%" />
      </div>

    
    </div>
  );
};

export default PaeChart;
