import React, { useState } from "react";
import Sidebar from "../Home/Sidebar";
import AdminApprovalNav from "./AdminApprovalNav";
import { Link } from "react-router-dom";

const sampleData = Array(9).fill({
  id: 1,
  driverName: "John D.",
  OwnerName: "John D.",
  engagement: "Full-Time",
  terms: "Rent-PKR\n25000",
  submittedon: "Jul 29,2025",
  status:'Under-review',
});

const statusIndicator = (status) => {
  let color = "";
  switch (status) {
    case "Approved":
      color = "bg-green-500";
      break;
    case "Rejected":
      color = "bg-red-800";
      break;
    case "Pending":
      color = "bg-red-800";
      break;
    case "Under-review":
      color = "bg-blue-800";
      break;
    default:
      color = "bg-gray-500";
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span>{status}</span>
    </div>
  );
};

const DriverHiring = () => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredData = selectedStatus
    ? sampleData.filter((item) => item.status === selectedStatus)
    : sampleData;

  return (
    <div className="flex text-yellow-400 min-h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-hidden">
        <AdminApprovalNav />

        {/* Header */}
        <div className="flex justify-end items-center mb-6 gap-4">
          <div className="flex items-center gap-2">
            <span>Sort By:</span>
            <select
              className="bg-transparent focus:outline-none"
             >
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
              <option value="Approved">Approved</option>
              <option value="Under-review">Under-review</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="mx-2 overflow-x-auto border border-yellow-400 rounded-xl mt-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-yellow-400">
                <th className="px-4 py-3">Driver Name</th>
                <th className="px-4 py-3">Owner Name</th>
                <th className="px-4 py-3">Engagement</th>
                <th className="px-4 py-3">Terms</th>
                <th className="px-4 py-3">Submitted On</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="text-sm">
                  <td className="px-4 py-3">{item.driverName}</td>
                  <td className="px-4 py-3">{item.OwnerName}</td>
                  <td className="px-4 py-3">{item.engagement}</td>
                  <td className="px-4 py-3">{item.terms}</td>
                  <td className="px-4 py-3">{item.submittedon}</td>
                  <td className="px-4 py-3">{statusIndicator(item.status)}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link to={`/driverhiringdetail/${item.id}`} className="bg-yellow-400 text-[#013220] px-4 py-1 rounded-full text-sm hover:bg-yellow-300">
                        Review
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No matching data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DriverHiring;
