import React from 'react';
import Navbar from './Component/Navbar';
import Homepage from './Homepage';
import Mlm from './Component/Mlm';
import Notifications from './Component/Notifications';
import Dispatch from './Component/Dispatch';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import DriverManagement from './Component/DriverManagement';
import DriverProfile from './Component/DriverProfile';
import DriverMonitoring from './Component/DriverMonitoring';
import EarningsAndPayouts from './Component/EarningsAndPayouts';
import Ratings from './Component/Ratings';
import Penalty from './Component/Penalty';
import Report from './Component/Report';
import ReferralTree from './Component/ReferralTree';
import DriverHistory from './Component/DriverHistory';
import Livelocation from './Component/Livelocation';
import ChatDetail from './Component/ChatDetail';
import CustomerManagement from './Component/CustomerManagement';
import CustomerProfile from './Component/CustomerProfile';
import CustomerHistory from './Component/CustomerHistory';
import CustomerEarningPayout from './Component/CustomerEarningPayout';
import CustomerRatings from './Component/CustomerRating';
import CustomerMLM from './Component/CustomerMLM';
import CustomerComplain from './Component/CustomerComplain';
import ProposalManagement from './Component/CareerManagment/ProposalManagement';
import AgreementRecord from './Component/CareerManagment/AgreementsRecord';
import MarketPlaceControl from './Component/CareerManagment/MarketPlaceControl';

// Step 1: Move Layout outside of App
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/livelocation';

  return (
    <div className="bg-[#013220] text-[#DDC104] min-h-screen">
      {!hideNavbar && <Navbar />}
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mlm" element={<Mlm />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/chatdetail" element={<ChatDetail />} />
        <Route path="/dispatch" element={<Dispatch />} />
        <Route path="/livelocation" element={<Livelocation />} />
        {/* driver management */}
        <Route path="/drivermanagement" element={<DriverManagement />} />
        <Route path="/driverprofile" element={<DriverProfile />} />
        <Route path="/drivermonitoring" element={<DriverMonitoring />} />
        <Route path="/driverhistory" element={<DriverHistory />} />
        <Route path="/earningandpayouts" element={<EarningsAndPayouts />} />
        <Route path="/ratings" element={<Ratings />} />
        <Route path="/penalty" element={<Penalty />} />
        <Route path="/report" element={<Report />} />
        <Route path="/referraltree" element={<ReferralTree />} />

        {/* customer management */}
        <Route path='/customermanagement' element={<CustomerManagement/>}/>
        <Route path="/customerprofile" element={<CustomerProfile />} />
        <Route path="/customerhistory" element={<CustomerHistory />} />
        <Route path="/customerearningpayout" element={<CustomerEarningPayout />} />
        <Route path="/customermlm" element={<CustomerMLM />} />
        <Route path="/customerrating" element={<CustomerRatings />} />
        <Route path="/customercomplain" element={<CustomerComplain />} />
       {/* Career Management */}
<Route path="proposalmanagement" element={<ProposalManagement/>}/>
<Route path="agreementrecord" element={<AgreementRecord/>}/>
<Route path="marketplacecontrol" element={<MarketPlaceControl/>}/>
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
