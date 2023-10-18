'use client';

import { useRouter } from 'next/navigation';

interface Props {
  date: string;
  type: string;
  location: string;
}

const RiwayatScreeningCard = ({ date, location, type }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/screening/history');
  };

  return (
    <div
      className="flex justify-between px-2 py-3 border-b-2 w-full"
      onClick={handleOnClick}
    >
      <div className="flex flex-col gap-1">
        <p className="text-xs text-mainGrey">{date}</p>
        <p className="text-sm text-lightGrey">{type}</p>
      </div>

      <p className="text-xs text-mainGrey text-right">{location}</p>
    </div>
  );
};

export default RiwayatScreeningCard;
