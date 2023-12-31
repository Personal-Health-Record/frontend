'use client';

import { getSkriningById } from '@/app/common/skriningKesehatanHelper';
import { useRouter } from 'next/navigation';
import { Skrining } from '../../constants';

interface Props {
  date: string;
  type: string;
  location: string;
  id: number;
}

const RiwayatScreeningCard = ({ date, location, type, id }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    const skriningData: Skrining | undefined | null = getSkriningById(id);

    if (skriningData?.skriningType === 'Skrining COVID-19') {
      router.push(`/screening/covid/detail?id=${id}`);
    } else if (skriningData?.skriningType === 'Skrining Kesehatan Mental') {
      router.push(`/screening/mental/detail?id=${id}`);
    } else if (
      skriningData?.skriningType === 'Skrining Penyakit Tidak Menular'
    ) {
      router.push(`/screening/ptm/detail?id=${id}`);
    }
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
