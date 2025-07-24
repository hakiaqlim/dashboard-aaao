import React from 'react'
import { TiArrowBackOutline } from 'react-icons/ti';
import { Link, useLocation } from 'react-router-dom'

const DriverDetailnav = () => {
      const location = useLocation()
    const linkClass = (path) => {
  return `menu-tab ${location.pathname === path ? 'active' : ''}`;
};
  return (
    <div className='px-8'>
<div className="flex items-center gap-2 py-4">
    <Link to="/drivermanagement" className='flex items-center gap-2'>
      <TiArrowBackOutline size={30} className="cursor-pointer text-lg" />
      <span className="text-lg font-semibold">Back</span>
    </Link>
</div>
   
   <div className='flex justify-between items-center border-b border-yellow-400 '>
  <Link to={'/driverprofile'} className={linkClass('/driverprofile')}>
    Profile
    </Link>
    <div className='w-[2px] h-3 bg-yellow-400'></div>
    <Link to={'/drivermonitoring'} className={linkClass('/drivermonitoring')}>
    Monitoring
    </Link>
    <div className='w-[2px] h-3 bg-yellow-400'></div>
    
    <Link to={'/driverhistory'} className={linkClass('/driverhistory')}>
    History
    </Link>
        <div className='w-[2px] h-3 bg-yellow-400'></div>
    <Link to={'/earningandpayouts'} className={linkClass('/earningandpayouts')}>
   Earning & Payouts
    </Link>
        <div className='w-[2px] h-3 bg-yellow-400'></div>
    <Link to={'/ratings'} className={linkClass('/ratings')}>
   Ratings
    </Link>
        <div className='w-[2px] h-3 bg-yellow-400'></div>
    <Link to={'/penalty'} className={linkClass('/penalty')}>
   Penalty
    </Link>
        <div className='w-[2px] h-3 bg-yellow-400'></div>
    <Link to={'/report'} className={linkClass('/report')}>
   Report
    </Link>
        <div className='w-[2px] h-3 bg-yellow-400'></div>
    <Link to={'/referraltree'} className={linkClass('referraltree')}>
   Referral Tree
    </Link>
</div>
 </div>
  )
}

export default DriverDetailnav