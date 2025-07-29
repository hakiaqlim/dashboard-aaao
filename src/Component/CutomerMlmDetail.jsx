import React, { useState } from 'react';



const data = [
  {
    total: 'Total Earning',
    percent: '$100000',
    // img: 'https://quickchart.io/chart?c={type:%27line%27,data:{labels:[%27Jan%27,%27Feb%27,%27Mar%27],datasets:[{label:%27Clients%27,data:[20,40,86]}]}}'
  },
  {
    total: 'Team Members',
    percent: '$10000',
    // img: 'https://quickchart.io/chart?c={type:%27line%27,data:{labels:[%27Jan%27,%27Feb%27,%27Mar%27],datasets:[{label:%27Drivers%27,data:[10,22,34]}]}}'
  }
];



const CutomerMlmDetail = () => {

  return (
    <div className=' text-[#DDC104] mr-10  py-8'>

    <div className=' flex justify-center gap-24 items-center '>
  
      {data.map((item, index) => (
        <div
          key={index}
          className='flex flex-col gap-4 shadow-lg bg-gradient-to-b from-[#038A59] to-[#013723] rounded-lg pr-20 outline outline-black/20 pl-5 pt-5 bg-[#013220] shadow-black/80 '
        >
          <p className='text-lg font-semibold tracking-wide'>{item.total}</p>
          <h2 className='text-3xl font-bold'>{item.percent}</h2>
          <img src={item.img} alt="line chart" className='w-32 h-16 object-contain' />
        </div>
      ))}
    </div>
    </div>
  );
};

export default CutomerMlmDetail;
