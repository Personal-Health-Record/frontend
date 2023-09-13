"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const TopCard = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/resume/riwayat");
  };

  return (
    <div className="flex items-center justify-between" onClick={handleOnClick}>
      <div className="flex items-center gap-3 font-semibold text-mainGrey">
        <Image src="/images/resume-icon.png" alt="" width={50} height={50} />
        <p>Riwayat Medis Anda</p>
      </div>
      <Image src="/images/arrow-right.png" alt="" width={30} height={30} />
    </div>
  );
};

export default TopCard;
