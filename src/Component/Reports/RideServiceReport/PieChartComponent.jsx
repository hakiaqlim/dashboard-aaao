import React from 'react';
import Chart from 'react-apexcharts';

const PieChartComponent = () => {
  const series = [53, 16, 10, 11, 10];
  const labels = ['Ride', 'Recovery', 'Shifting & Movers', 'Delivery', 'Tourism'];

  const options = {
    chart: {
      type: 'pie',
    },
    labels: labels,
    colors: ['#FACC15', '#22C55E', '#3B82F6', '#EC4899', '#A78BFA'],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const label = opts.w.globals.labels[opts.seriesIndex];
        return `${label} ${Math.round(val)}%`;
      },
      style: {
        fontSize: '11px',
        fontWeight: 'bold',
        colors: ['#fff'],
      },
      background: {
        enabled: false,
      },
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (value) {
          return `${value} services`;
        },
      },
    },
    stroke: {
      show: false,
     
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5, // brings text more inside
        },
        expandOnClick: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width:200,
          },
          dataLabels: {
            style: {
              fontSize: '8px',
            },
          },
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Chart options={options} series={series} type="pie" width="150" />
    </div>
  );
};

export default PieChartComponent;
