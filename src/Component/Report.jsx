import React from 'react';
import Chart from 'react-apexcharts';
import DriverDetailnav from './DriverDetailnav';
const data =[
 {
    date:'24-July-25',
    reason:'Warning',
    admin:'admin',
    notes:'2nd Strike',
    action:'Warning',
  },
  {
    date:'24-July-25',
    reason:'Mis Conduct',
    admin:'admin',
    notes:'Resolved',
    action:'Temp-Ban',
  }
]

const RideChart = () => {
  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: { show: false },
      background: '#013220',
    },
    plotOptions: {
      bar: {
        columnWidth: '25%',
        borderRadius: 8,
         borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last', // Top only
        endingShape: 'flat',
      },
    },
    grid: {
      show: false, // ❌ remove all grid lines (under bars)
    },
    xaxis: {
      categories: [
        '18/Jul/25',
        '19/Jul/25',
        '20/Jul/25',
        '21/Jul/25',
        '22/Jul/25',
        '23/Jul/25',
        '24/Jul/25',
      ],
      labels: {
        style: {
          colors: '#FFD700',
          fontSize: '12px',
        },
      },
      axisBorder: {
        show: true,
        color: '#FFD700',
      },
      axisTicks: {
        show: true,
        color: '#FFD700',
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#FFD700',
          fontSize: '12px',
        },
      },
      axisBorder: {
        show: true,
        color: '#FFD700',
      },
      axisTicks: {
        show: true,
        color: '#FFD700',
      },
    },
    colors: ['#FFD700', '#15803D'], // Yellow + Green (stacked)
    dataLabels: { enabled: false },
    tooltip: { theme: 'dark' },
    legend: { show: false },
  };

  const series = [
    {
      name: 'Completed',
      data: [8, 14, 10, 18, 9, 5, 22],
    },
    {
      name: 'Remaining',
      data: [10, 8, 15, 12, 16, 20, 5],
    },
  ];

  return (
    <>
      <DriverDetailnav />
   
    <div className=" text-yellow-400  px-8 py-12 min-h-screen space-y-10">
          
    
      <div className="border max-w-5xl mx-auto w-full border-yellow-400 rounded-xl ">
        <div className="flex justify-between px-6 py-4 items-center mb-4 border-b border-yellow-300">
          <h2 className="text-lg font-bold text-yellow-400">Ride Per Day</h2>
          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            <span>Date Range :</span>
            <span className="border border-yellow-400 px-2 py-1 rounded">18/Jul/25</span>
            <span>To</span>
            <span className="border border-yellow-400 px-2 py-1 rounded">21/Jul/25</span>
          </div>
        </div>
        <h2>Rides</h2>
        <Chart options={options} series={series} type="bar" height={300} />
      </div>
     
     
      {/* table */}

     <div className='flex justify-center py-10'>
  <div className="w-full max-w-7xl rounded-xl overflow-hidden border border-yellow-300">
    <table className='w-full table-fixed border-collapse'>
      <thead className=" text-yellow-400">
        <tr className='text-left border-b border-yellow-300'>
          <th className='w-1/5 px-4 py-2'>Date</th>
          <th className='w-1/5 px-4 py-2'>Reason</th>
          <th className='w-1/5 px-4 py-2'>Admin</th>
          <th className='w-1/5 px-4 py-2'>Notes</th>
          <th className='w-1/5 px-4 py-2'>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className='px-4 py-2'>{item.date}</td>
            <td className='px-4 py-2'>{item.reason}</td>
            <td className='px-4 py-2'>{item.admin}</td>
            <td className='px-4 py-2'>{item.notes}</td>
            <td className='px-4 py-2'>{item.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
     </>
  );
};

export default RideChart;
