import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { VscCalendar } from "react-icons/vsc";
import DispatchTable from "./DispatchTable";
import Sidebar from "../Home/Sidebar";
const data = ["All", "Assigned", "Completed", "Cancelled"];

const Dispatch = () => {
  return (
      <div className="flex min-h-screen">
      <Sidebar/>
{/* <Navbar/> */}
<div className='flex-1'>
      <div className="flex gap-20 p-6">
        <button className="border border-yellow-400 rounded-full px-4 flex items-center gap-1 py-2">
          Services type <IoIosArrowDown size={15} />
        </button>
        <button className="border border-yellow-400 rounded-full px-4 flex items-center gap-1 py-2">
          Region <IoIosArrowDown size={15} />
        </button>
        <button className="border border-yellow-400 rounded-full px-4 flex items-center gap-1 py-2">
          Sort By <IoIosArrowDown size={15} />
        </button>
        <button className="border border-yellow-400 rounded-full px-4 flex items-center gap-1 py-2">
          Date <VscCalendar size={20} />
        </button>
      </div>
      <div className="flex gap-20 p-6 items-center font-bold">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <p className="relative">{item} {item == 'All' &&(

                            <span className="absolute left-0 w-full h-[1px] pb-[-2px] bottom-0 bg-yellow-400 rounded-full"></span>
            )}

            </p>
            {index !== data.length - 1 && (
              <div className="w-[2px] h-3 bg-yellow-400"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <DispatchTable />
    </div>
    </div>
  );
};

export default Dispatch;
