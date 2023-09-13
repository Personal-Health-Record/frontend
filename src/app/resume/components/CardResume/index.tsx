"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  resumeDate: string;
  resumeLocation: string;
}

const CardResume = ({ resumeDate, resumeLocation }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/resume/details");
  };

  return (
    <div
      className="flex border-b-2 py-2 items-center justify-between"
      onClick={handleOnClick}
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm">{resumeDate}</p>
        <p className="text-sm text-mainGrey">{resumeLocation}</p>
      </div>

      <Image src="/images/arrow-right.png" alt="" width={30} height={30} />
    </div>
  );
};

export default CardResume;
