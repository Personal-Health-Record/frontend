'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

type BottomNavbarType = {
  path: string;
  iconPath: string;
  text: string;
};

const BottomNavbarOneButton = ({ path, iconPath, text }: BottomNavbarType) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 px-4 py-3 flex justify-evenly bg-white filter drop-shadow-sm"
      style={{ filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.12))' }}
    >
      <button
        className="flex items-center py-3 px-7 border rounded-3xl gap-1"
        onClick={() => {
          handleClick();
        }}
      >
        <Image src={iconPath} alt="" width={20} height={20} />
        <p className="text-mainBlue font-semibold">{text}</p>
      </button>
    </div>
  );
};

export default BottomNavbarOneButton;
