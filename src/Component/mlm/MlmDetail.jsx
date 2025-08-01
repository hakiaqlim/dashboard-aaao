import React from 'react';
import { IoIosArrowDown } from "react-icons/io";


const data = [
  {
    total: 'Total Income',
    percent: '$100000',
    // img: 'https://quickchart.io/chart?c={type:%27line%27,data:{labels:[%27Jan%27,%27Feb%27,%27Mar%27],datasets:[{label:%27Clients%27,data:[20,40,86]}]}}'
  },
  {
    total: 'Company Expense',
    percent: '$10000',
    // img: 'https://quickchart.io/chart?c={type:%27line%27,data:{labels:[%27Jan%27,%27Feb%27,%27Mar%27],datasets:[{label:%27Drivers%27,data:[10,22,34]}]}}'
  }
];

const MlmDetail = () => {
  return (
    <div className=' text-[#DDC104] mr-10  py-8'> 
            {/* <p className='text-sm text-right flex items-center justify-end pb-1'>Sort By: <span className='underline '>Monthly </span> <IoIosArrowDown /></p>  */}
            <div className='flex justify-end mr-[130px] pb-1'>
              <label htmlFor="" className='text-sm mr-1'>Sort by:</label>
              <select name="" className='bg-transparent text-sm focus:outline-none' id="">
                <option className='bg-yellow-300 text-black' value="Monthly">Monthly</option>
                <option className='bg-yellow-300 text-black' value="Yearly">Yearly</option>
                <option className='bg-yellow-300 text-black' value="Weekly">Weekly</option>
              </select>
            </div>
    <div className=' flex justify-around items-center '>
  
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

export default MlmDetail;
