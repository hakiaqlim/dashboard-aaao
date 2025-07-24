import React from 'react';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import Homepage from './Homepage';
import Mlm from './Component/Mlm';
import Notifications from './Component/Notifications';
import Dispatch from './Component/Dispatch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DriverManagement from './Component/DriverManagement';
import DriverProfile from './Component/DriverProfile';
import DriverMonitoring from './Component/DriverMonitoring';
import EarningsAndPayouts from './Component/EarningsAndPayouts';
import Ratings from './Component/Ratings';
import Penalty from './Component/Penalty';
import Report from './Component/Report';
import ReferralTree from './Component/ReferralTree';
import DriverHistory from './Component/DriverHistory';


const App = () => {
  return (
    <Router>
      <div className="bg-[#013220] text-[#DDC104] min-h-screen">
        <Navbar />       
      
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/mlm" element={<Mlm />} />
              <Route path="/notification" element={<Notifications />} />
              <Route path="/dispatch" element={<Dispatch />} />
              <Route path="/drivermanagement" element={<DriverManagement />} />
              <Route path="/driverprofile" element={<DriverProfile />} />
              <Route path="/drivermonitoring" element={<DriverMonitoring />} />
              <Route path="/driverhistory" element={<DriverHistory />} />
              <Route path="/earningandpayouts" element={<EarningsAndPayouts />} />
              <Route path="/ratings" element={<Ratings />} />
              <Route path="/penalty" element={<Penalty />} />
              <Route path="/report" element={<Report />} />
              <Route path="/referraltree" element={<ReferralTree/>} />
            
            </Routes>
          </div>
      
      </div>
    </Router>
  );
};

export default App;
