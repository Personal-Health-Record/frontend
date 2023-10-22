'use client';

import Header from '@/app/components/Header';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import BarChartSection from '../components/BarChartSection';
import TabHeader from '../components/TabHeader';
import CardSelectDate from '../components/CardSelectDate';
import BottomNavbarDownloadShare from '@/app/components/BottomNavbarDownloadShare';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const DataTracking = () => {
  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />
      <TabHeader />

      <div className="flex flex-col w-full px-4 pt-4 gap-2 mb-32">
        <CardSelectDate />
        <BarChartSection />
      </div>

      <BottomNavbarDownloadShare body="" link="" title="" />
    </div>
  );
};

export default DataTracking;
