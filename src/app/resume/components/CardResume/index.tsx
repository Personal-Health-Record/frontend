"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Resume } from "../../models";
import { formatDate } from "@/app/common/dateHelper";

export type CardResumeProps = {
  resume: Resume;
}

const CardResume = ({resume}: CardResumeProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/resume/details/${resume.id}`);
  };

  return (
    <div
      className="flex border-b-2 py-2 items-center justify-between"
      onClick={handleOnClick}
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm">{formatDate(resume.date)}</p>
        <p className="text-sm text-mainGrey">{resume.location}</p>
      </div>

      <Image src="/images/arrow-right.png" alt="" width={30} height={30} />
    </div>
  );
};

export default CardResume;
