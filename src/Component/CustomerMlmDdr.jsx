import React from 'react';
import MlmTable from './MlmTable';
import { IoFilterOutline } from "react-icons/io5";

const CustomerMlmDdr = () => {
  const titles = [
    'DDR',
    'CCR',
    'BBR',
    'HLR',
    'AMBESSADOR',
    'Day'
  ];

  return (
    <div className="pl-5">
      <div className="flex items-center border-b  border-yellow-400 justify-between font-semibold text-yellow-400  flex-nowrap">
        {titles.map((title, index) => (
          <React.Fragment key={index}>
            <div className={`pr-2 ${title === 'Day' ? 'text-sm border border-b-0 flex gap-2 items-center border-yellow-400 px-4 py-2 ':'text-sm'}`}>{title}
              {title === 'Day' && <IoFilterOutline className="text-lg" />}
            </div>
             
            {index !== titles.length - 2 && index !== titles.length - 1 && (
              <div className="w-[2px] h-3 bg-yellow-400" />
            )}
          </React.Fragment>
        ))}
      </div>
      <MlmTable/>
    </div>
  );
};

export default CustomerMlmDdr;
