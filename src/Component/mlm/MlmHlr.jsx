// MlmHlr.jsx
import React from 'react';

const MlmHlr = () => {
  const hlrCriteria = {
    accumulatedPGP: "Min 25%",
    accumulatedTGP: "Min 25%",
    active: "Active at least once in each 6 months",
    timeLimit: "No time limitations"
  };

  return (
    <div className="p-4 rounded-lg text-yellow-400">
      <h2 className="text-lg font-bold mb-4">Honorpay Loyalty Reward (HLR)</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-yellow-400 text-sm">
          <thead className="border-b border-yellow-400">
            <tr>
              <th className="px-3 py-2">Accumulated PGP</th>
              <th className="px-3 py-2">Accumulated TGP</th>
              <th className="px-3 py-2">Activity Requirement</th>
              <th className="px-3 py-2">Time Limitation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center hover:bg-[#014b38]">
              <td className="px-3 py-2">{hlrCriteria.accumulatedPGP}</td>
              <td className="px-3 py-2">{hlrCriteria.accumulatedTGP}</td>
              <td className="px-3 py-2">{hlrCriteria.active}</td>
              <td className="px-3 py-2">{hlrCriteria.timeLimit}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MlmHlr;
