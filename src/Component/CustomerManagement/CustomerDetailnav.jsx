import React from 'react'
import { TiArrowBackOutline } from 'react-icons/ti';
import { Link, useLocation } from 'react-router-dom'

const CustomerDetailnav = () => {
      const location = useLocation()
    const linkClass = (path) => {
  return `menu-tab ${location.pathname === path ? 'active' : ''}`;
};
  return (
    <div className='px-10'>
<div className="flex items-center gap-2 pb-6">
    <Link to="/customermanagement" className='flex items-center gap-2'>
      <TiArrowBackOutline size={30} className="cursor-pointer text-lg" />
      <span className="text-lg font-semibold">Back</span>
    </Link>
</div>
   
   <div className='flex justify-between items-center border-b border-yellow-400 '>
  <Link to={'/customerprofile'} className={linkClass('/customerprofile')}>
    Profile
    </Link>
    <div className='w-[2px] h-3 bg-yellow-400'></div>
    
    
    <Link to={'/customerhistory'} className={linkClass('/customerhistory')}>
    History
    </Link>
        <div className='w-[2px] h-3 bg-yellow-400'></div>
    <Link to={'/customerearningpayout'} className={linkClass('/customerearningpayout')}>
   Earning & Payouts
    </Link>
        <div className='w-[2px] h-3 bg-yellow-400'></div>
    <Link to={'/customermlm'} className={linkClass('/customermlm')}>
   MLM
    </Link>
        <div className='w-[2px] h-3 bg-yellow-400'></div>
    <Link to={'/customerrating'} className={linkClass('/customerrating')}>
   Ratings
    </Link>
        <div className='w-[2px] h-3 bg-yellow-400'></div>
   
    <Link to={'/customercomplain'} className={linkClass('/customercomplain')}>
   Complain
    </Link>
        <div className='w-[2px] h-3 bg-yellow-400'></div>
    <Link to={'/customerreferraltree'} className={linkClass('customerreferraltree')}>
   Referral Tree
    </Link>
</div>
 </div>
  )
}

export default CustomerDetailnav