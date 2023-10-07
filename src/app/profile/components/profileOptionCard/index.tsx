"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  path: string;
}

const ProfileOptionCard = ({ title, path }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(path);
  };

  return (
    <div className="flex items-center gap-3" onClick={handleOnClick}>
      <div className="flex items-center justify-between text-start w-full border-b">
        <p className="text-xs py-5">{title}</p>
        <Image src="/images/arrow-right.png" alt="" width={25} height={20} />
      </div>
    </div>
  );
};

export default ProfileOptionCard;
