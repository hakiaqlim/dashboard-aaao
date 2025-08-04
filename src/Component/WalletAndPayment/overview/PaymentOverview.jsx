import React from 'react';
import PaeChart from './PaeChart';
import Sidebar from '../../Home/Sidebar';
import { RiWallet3Fill } from "react-icons/ri";
import { PiHandWithdraw } from "react-icons/pi";
import { GiFrozenOrb } from "react-icons/gi";
import { CiMoneyBill } from "react-icons/ci";
import WalletPaymentNavbar from '../WalletPaymentNavbar';

const data = [
  {
    total: 'Total Wallets',
    percent: '1,250',
    icon: <RiWallet3Fill size={30}/> ,
  },
  {
    total: 'Total Balance',
    percent: 'AED 1,650,000',
    icon: <CiMoneyBill size={30}/> ,
  },
  {
    total: 'Pending Withdrawals',
    percent:'AED 82,500',
    icon: <PiHandWithdraw  size={30}/> ,
  },
  {
    total: 'Frozen Wallets',
    percent: '27 Accounts',
    icon: <GiFrozenOrb size={30}/> ,
  }
];

const PaymentOverview = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <WalletPaymentNavbar />

        <div className='text-[#DDC104] p-6 overflow-y-auto'>
          <div className='flex justify-end pb-4'>
            <label className='text-sm text-[#DDC104] mr-2'>Sort By:</label>
            <select className='bg-transparent text-[#DDC104] text-sm focus:outline-none'>
              <option value="monthly" className='bg-yellow-400 text-black'>Monthly</option>
              <option value="weekly" className='bg-yellow-400 text-black'>Weekly</option>
              <option value="yearly" className='bg-yellow-400 text-black'>Yearly</option>
            </select>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {data.map((item, index) => (
              <div
                key={index}
                className='flex flex-col gap-4 shadow-lg rounded-lg outline outline-black/20 pl-5 pt-5 bg-gradient-to-b from-[#038A59] to-[#013723] shadow-black/80'
              >
                <div className='flex gap-2 items-center'>
                  {item.icon}
                  <p className='text-lg font-semibold tracking-wide'>{item.total}</p>
                </div>
                <h2 className='text-3xl font-bold'>{item.percent}</h2>
              </div>
            ))}
          </div>

          <div className='mt-8'>
            <PaeChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOverview;
