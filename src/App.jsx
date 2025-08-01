import React from "react";
import Navbar from "./Component/Navbar";
import Notifications from "./Component/Notifications";
import Dispatch from "./Component/DispatchCenter/Dispatch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";


import ReferralTree from "./Component/ReferralTree";
import DriverHistory from "./Component/DriverManagement/DriverHistory";
import Livelocation from "./Component/DispatchCenter/Livelocation";
import ChatDetail from "./Component/MonitorChat/ChatDetail";
import CustomerManagement from "./Component/CustomerManagement/CustomerManagement";
import CustomerProfile from "./Component/CustomerManagement/CustomerProfile";
import CustomerHistory from "./Component/CustomerManagement/CustomerHistory";
import CustomerEarningPayout from "./Component/CustomerManagement/CustomerEarningPayout";
import CustomerRatings from "./Component/CustomerManagement/CustomerRating";
import CustomerMLM from "./Component/CustomerManagement/CustomerMLM";
import CustomerComplain from "./Component/CustomerManagement/CustomerComplain";
import ProposalManagement from "./Component/CareerManagment/ProposalManagement";
import AgreementRecord from "./Component/CareerManagment/AgreementsRecord";
import MarketPlaceControl from "./Component/CareerManagment/MarketPlaceControl";
import OverView from "./Component/FraudDetection/overview/OverView";
import AutoLockRulesPanel from "./Component/FraudDetection/autolockRulePanel/AutoLockRulesPanel";
import FraudProfile from "./Component/FraudDetection/overview/FraudProfile";
import RuleEditorPanel from "./Component/FraudDetection/RuleEditorPanel/RuleEditorPanel";
import Homepage from "./Component/Home/Homepage";
import Mlm from "./Component/mlm/Mlm";
import DriverManagement from "./Component/DriverManagement/DriverManagement";
import DriverProfile from "./Component/DriverManagement/DriverProfile";
import DriverMonitoring from "./Component/DriverManagement/DriverMonitoring";
import EarningsAndPayouts from "./Component/DriverManagement/EarningsAndPayouts";
import Ratings from "./Component/DriverManagement/Ratings";
import Penalty from "./Component/DriverManagement/Penalty";
import Report from "./Component/DriverManagement/Report";
import Analytics from "./Component/FraudDetection/analytics/Analytics";

// Step 1: Move Layout outside of App
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/livelocation";

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
        <Route path="/customermanagement" element={<CustomerManagement />} />
        <Route path="/customerprofile" element={<CustomerProfile />} />
        <Route path="/customerhistory" element={<CustomerHistory />} />
        <Route
          path="/customerearningpayout"
          element={<CustomerEarningPayout />}
        />
        <Route path="/customermlm" element={<CustomerMLM />} />
        <Route path="/customerrating" element={<CustomerRatings />} />
        <Route path="/customercomplain" element={<CustomerComplain />} />
        {/* Career Management */}
        <Route path="/proposalmanagement" element={<ProposalManagement />} />
        <Route path="/agreementrecord" element={<AgreementRecord />} />
        <Route path="/marketplacecontrol" element={<MarketPlaceControl />} />
        {/* Fraud Detection */}
        <Route path="/overview" element={<OverView />} />
        <Route path="/fraudprofile/:id" element={<FraudProfile />} />

        <Route path="/autolockRulesPanel" element={<AutoLockRulesPanel />} />
        <Route path="/ruleeditorpanel" element={<RuleEditorPanel />} />
        <Route path="/analytics" element={<Analytics />} />
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
