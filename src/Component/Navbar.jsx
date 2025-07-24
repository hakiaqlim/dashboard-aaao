import React from 'react';
import { CiSearch, CiLogin } from "react-icons/ci";
import { IoSettingsOutline} from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

import { LuMessageCircleMore } from "react-icons/lu";
import { RiMenuSearchLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isNotificationActive = location.pathname  === '/notification';
  return (
    <div className=' flex justify-between items-center px-2  border-b border-[#3A5719] '>
      
 <div className='flex items-center gap-4 pr-[50px] py-1 border-r border-[#546816]'>
        <img
          className='rounded-full w-20 h-20 object-cover border-2 border-[#DDC104]'
          src="https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs="
          alt=""
        />
        <div className='flex flex-col justify-center'>
          <h6 className='text-xs'>Welcome</h6>
          <h1 className='font-bold text-lg'>Sara Jey</h1>
          <p className='text-xs'>Casey:Towne58@yahoo.com</p>
        </div>
      </div>

      {/* Search Box */}
      <div className='flex items-center  border border-[#DDC104] rounded-full px-4 py-2 gap-2 relative bg-[#013220] hover:border-yellow-400 transition'>
        <CiSearch size={24}/>
        <input 
          type="text" 
          placeholder='Search here' 
          className='border-none outline-none bg-transparent text-white placeholder:text-[#DDC104] w-64'
        />
        <div  className='absolute right-[1px] p-[10px]  border-l border-t border-b  border-[#DDC104]  rounded-full cursor-pointer'>

        <RiMenuSearchLine 
          size={20} />
        </div>
      </div>

      {/* Icons Right Side */}
      <div className='flex gap-4 items-center text-[#DDC104]'>
        <div className='p-2 border border-[#DDC104] rounded-full hover:bg-[#DDC104] hover:text-black transition cursor-pointer'>
          <IoSettingsOutline size={25} />
        </div>
        <div className='p-2 border border-[#DDC104] rounded-full hover:bg-[#DDC104] hover:text-black transition cursor-pointer'>
          <LuMessageCircleMore size={25} />
        </div>
        <Link to={'/notification'} className={`p-2 border border-[#DDC104] rounded-full hover:bg-[#DDC104] hover:text-black transition cursor-pointer ${isNotificationActive ? 'bg-yellow-400 text-black' : ''}`}>
          <IoIosNotifications  size={25} />
        </Link>
        <div className='p-2 border border-[#DDC104] rounded-full hover:bg-[#DDC104] hover:text-black transition cursor-pointer'>
          <CiLogin size={25} />
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
