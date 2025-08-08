import React, { useState } from "react";
import Sidebar from "../Home/Sidebar";
import AdminApprovalNav from "./AdminApprovalNav";
import { Link } from "react-router-dom";

const sampleData = Array(9).fill({
  id: 1,
  businessName: "Rapid Recovery Hub",
  OwnerName: "John D.",
  area: "Dubai-Mussafah",
  servicesOffered: "Recovery, Workshop",
  status: "Pending",
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

const ServiceProvider = () => {
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
            <select
              className="bg-transparent border border-yellow-400 rounded px-2 py-1 text-yellow-400"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
            
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
              <option value="Approved">Approved</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="mx-2 overflow-x-auto border border-yellow-400 rounded-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-yellow-400">
                <th className="px-4 py-3">Business Name</th>
                <th className="px-4 py-3">Owner Name</th>
                <th className="px-4 py-3">Area</th>
                <th className="px-4 py-3">Service Offered</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="text-sm">
                  <td className="px-4 py-3">{item.businessName}</td>
                  <td className="px-4 py-3">{item.OwnerName}</td>
                  <td className="px-4 py-3">{item.area}</td>
                  <td className="px-4 py-3">{item.servicesOffered}</td>
                  <td className="px-4 py-3">{statusIndicator(item.status)}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/serviceProviderDetail/${item.id}`}
                        className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm hover:bg-yellow-300"
                      >
                        View Detail
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

export default ServiceProvider;
