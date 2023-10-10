'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  menu: {
    icon: string;
    title: string;
    url: string;
  };
}

const MainMenuIcon = ({ menu }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(menu.url);
  };

  return (
    <div
      className="flex flex-col items-center gap-2 text-center w-20 mb-5"
      onClick={handleOnClick}
    >
      <Image src={menu?.icon} alt="" width={50} height={50} />
      <p className="text-xs">{menu?.title}</p>
    </div>
  );
};

export default MainMenuIcon;
