'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const DoctorMenu = () => {
  const router = useRouter();

  const handleClickMenu = () => {
    router.push('/patient');
  };

  return (
    <div className="flex flex-col p-4 gap-4">
      <h3 className="font-semibold text-mainGrey">
        Pasien yang Perlu ditangani
      </h3>
      <div className="flex gap-3">
        <Image src="/images/menuDoctor.png" alt="menu" width={50} height={50} />
        <div
          className="flex justify-between items-center w-full border-b-2"
          onClick={handleClickMenu}
        >
          <p className="text-xs">Profil Pasien</p>
          <div>
            <Image
              src="/images/arrow-right.png"
              alt=""
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorMenu;
