'use client';

import { getUserPhysique } from '@/app/common/dataTrackerHelper';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CardHeightWeight = () => {
  const router = useRouter();
  const { userPhysique } = getUserPhysique();

  const handleClickCard = () => {
    router.push('/monitoring/insert-data');
  };

  return (
    <div className="flex gap-2 justify-between">
      <div
        className="flex shadow-md px-5 py-3 w-fit rounded-xl"
        onClickCapture={handleClickCard}
      >
        <div className="flex items-center gap-2">
          <Image src="/images/weight.png" alt="weight" width={40} height={40} />
          <div className="flex flex-col">
            <p className="text-xs text-mainGrey ">Berat Badan</p>
            <p className="text-xs text-lightGrey">{userPhysique?.weight} kg</p>
          </div>
        </div>
      </div>

      <div
        className="flex shadow-md px-4 py-3 w-fit rounded-xl"
        onClickCapture={handleClickCard}
      >
        <div className="flex items-center gap-2">
          <Image src="/images/height.png" alt="weight" width={40} height={40} />
          <div className="flex flex-col">
            <p className="text-xs text-mainGrey ">Tinggi Badan</p>
            <p className="text-xs text-lightGrey">{userPhysique?.height} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeightWeight;
