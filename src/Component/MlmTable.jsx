import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MlmPopupCard from './MlmPopupCard';

const data = [
  {
    id: 1,
    name: 'Smith Joy',
    amount: 1000,
    date: '4/July/25',
    source: 'Driver',
    action: 'View Detail',
  },
  {
    id: 1,
    name: 'Smith Joy',
    amount: 1000,
    date: '4/July/25',
    source: 'Driver',
    action: 'View Detail',
  },
  {
    id: 1,
    name: 'Smith Joy',
    amount: 1000,
    date: '4/July/25',
    source: 'Driver',
    action: 'View Detail',
  },
];

const MlmTable = () => {
    const location = useLocation()
const [showPopup, setShowPopup] = useState(null)
    // const Linkclass=(path)=>{
    //     `border border-yellow-400 p-2 text-black ${location.pathname === path ? 'bg-yellow-400 p-2' : 'hover:bg-yellow-200 hover:text-black'}`
    // }
  return (
    <div>
      <h2 className="text-lg font-semibold m-6">DDR Balance: $1000</h2>
      <div className='flex gap-20 ml-6 my-3'>
        <button className='bg-yellow-400 p-2 text-black'>Level 1</button>
        <button>Level 2</button>
        <button>Level 3</button>
        <button>Level 4</button>
      </div>
      
      <div className="border mx-auto border-yellow-400 w-[95%] px-8 py-2 rounded">

        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="border-b  border-yellow-400 text-left">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Source</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-left">
                <td className="px-4 py-2">00{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">${item.amount}</td>
                <td className="px-4 py-2">0{item.date}</td>
                <td className="px-4 py-2">{item.source}</td>
                <td className="px-4 py-2">
                    <button onClick={()=> setShowPopup(true)} className='bg-yellow-400 px-4 py-2 text-[11px] font-semibold hover:bg-yellow-200 text-black rounded-full'>{item.action}</button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && <MlmPopupCard onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default MlmTable;
