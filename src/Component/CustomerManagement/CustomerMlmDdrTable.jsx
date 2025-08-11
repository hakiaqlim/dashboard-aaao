import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomerMlmTablePopup from './CustomerMlmTablePopup';

const allData = {
  1: [
    { id: 1, name: 'Smith Joy', amount: 1000, date: '4/July/25', source: 'Driver', },
    { id: 2, name: 'John Doe', amount: 800, date: '5/July/25', source: 'Rider', },
  ],
  2: [
    { id: 3, name: 'Alice Brown', amount: 1200, date: '6/July/25', source: 'Driver', },
  ],
  3: [
    { id: 4, name: 'Michael Lee', amount: 700, date: '7/July/25', source: 'Rider', },
  ],
  4: [
    { id: 5, name: 'Emma Watson', amount: 1500, date: '8/July/25', source: 'Driver', },
  ],
};

const CustomerMlmDdrTable = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [activeLevel, setActiveLevel] = useState(1); // default Level 1

  const levelButtons = [1, 2, 3, 4];
  const data = allData[activeLevel] || [];

  return (
    <div className='w-[85%] mx-auto'>
      <h2 className="text-lg font-semibold m-6">DDR Balance: $1000</h2>

      {/* Level Buttons */}
      <div className='flex gap-20 ml-6 my-3'>
        {levelButtons.map((level) => (
          <button
            key={level}
            onClick={() => setActiveLevel(level)}
            className={`p-2 rounded 
              ${activeLevel === level ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-200  border border-yellow-300'}`}
          >
            Level {level}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="border mx-auto border-yellow-400 w-[95%] px-8 py-2 rounded">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="border-b border-yellow-400 text-left">
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
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.source}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setShowPopup(true)}
                    className='bg-yellow-400 px-4 py-2 text-[11px] font-semibold hover:bg-yellow-200 text-black rounded-full'
                  >
                   View Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup */}
      {showPopup && <CustomerMlmTablePopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default CustomerMlmDdrTable;
