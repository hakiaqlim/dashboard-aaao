// src/components/ReviewDashboard.jsx
import React from "react";
import PieChart from "./PieChart";
import { LuFlagTriangleRight } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import Sidebar from "../Home/Sidebar";
const ReviewAndRating = () => {
  return (
    <div className="flex  text-yellow-400 min-h-screen overflow-hidden">
      <Sidebar />
      <div className=" font-sans w-full max-w-5xl mx-auto px-6 py-10 flex flex-col items-center space-y-10">
        {/* KPI Box */}
        <div className="w-full max-w-2xl mx-auto border border-yellow-400 text-sm">
          <div className="text-center">
            <div className="px-4 py-2 border-b border-yellow-300 font-semibold flex justify-between items-center">
              <p>Average Rating (All Time):</p>
              <span className="flex justify-center items-center gap-1 mt-1">
                ⭐ 4.3 / 5
              </span>
            </div>

            <div className=" px-4 py-2 border-b border-yellow-300 font-semibold flex justify-between items-center">
              <p>Total Reviews Received</p>
              <p>12,340</p>
            </div>

            <div className="px-4 py-2 border-b border-yellow-300 font-semibold flex justify-between items-center">
              <p>Reviews This Month</p>
              <span className="mt-1 block">892</span>
            </div>

            <div className="px-4 py-2 border-b border-yellow-300 font-semibold flex justify-between items-center">
              <p>Flagged Reviews</p>
              <span className="mt-1 block">36</span>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="w-full max-w-5xl">
          <h2 className="font-semibold mb-4">Pie Chart:</h2>
          <PieChart />
        </div>

        {/* Date Range + Role Filter */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <label htmlFor="from" className="font-medium">
              Date Range:
            </label>
            <input
              type="date"
              id="from"
              className="bg-[#014733] p-1 rounded"
              defaultValue="2025-07-18"
            />
            <span>To</span>
            <input
              type="date"
              id="to"
              className="bg-[#014733] p-1 rounded"
              defaultValue="2025-07-21"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="role" className="font-medium">
              Role:
            </label>
            <select
              id="role"
              className="bg-[#014733] bg-transparent p-1 rounded"
            >
              <option>Driver</option>
              <option>Customer</option>
            </select>
          </div>
        </div>

        {/* Review Table */}
        <div className="w-full max-w-5xl border border-yellow-400 rounded-xl overflow-x-auto text-sm">
          <table className="min-w-full text-left">
            <thead className="text-yellow-300">
              <tr>
                <th className="p-3">Reviewer</th>
                <th className="p-3">Role</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Review Text</th>
                <th className="p-3">Target</th>
                <th className="p-3">Date</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-t border-yellow-400">
                <td className="p-3">Ahmed Ali</td>
                <td className="p-3">Customer</td>
                <td className="p-3">⭐⭐⭐⭐⭐</td>
                <td className="p-3">Great ride</td>
                <td className="p-3">Driver: Asif Khan</td>
                <td className="p-3">Aug 2/25</td>
                <td className="p-3">
                  <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 text-xs">
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-t border-yellow-400">
                <td className="p-3">Sana</td>
                <td className="p-3">Driver</td>
                <td className="p-3">⭐⭐⭐⭐</td>
                <td className="p-3">Nice customer</td>
                <td className="p-3">Customer: Ahmed</td>
                <td className="p-3">Aug 2/25</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <LuFlagTriangleRight size={20} />
                    <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 text-xs">
                      View
                    </button>
                    <MdDelete size={20} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndRating;
