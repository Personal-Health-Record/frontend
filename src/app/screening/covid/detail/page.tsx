'use client';

import BottomNavbarDownloadShare from '@/app/components/BottomNavbarDownloadShare';
import Header from '@/app/components/Header';
import TextFieldDetail from '../../components/TextFieldDetail';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Covid } from '../../constants';
import { getSkriningById } from '@/app/common/skriningKesehatanHelper';

const DetailCovid = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<Covid>();

  useEffect(() => {
    const id = searchParams.get('id');
    const skriningData = getSkriningById(parseInt(id || ''));

    setData(skriningData?.detail as Covid);
  }, [searchParams]);

  return (
    <div>
      <Header title="Riwayat Skrining Kesehatan" />
      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-2">
        <h3 className="font-semibold text-mainGrey text-sm">
          Riwayat Kontak dan Perjalanan
        </h3>

        <TextFieldDetail
          title="Riwayat kontak erat dengan penderita"
          data={data?.kontak ? 'Ya' : 'Tidak'}
        />

        <TextFieldDetail
          title="Riwayat perjalanan luar negeri"
          data={data?.luarNegri ? 'Ya' : 'Tidak'}
        />
        <TextFieldDetail
          title="Riwayat perjalanan area penularan"
          data={data?.area ? 'Ya' : 'Tidak'}
        />

        <TextFieldDetail
          title="Gejala yang dirasakan"
          data={data?.gejala || ''}
        />
      </div>
      <BottomNavbarDownloadShare body="" link="" title="" />
    </div>
  );
};

export default DetailCovid;
