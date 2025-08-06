import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowUndoOutline } from 'react-icons/io5';
import Sidebar from '../Home/Sidebar';
import AdminApprovalNav from './AdminApprovalNav';

const documents = [
  { type: 'CNIC/License', status: 'Valid' },
  { type: 'Agreement', status: 'Pending Validation' },
  { type: 'Ownership Certificate', status: 'Valid' },
];

const statusIndicator = (status) => {
  let color = '';
  switch (status) {
    case 'Valid':
      color = 'bg-green-500';
      break;
    case 'Pending Validation':
      color = 'bg-red-500';
      break;
    case 'Missing':
      color = 'bg-yellow-400';
      break;
    default:
      color = 'bg-gray-500';
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span>{status}</span>
    </div>
  );
};

const DriverHiringDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <AdminApprovalNav />

        {/* Back Button */}
        <div className="flex items-center gap-2 mb-4 m-4">
          <IoArrowUndoOutline size={25} className="text-yellow-400" />
          <button
            onClick={() => navigate(-1)}
            className="text-yellow-400 hover:underline"
          >
            Back
          </button>
        </div>

        {/* Agreement Summary */}
        <h2 className="text-xl font-semibold text-center mb-4">Agreement Summary:</h2>
        <div className="flex justify-center items-center mb-6">
          <div className="max-w-2xl w-full border border-yellow-300 rounded-md overflow-hidden">
            <table className="w-full table-fixed border border-yellow-300 text-left">
              <thead className="">
                <tr className="text-yellow-500 text-center">
                  <th className="border-r border-yellow-300 px-4 py-2 w-1/2">Field</th>
                  <th className="px-4 py-2">Value</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border-t border-yellow-300">
                  <td className="border-r border-yellow-300 px-4 py-2">Driver Name</td>
                  <td className="px-4 py-2">Ali Raza</td>
                </tr>
                <tr className="border-t border-yellow-300">
                  <td className="border-r border-yellow-300 px-4 py-2">Owner Name</td>
                  <td className="px-4 py-2">Alli Raza</td>
                </tr>
                <tr className="border-t border-yellow-300">
                  <td className="border-r border-yellow-300 px-4 py-2">Engagement Type</td>
                  <td className="px-4 py-2">Full-Time</td>
                </tr>
                <tr className="border-t border-yellow-300">
                  <td className="border-r border-yellow-300 px-4 py-2">Terms</td>
                  <td className="px-4 py-2">Fixed Rent - PKR 25,000</td>
                </tr>
                <tr className="border-t border-yellow-300">
                  <td className="border-r border-yellow-300 px-4 py-2">Start Date</td>
                  <td className="px-4 py-2">Aug 01, 2025</td>
                </tr>
                <tr className="border-t border-yellow-300">
                  <td className="border-r border-yellow-300 px-4 py-2">Proposed Duration</td>
                  <td className="px-4 py-2">6 Months</td>
                </tr>
                <tr className="border-t border-yellow-300">
                  <td className="border-r border-yellow-300 px-4 py-2">Assigned Vehicle</td>
                  <td className="px-4 py-2">Toyota GLI (REG-222)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Document Table */}
        <div className="mx-auto border border-yellow-400 rounded-md overflow-hidden w-full max-w-4xl mb-8">
          <div className="grid grid-cols-3 border-b border-yellow-300 py-2 px-4 font-semibold text-yellow-400">
            <span className=" pr-2">Document Type</span>
            <span className=" px-2">Status</span>
            <span className="text-center pl-2">Action</span>
          </div>
          {documents.map((doc, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center py-2 px-4"
            >
              <span className="  pr-2">{doc.type}</span>
              <span className=" px-2">{statusIndicator(doc.status)}</span>
              <span className="pl-2">
                {doc.status === 'Missing' ? (
                  <button className="text-xs block mx-auto bg-yellow-400 text-black px-2 py-1 rounded-md">
                    Request Upload
                  </button>
                ) : (
                  <button className="text-xs block mx-auto bg-yellow-400 text-black px-4 py-1 rounded-md">
                    View Detail
                  </button>
                )}
              </span>
            </div>
          ))}
        </div>

         <div className='flex justify-center items-center pt-10 gap-6'>
        <button className='bg-yellow-400 px-8 py-2 rounded-full text-black text-sm font-semibold'>Approve</button>
        <button className='bg-yellow-400 px-12 py-2 rounded-full text-black text-sm font-semibold'>Reject</button>
        <button className='bg-yellow-400 px-6 py-2 rounded-full text-black text-sm font-semibold'>Modify Terms</button>
        <button className='bg-yellow-400 px-4 py-2 rounded-full text-black text-sm font-semibold'>Add Internal Note</button>
      </div>
      </div>
    </div>
  );
};

export default DriverHiringDetail;
