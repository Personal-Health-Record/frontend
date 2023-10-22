'use client';

import { getUserPhysique } from '@/app/common/dataTrackerHelper';
import { getDateTrackerKesehatan } from '@/app/common/dateHelper';
import Chip from '@/app/faskes/components/Chip';
import { useRouter } from 'next/navigation';

const HeaderMonitoring = () => {
  const router = useRouter();
  const { userPhysique } = getUserPhysique();

  const handleClickDashboard = () => {
    router.push('/monitoring/data-tracking');
  };

  return (
    <div className="flex items-center justify-between">
      <Chip text={getDateTrackerKesehatan(userPhysique?.latestUpdate || '')} />
      <p className="text-lightGrey text-sm" onClick={handleClickDashboard}>
        Lihat Dashboard
      </p>
    </div>
  );
};

export default HeaderMonitoring;
