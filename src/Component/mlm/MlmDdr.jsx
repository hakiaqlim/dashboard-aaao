import React, { useState } from 'react';
import { IoFilterOutline } from "react-icons/io5";
import MlmTable from './MlmTable';
import MlmBbr from './MlmBbr';
import MlmHlr from './MlmHlr';
import MlmCrr from './MlmCrr';

const MlmDdr = () => {
  const titles = [
    'DDR',
    'CCR',
    'BBR',
    'HLR',
    'AMBESSDOR',
    'Day'
  ];

  const [activeTab, setActiveTab] = useState('DDR');

  const renderContent = () => {
    switch (activeTab) {
      case 'CCR':
        return <MlmCrr />;
      case 'BBR':
        return <MlmBbr />;
        case 'HLR':
        return <MlmHlr />;
        case 'Ambessdor':
          return <Ambessdor/>
      default:
        return <MlmTable activeTab={activeTab} />;
    }
  };

  return (
    <div className="pl-5">
      {/* Tabs */}
      <div className="flex items-center border-b border-yellow-400 justify-between font-semibold text-yellow-400 flex-nowrap overflow-x-auto">
        {titles.map((title, index) => (
          <React.Fragment key={index}>
            <p
              onClick={() => setActiveTab(title)}
              className={`pr-2 cursor-pointer text-sm flex items-center gap-2 px-4 py-2
                ${activeTab === title
                  ? 'border-b-2 border-yellow-400 text-yellow-400 mb-1'
                  : 'hover:text-yellow-300'
                }
                ${title === 'Day'
                  ? 'border border-b-0 border-yellow-400'
                  : ''
                }
              `}
            >
              {title}
              {title === 'Day' && <IoFilterOutline className="text-lg" />}
            </p>

            {/* Vertical separator */}
            {index !== titles.length - 2 && index !== titles.length - 1 && (
              <div className="w-[2px] h-3 bg-yellow-400" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default MlmDdr;
