import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FiUserCheck } from "react-icons/fi";


const data = [
  {
    total: 'Total Booking',
    percent: '1000',
    image: 'loadingtruck.png'
  },
  {
    total: 'Active Driver',
    percent: '24+',
    image: 'driver.png',
    // img: 'https://user-images.githubusercontent.com/4975917/44529082-7aa59f00-a6eb-11e8-9e9e-7e845e3c6605.png'
  },
  {
    total: 'Total Revenue',
    percent: 10000,
    image: 'money.png',
    // img: 'https://user-images.githubusercontent.com/4975917/44529082-7aa59f00-a6eb-11e8-9e9e-7e845e3c6605.png'
  },
  {
    total: 'Pending Approvals',
    percent: '24+',
    image: "user.png",
    // img: 'https://user-images.githubusercontent.com/4975917/44529082-7aa59f00-a6eb-11e8-9e9e-7e845e3c6605.png'
  }
];

const Detail = () => {
  return (
    <div className='text-[#DDC104] mr-10 px-10 py-8'>
      <div className='flex justify-end pb-1'>
        <label className='text-sm text-[#DDC104] mr-2'>Sort By:</label>
        <select className='bg-transparent text-[#DDC104] text-sm focus:outline-none'>
          <option value="monthly" className='bg-yellow-400 text-black'>Monthly</option>
          <option value="weekly" className='bg-yellow-400 text-black'>Weekly</option>
          <option value="yearly" className='bg-yellow-400 text-black'>Yearly</option>
        </select>
      </div>

      {/* Use grid layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex flex-col gap-4 shadow-lg rounded-lg outline outline-black/20 pl-5 pt-5 bg-gradient-to-b from-[#038A59] to-[#013723] shadow-black/80'
          >
            <div className='flex gap-2 items-center'>
              {item.image && (
                <img
                  src={`/${item.image}`}
                  alt=""
                  className="w-8 h-8 filter invert sepia brightness-150 saturate-200 hue-rotate-10"
                />
              )}
              <p className='text-lg font-semibold m-0 tracking-wide'>{item.total}</p>
            </div>
            <h2 className='text-3xl font-bold'>{item.percent}</h2>
            <img src={item.img} alt="line chart" className='w-[200px] h-10 object-contain' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
