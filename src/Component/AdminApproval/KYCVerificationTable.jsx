import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import Sidebar from '../Home/Sidebar';
import AdminApprovalNav from './AdminApprovalNav'
const sampleData = Array(9).fill({
  userId: '12345',
  userName: 'John D.',
  documentLink: 'View CNIC',
  selfieMatch: 'Match',
  status: 'Pending',
  date: '28 Jul \'25'
});


const KYCVerificationTable = () => {
  return (
    <div className="flex  text-yellow-400 min-h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-hidden">
        <AdminApprovalNav/>
        {/* Header */}
        <div className="flex justify-end items-center mb-6 gap-4 ">
          <div className="flex items-center gap-2">
            <span>Date Range :</span>
            <input
              type="date"
              value=""
              readOnly
              className="bg-[#013A2A] border border-yellow-400 text-yellow-400 px-2 py-1 rounded-md w-28"
            />
            <span>To</span>
            <input
              type="date"
              value=""
              readOnly
              className="bg-[#013A2A] border border-yellow-400 text-yellow-400 px-2 py-1 rounded-md w-28"
            />
          </div>
          <div className="flex items-center gap-2">
            <span>Sort By:</span>
            <select className="bg-transparent focus:outline">
              <option value="">Pending</option>
              <option value="">Rejected</option>
              <option value="">Approved</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-yellow-400 rounded-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-yellow-400">
                <th className="px-4 py-3">User ID</th>
                <th className="px-4 py-3">
                  <select name="" id="" className='bg-transparent focus:outline-none'>
                    <option value="">User</option>
                    <option value="">Driver</option>
                    <option value="">Vendor</option>
                  </select>
                </th>
                <th className="px-4 py-3">Document</th>
                <th className="px-4 py-3">Selfie Match</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((item, index) => (
                <tr key={index} className="text-sm">
                  <td className="px-4 py-3">{item.userId}</td>
                  <td className="px-4 py-3">
                    {item.userName}</td>
                  <td className="px-4 py-3">
                    <a href="#" className="underline text-yellow-400">{item.documentLink}</a>
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <FaCheck size={14} /> {item.selfieMatch}
                  </td>
                  <td className="px-4 py-3">{item.status}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <MdCancel className="cursor-pointer hover:text-red-500" size={20} />
                      <FaCheck className="cursor-pointer hover:text-green-500" size={16} />
                      <button className="bg-yellow-400 text-[#013220] px-4 py-1 rounded-full text-sm hover:bg-yellow-300">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KYCVerificationTable;
