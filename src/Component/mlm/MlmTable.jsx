import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MlmPopupCard from './MlmPopupCard';

const levelData = {
  1: [
    { id: 1, name: 'Smith Joy', amount: 1000, date: '4/July/25', source: 'Driver', action: 'View Detail' },
    { id: 2, name: 'John Doe', amount: 1500, date: '5/July/25', source: 'Rider', action: 'View Detail' },
  ],
  2: [
    { id: 3, name: 'Emma Stone', amount: 2000, date: '6/July/25', source: 'Driver', action: 'View Detail' },
    { id: 4, name: 'Chris Evans', amount: 1800, date: '7/July/25', source: 'Rider', action: 'View Detail' },
  ],
  3: [
    { id: 5, name: 'Tony Stark', amount: 3000, date: '8/July/25', source: 'Driver', action: 'View Detail' },
  ],
  4: [
    { id: 6, name: 'Bruce Wayne', amount: 4000, date: '9/July/25', source: 'Rider', action: 'View Detail' },
  ]
};

const MlmTable = () => {
  const location = useLocation();
  const [selectedLevel, setSelectedLevel] = useState(1); // default to Level 1
  const [showPopup, setShowPopup] = useState(null);

  return (
    <div className='w-[85%] mx-auto'>
      <h2 className="text-lg font-semibold m-6">DDR Balance: $1000</h2>

      {/* Level buttons */}
      <div className='flex gap-20 ml-6 my-3'>
        {[1, 2, 3, 4].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`p-2 ${selectedLevel === level ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-200'}`}
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
            {levelData[selectedLevel].map((item, index) => (
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
                    {item.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup */}
      {showPopup && <MlmPopupCard onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default MlmTable;
