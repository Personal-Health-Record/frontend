import { useEffect, useState } from 'react';
import { PhysiqueData, dummyUserPhysique } from '../monitoring/constants';

export const getUserPhysique = () => {
  const [userPhysique, setUserPhysique] = useState<PhysiqueData>();

  useEffect(() => {
    if (!userPhysique && typeof window !== 'undefined') {
      const userPhysiqueStorage = localStorage.getItem('physiqueDataStorage');
      if (userPhysiqueStorage) {
        setUserPhysique(JSON.parse(userPhysiqueStorage));
        return;
      }

      setUserPhysique(dummyUserPhysique);
    }
  }, [userPhysique]);

  return {
    userPhysique,
  };
};

export const setUserPhysique = ({
  height,
  weight,
  latestUpdate,
}: PhysiqueData) => {
  localStorage.setItem(
    'physiqueDataStorage',
    JSON.stringify({ height, weight, latestUpdate }),
  );
};
