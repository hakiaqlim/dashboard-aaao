import React from "react";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Sidebar from "../Home/Sidebar";
import CustomerDetailnav from "./CustomerDetailnav";


const data = [
  {
    id: 1,
    name: "Allice Smith",
    phone: "+92303111222444",
    vehicletype: "Toyota Corolla",
    status: "Active",
    action: "View",
  },
  {
    id: 1,
    name: "Allice Smith",
    phone: "+92303111222444",
    vehicletype: "Toyota Corolla",
    status: "Active",
    action: "View",
  },
  {
    id: 1,
    name: "Allice Smith",
    phone: "+92303111222444",
    vehicletype: "Toyota Corolla",
    status: "Active",
    action: "View",
  },
];

const CustomerManagement = () => {
  return (
    <>
    
        <div className="flex min-h-screen">
      <Sidebar/>
<div className='flex-1'>
       <CustomerDetailnav/>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-yellow-200">
                <th className="px-3 py-3">ID</th>
                <th className="px-4 py-3">Driver Name</th>
                <th className="px-4 py-3 text-cente">Phone</th>
                <th className="px-4 py-3">Vehicle Type</th>
                <th className="px-4 py-3">Status</th>
<th className="px-4 py-3 text-center align-middle">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} >
                  <td className="px-3 py-3">00{item.id}</td>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3 r">{item.phone}</td>
                  <td className="px-4 py-3">{item.vehicletype}</td>
                  <td className="px-4 py-3">{item.status}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3 justify-center">
                      <button className="border border-yellow-400 p-2 rounded-full text-yellow-500">
                        <TbEdit size={16} />
                      </button>
                      <Link to={'/customerprofile'} className="bg-yellow-400 text-black px-4 py-1.5 cursor-pointer rounded-full text-xs font-medium">
                        {item.action}
                      </Link>
                      <button className="border border-yellow-400 p-2 rounded-full text-yellow-500">
                        <RiDeleteBinLine size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
       
      </div>
      </div>
    </>
  );
};

export default CustomerManagement;
