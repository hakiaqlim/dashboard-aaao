import React from "react";
import { FaClock } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";

import Sidebar from './Sidebar'
import { Link } from "react-router-dom";
const notifications = [
  {
    id: 1,
    name: "Zoe",
    message: "Zoe Sended You A Message",
    image:'https://randomuser.me/api/portraits/women/44.jpg',
    detail:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Augue Dolor Proin Nulla Eu Mi Tincidunt Premium Non In. Just NowZoe Sended You A MessageLorem Ipsum Dolor Sit Amet Consectetur.",
    time: "Just Now",
  },
  {
    id: 2,
    name: "Zoe",
    message: "Zoe Sended You A Message",
     image:'https://randomuser.me/api/portraits/women/44.jpg',
    detail:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Augue Dolor Proin Nulla Eu Mi Tincidunt Premium Non In. Just NowZoe Sended You A MessageLorem Ipsum Dolor Sit Amet Consectetur.",
    time: "Just Now",
  },
  {
    id: 3,
    name: "Zoe",
    message: "Zoe Sended You A Message",
     image:'https://randomuser.me/api/portraits/women/44.jpg',
    detail:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Augue Dolor Proin Nulla Eu Mi Tincidunt Premium Non In. Just NowZoe Sended You A MessageLorem Ipsum Dolor Sit Amet Consectetur.",
    time: "Just Now",
  },
];

const Notifications = () => {
  return (
    
    <div className="flex  bg-[#13220]  min-h-screen ">
   
      <Sidebar/>
       {/* <div className="">  */}
      <div className="flex-1 p-6 relative">
  <div className="flex items-center gap-2 py-4">
    <Link to="/" className='flex items-center gap-2'>
      <TiArrowBackOutline size={30} className="cursor-pointer text-lg" />
      <span className="text-lg font-semibold">Back</span>
    </Link>
</div>


        {/* Heading with yellow underline */}
        <div className="py-10">
          <h1 className="text-xl font-semibold inline-block relative pb-1">
            Notification & Alerts
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-yellow-400 rounded-full" />
          </h1>
          <h5 className="text-sm pb-1 float-right inline-block relative text-yellow-400 cursor-pointer">
            Mark All As Read
            <span className="absolute left-0 w-full h-[1px] pb-[-2px] bottom-0 bg-yellow-400 rounded-full"></span>
          </h5>
        </div>

      {/* Tabs with yellow underline */}
       <div className="border-b border-yellow-400 relative mb-6">
        <div className="flex gap-20 text-sm font-semibold items-center  pb-2">
          <div className="relative text-yellow-400">
            General Notification
            <div className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-yellow-400 rounded-full" />
          </div> 
          <div className="w-[2px] h-3 bg-yellow-400"></div>
          <div>Booking Notification</div>
          <div className="w-[2px] h-3 bg-yellow-400"></div>
          <div>Important Notification</div>
          <div className="ml-auto text-yellow-400 cursor-pointer">
           
          </div>
        </div>
      </div>

      {/* Notification Cards */}
      <div className="flex flex-col gap-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="bg-[#0A3A26] border border-[#3A4F3A] p-4 rounded-xl flex justify-between items-start"
          >
            <div className="flex gap-4">
              <img
                src={item.image}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="max-w-full">
                <p className="font-semibold text-sm mb-1">{item.message}</p>
                <p className="text-xs">{item.detail}</p>
                <div className="flex items-center text-xs mt-1">
                  <FaClock className="mr-1" />
                  {item.time}
                </div>
              </div>
            </div>
            <button className="text-yellow-400 relative text-sm whitespace-nowrap">
              View Detail
              <span className="absolute h-[1px] w-full pb-[-2px] left-0 bottom-0 rounded-full bg-yellow-400 "></span>
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
    // </div>
  );
};

export default Notifications;
