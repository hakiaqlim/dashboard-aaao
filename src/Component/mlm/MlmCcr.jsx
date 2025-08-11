import React, { useState } from 'react';

const ccrData = {
  1: [
    { id: 1, name: 'Alice Khan', pgp: 120, tgp: 250, duration: '1-31', legs: 'OK', aed: 370 },
    { id: 2, name: 'Bob Smith', pgp: 100, tgp: 220, duration: '1-31', legs: 'OK', aed: 320 },
  ],
  2: [
    { id: 3, name: 'Charlie Ray', pgp: 150, tgp: 280, duration: '1-31', legs: 'OK', aed: 430 },
  ],
};

const MlmCcr = () => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <div className="w-[95%] overflow-hidden">
      <h2 className="text-lg font-semibold m-6">CCR Summary</h2>

      {/* Level buttons */}
      <div className="flex gap-20 ml-6 my-3">
        {[1, 2].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`p-2 ${selectedLevel === level ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-200 borrder border-yellow-300'}`}
          >
            Level {level}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="border mx-auto border-yellow-400 w-full py-2 rounded">
        <table className="w-full border-collapse table-fixed min-w-[900px]">
         
            <tr className="border-b text-sm font-semibold border-yellow-400 text-left">
              <th className="px-2 py-2">ID</th>
              <th className="px-2 py-2">Full Name</th>
              <th className="px-2 py-2">PGP</th>
              <th className="px-2 py-2">TGP</th>
              <th className="px-1 py-2">Duration</th>
              <th className="px-2 py-2">Legs Req.</th>
              <th className="px-2 py-2">AED Value</th>
              <th className="px-2 py-2">Captain Share</th>
              <th className="px- py-2">Customer Share</th>
            </tr>
         
          <tbody>
            {ccrData[selectedLevel].map((item, index) => {
              const captainShare = (item.aed * 0.5).toFixed(2);
              const customerShare = (item.aed * 0.5).toFixed(2);
              return (
                <tr key={index} className="text-left">
                  <td className="px-2 py-2">00{item.id}</td>
                  <td className="px-2 py-2">{item.name}</td>
                  <td className="px-2 py-2">{item.pgp}</td>
                  <td className="px-2 py-2">{item.tgp}</td>
                  <td className="px-1 py-2">{item.duration}</td>
                  <td className="px-2 py-2">{item.legs}</td>
                  <td className="px-2 py-2">AED {item.aed}</td>
                  <td className="px-2 py-2">AED {captainShare}</td>
                  <td className="px-2 py-2">AED {customerShare}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MlmCcr;
