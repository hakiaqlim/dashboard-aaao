import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaSitemap } from "react-icons/fa";
import { MdVerifiedUser, MdRequestPage } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { TbMessageDots } from "react-icons/tb";
import { PiUserFocus } from "react-icons/pi";
import { FiUserCheck } from "react-icons/fi";
import { RiWallet3Fill } from "react-icons/ri";
import { GiCaptainHatProfile } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaHandHolding } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";


const Sidebar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `px-4 py-2 rounded-full border border-[#DDC104] transition-all duration-300 font-medium text-lg flex items-center gap-3 ${
      location.pathname === path
        ? "bg-[#DDC104] text-black shadow-md"
        : " hover:bg-yellow-100 hover:text-black"
    }`;

  return (
    <div className='sticky top-0 left-0 overflow-y-auto z-10 p-6 flex flex-col gap-12 border-r border-[#546816] min-h-screen'>
    
    

   
      <div className='flex flex-col gap-6 w-64'>
        <Link to='/' className={linkClasses('/')}>
          <LuLayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>

        <Link to='/mlm' className={linkClasses('/mlm')}>
          <FaSitemap size={20} />
          <span>MLM</span>
        </Link>

        <Link to='/dispatch' className={linkClasses('/dispatch')}>
          <FaTruck  size={20} />
          <span>Dispatch Center</span>
        </Link>

       

        <Link to='/drivermanagement' className={linkClasses('/drivermanagement')}>
          <MdRequestPage size={20} />
          <span>Driver Management</span>
        </Link>
        
         <Link to='/customermanagement' className={linkClasses('/customermanagement')}>
          <MdVerifiedUser size={20} />
          <span>Customer Manag...</span>
        </Link>

        <Link to='/proposalmanagement' className={linkClasses('/proposalmanagement')}>
  <div className='flex items-center gap-2'>
    <div className='relative w-6 h-6'>
      <FaBriefcase size={16} className='absolute top-0 left-1/2 -translate-x-1/2' />
      <FaHandHolding size={16} className='absolute bottom-0 left-1/2 -translate-x-1/2' />
    </div>
    <span>Career Management</span>
  </div>
</Link>

        <Link to='/overview' className={linkClasses('/overview')}>
          <MdOutlineIndeterminateCheckBox size={20} />
          <span>Fraud Detection</span>
        </Link>
        <Link to='/ambassadorpanel' className={linkClasses('/ambassadorpanel')}>
          <GiCaptainHatProfile size={20} />
          <span>Ambassador Panel</span>
        </Link>
        <Link to='/walletpayment' className={linkClasses('/walletpayment')}>
          <RiWallet3Fill size={20} />
          <span>Wallet & Panel</span>
        </Link>
        <Link to='/chatdetail' className={linkClasses('/chatdetail')}>
          <TbMessageDots size={20} />
          <p>Monitor <span className='text-sm'>(Chats & Activity)</span></p>
        </Link>
        <Link to='/adminapprovals' className={linkClasses('/adminapprovals')}>
          <FiUserCheck size={20} />
          <span>Admin Approvals</span>
        </Link>
        <Link to='/reports' className={linkClasses('/reports')}>
          <PiUserFocus size={25} />
          <span>Reports</span>
        </Link>
        <Link to='/ratingreviews' className={linkClasses('/ratingreviews')}>
          <CiBookmarkPlus size={25} />
          <span>Rating & Reviews</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
