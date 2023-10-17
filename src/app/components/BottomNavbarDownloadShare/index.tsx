'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export type ShareProps = {
  title: string;
  body: string;
  link: string;
};

const BottomNavbarDownloadShare = ({ title, body, link }: ShareProps) => {
  const router = useRouter();

  const handleClickBagikan = () => {
    router.push(`/share?title=${title}&body=${body}&link=${link}`);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 px-4 py-3 flex justify-evenly bg-white filter drop-shadow-sm"
      style={{ filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.12))' }}
    >
      <button className="flex items-center py-3 px-7 border rounded-3xl gap-1">
        <Image src="/images/download.png" alt="" width={20} height={20} />
        <p className="text-mainBlue font-semibold">Unduh</p>
      </button>

      <button
        className="flex items-center py-3 px-7 border rounded-3xl gap-2"
        onClick={handleClickBagikan}
      >
        <Image src="/images/share.png" alt="" width={20} height={20} />
        <p className="text-mainBlue font-semibold">Bagikan</p>
      </button>
    </div>
  );
};

export default BottomNavbarDownloadShare;
