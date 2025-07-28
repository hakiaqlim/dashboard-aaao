import React from 'react'
import CustomerDetailnav from './CustomerDetailnav';
import { Link } from 'react-router-dom';

const data = [
  {
    date: '21/July/2025',
    time: '11:00',
    amount: 100,
    payment: 'Bank:ABM Bank Abu dhabi',
    action: "View",
  },
  {
    date: '21/July/2025',
    time: '11:00',
    amount: 100,
   payment: 'Bank:ABM Bank Abu dhabi',
    action: "View",
  },
  {
    date: '21/July/2025',
    time: '11:00',
    amount: 100,
   payment: 'Bank:ABM Bank Abu dhabi',
    action: "View",
  },
];

const CustomerEarningPayout = () => {
  return (
    <>
      <div>    
        <CustomerDetailnav />
        <div className='pt-4'>
          <table className="w-full text-sm text-left table-fixed">
            <thead>
              <tr className="border-b border-yellow-200">
                <th className="w-[20%] px-6 py-3">Date</th>
                <th className="w-[20%] px-4 py-3">Time</th>
                <th className="w-[20%] px-4 py-3">Amount</th>
                <th className="w-[20%] px-4 py-3 text-center">Payment Method</th>
                <th className="w-[20%] px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="w-[20%] px-6 py-3">{item.date}</td>
                  <td className="w-[20%] px-4 py-3">{item.time}</td>
                  <td className="w-[20%] px-4 py-3">${item.amount}</td>
                  <td className="w-[20%] px-4 py-3 text-center">{item.payment}</td>
                  <td className="w-[20%] px-4 py-3">
                    <div className="flex items-center gap-3 justify-center">
                      <Link to={'/customerprofile'} className="bg-yellow-400 text-black px-4 py-1.5 cursor-pointer rounded-full text-xs font-medium">
                        {item.action}
                      </Link>
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

export default CustomerEarningPayout;
