import React from 'react';
import CrrLineChart from './CrrLineChart';
import CrrTeamStructureChart from './CrrTeamStructureChart';
import { CiUser } from "react-icons/ci";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch"; // MUI Switch

const label = { inputProps: { 'aria-label': 'Auto Reset Switch' } };

const data = [
  {
    icon: CiUser,
    title: 'PGP',
    earn: '1200 / 1500',
    chartData: [20, 40, 86, 60, 90]
  },
  {
    icon: CiUser,
    title: 'TGP',
    earn: '3600 / 400',
    chartData: [10, 22, 34, 25, 15]
  }
];

// Custom Yellow Switch
const YellowSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#FFD700", // Thumb color ON
      "& + .MuiSwitch-track": {
        backgroundColor: "#FFA500", // Track ON
        border: "2px solid #FFD700", // Border ON
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 22,
    height: 22,
    backgroundColor: "#FFD700", // Always yellow thumb
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "transparent", // Track OFF
    border: "2px solid #FFD700", // Yellow border OFF
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));


const MlmCrr = () => {
  return (
    <div className="p-6 space-y-8 w-2/3">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-8">
          Estimated AED Earned: <span>1500 AED</span>
        </h2>

        <div className="flex justify-between items-center">
          {/* Date Filter */}
          <div className="flex items-center gap-3 p-3">
            <label className="font-medium">Auto Reset:</label>
            <input
              type="date"
              className="bg-transparent border border-yellow-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <span className="font-medium">To</span>
            <input
              type="date"
              className="bg-transparent border border-yellow-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>
          <div style={{ padding: 20 }}>
            <YellowSwitch />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-12 justify-around w-1/2">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col gap-1 bg-gradient-to-b from-[#03a66a] to-[#013723] rounded-xl px-5 py-6 shadow-lg shadow-black/40 w-80 hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-2">
                <Icon className="font-bold text-2xl" />
                <p className="text-lg font-semibold tracking-wide">{item.title}</p>
              </div>
              <h2 className="text-3xl font-bold">{item.earn}</h2>
              <div>
                <CrrLineChart data={item.chartData} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Team Structure Chart */}
      <div className="p-5 rounded-xl shadow-lg">
        <CrrTeamStructureChart />
      </div>
    </div>
  );
};

export default MlmCrr;
