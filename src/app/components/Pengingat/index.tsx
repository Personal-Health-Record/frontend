'use client';
import { getObatData } from '@/app/common/obatDataHelper';
import { Obat, Pengingat } from '@/app/obat/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Pengingat = () => {
  const router = useRouter();
  const { obatData } = getObatData();
  const [selectedObat, setSelectedObat] = useState<Obat>();
  const [selectedPengingat, setSelectedPengingat] = useState<Pengingat>();

  const handleRedirectObat = () => {
    router.push('/obat');
  };

  useEffect(() => {
    obatData?.forEach((obat) => {
      obat.listPengingat.forEach((pengingat) => {
        if (pengingat.consumptionStatus === 'Belum dikonsumsi') {
          const dateFrom = new Date(obat.dateFrom);
          const dateTo = new Date(obat.dateTo);
          const today = new Date();

          if (today >= dateFrom && today <= dateTo) {
            setSelectedObat(obat);
            setSelectedPengingat(pengingat);
          }
        }
      });
    });
  }, [obatData]);

  if (selectedObat === undefined) {
    return null;
  }

  return (
    <div className="flex flex-col px-4 py-4 gap-2">
      <h3>Pengingat</h3>

      <div
        className="flex shadow-md rounded-md px-3 py-4 gap-3 items-center justify-between"
        onClick={handleRedirectObat}
      >
        <div>
          <Image
            src="/images/pengingat-icon.png"
            alt=""
            width={45}
            height={45}
          />
        </div>

        <div className="flex flex-col justify-center gap-2">
          <p className="text-sm">{selectedObat.name}</p>
          <p className="text-xs text-mainGrey whitespace-nowrap">
            {selectedObat.consumptionPerDay} {selectedObat.type}{' '}
            {selectedObat.consumptionTime}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <p className="text-xl font-bold text-mainGrey">
            {selectedPengingat?.time}
          </p>
          <button className="text-xs bg-mainBlue px-4 py-2 rounded-3xl text-white font-bold">
            Konsumsi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pengingat;
