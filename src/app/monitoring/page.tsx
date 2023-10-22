'use client';

import Header from '../components/Header';
import withAuth from '../components/PrivateRoute';
import HeaderMonitoring from './components/HeaderMonitoring';
import CardHeightWeight from './components/CardHeightWeight';
import TargetSection from './components/TargetSection';
import BottomNavbarDownloadShare from '../components/BottomNavbarDownloadShare';

const MonitoringPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <HeaderMonitoring />
        <CardHeightWeight />
        <TargetSection />

        <button className="border py-3 rounded-3xl text-mainBlue font-semibold border-mainBlue mt-5">
          + Tambahkan Target
        </button>

        <BottomNavbarDownloadShare body="" link="" title="" />
      </div>
    </div>
  );
};

export default withAuth(MonitoringPage);
