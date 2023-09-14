"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  dataCard: {
    title: string;
    image: string;
    path: string;
  };
}

const ScreeningKesehatanMandiriCard = ({ dataCard }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(dataCard?.path);
  };

  return (
    <div className="flex items-center gap-3" onClick={handleOnClick}>
      <div>
        <Image src={dataCard.image} alt="" width={50} height={50} />
      </div>

      <div className="flex items-center justify-between text-start w-full border-b-2">
        <p className="text-xs py-5">{dataCard.title}</p>
        <Image src="/images/arrow-right.png" alt="" width={25} height={20} />
      </div>
    </div>
  );
};

export default ScreeningKesehatanMandiriCard;
