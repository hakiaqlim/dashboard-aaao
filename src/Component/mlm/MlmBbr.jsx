import React from 'react';

const MlmBbr = () => {
  const offers = [
    {
      type: "Daily",
      title: "Quick Booster",
      reward: "AED 10",
      duration: "1 Day",
      personalRides: 5,
      newReferrals: 1,
      newbieRides: 7
    },
    {
      type: "Weekly",
      title: "Boomer Offer",
      reward: "AED 50",
      duration: "1 Week",
      personalRides: 15,
      newReferrals: 3,
      newbieRides: 21
    },
    {
      type: "Monthly",
      title: "Mega Booster",
      reward: "AED 200",
      duration: "1 Month",
      personalRides: 60,
      newReferrals: 10,
      newbieRides: 100
    }
  ];

  return (
    <div className=" p-4 rounded-lg text-yellow-400">
      <h2 className="text-lg font-bold mb-4">Bonus Booster Rewards (BBR)</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-yellow-400 text-sm">
          <thead className="border-b border-yellow-400">
            <tr>
              <th className="px-3 py-2">Type</th>
              <th className="px-3 py-2">Offer Name</th>
              <th className="px-3 py-2">Reward</th>
              <th className="px-3 py-2">Duration</th>
              <th className="px-3 py-2">Personal Rides</th>
              <th className="px-3 py-2">New Referrals</th>
              <th className="px-3 py-2">Newbie Rides</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, index) => (
              <tr key={index} className="text-center hover:bg-[#014b38]">
                <td className=" px-3 py-2">{offer.type}</td>
                <td className=" px-3 py-2">{offer.title}</td>
                <td className=" px-3 py-2">{offer.reward}</td>
                <td className=" px-3 py-2">{offer.duration}</td>
                <td className=" px-3 py-2">{offer.personalRides}</td>
                <td className=" px-3 py-2">{offer.newReferrals}</td>
                <td className=" px-3 py-2">{offer.newbieRides}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MlmBbr;
