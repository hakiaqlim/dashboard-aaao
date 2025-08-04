import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const WalletPaymentNavbar = () => {
  const location = useLocation();

  const linkClass = (path) => {
    return `menu-tab ${location.pathname === path ? 'active' : ''}`;
  };

  return (
    <div className="border-b border-yellow-400 px-6 py-2 ">
      {/* Only this div scrolls horizontally */}
      <div className="flex gap-x-4 overflow-x-auto  whitespace-nowrap scrollbar-hide">
        <Link to="/paymentoverview" className={linkClass('/paymentoverview')}>
          Overview
        </Link>

        <div className="w-[2px] h-3 bg-yellow-400" />

        <Link to="/walletadjustment" className={linkClass('/walletadjustment')}>
          Wallet Adjustment
        </Link>

        <div className="w-[2px] h-3 bg-yellow-400" />

        <Link to="/transactions" className={linkClass('/transactions')}>
          Withdrawal Management
        </Link>

        <div className="w-[2px] h-3 bg-yellow-400" />

        <Link to="/walletfreezingrules" className={linkClass('/walletfreezingrules')}>
          Wallet Freezing Rules
        </Link>

        <div className="w-[2px] h-3 bg-yellow-400" />

        <Link to="/transactionlog" className={linkClass('/transactionlog')}>
          Transaction Logs
        </Link>

        <div className="w-[2px] h-3 bg-yellow-400" />

        <Link to="/alertnotification" className={linkClass('/alertnotification')}>
          Alert & Smart Notification
        </Link>

        <div className="w-[2px] h-3 bg-yellow-400" />

        <Link to="/unachievedpool" className={linkClass('/unachievedpool')}>
          Unachieved Pool Management
        </Link>
      </div>
    </div>
  );
};

export default WalletPaymentNavbar;
