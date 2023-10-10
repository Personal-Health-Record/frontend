'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className="flex items-center gap-3 px-3 py-3 border-b-2 w-full"
      onClick={handleBack}
    >
      <Image src="/images/back.png" alt="" width={30} height={30} />
      <h3 className="font-bold text-xl text-mainGrey">{title}</h3>
    </div>
  );
};

export default Header;
