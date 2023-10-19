'use client';

import BottomNavbarDownloadShare from '@/app/components/BottomNavbarDownloadShare';
import Header from '@/app/components/Header';
import TextFieldDetail from '../../components/TextFieldDetail';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Covid, Mental } from '../../constants';
import { getSkriningById } from '@/app/common/skriningKesehatanHelper';

const DetailMental = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<Mental>();

  useEffect(() => {
    const id = searchParams.get('id');
    const skriningData = getSkriningById(parseInt(id || ''));

    setData(skriningData?.detail as Mental);
  }, [searchParams]);

  const getValue = (val: number) => {
    if (val === 0) {
      return 'Tidak Pernah';
    }
    if (val === 1) {
      return 'Beberapa hari';
    }
    if (val === 2) {
      return 'Lebih dari separuh waktu yang dimaksud';
    }
    if (val === 3) {
      return 'Hampir setiap hari';
    }

    return '';
  };

  return (
    <div>
      <Header title="Riwayat Skrining Kesehatan" />
      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-16">
        <h3 className="font-semibold text-mainGrey text-sm">
          Riwayat Kontak dan Perjalanan
        </h3>

        <TextFieldDetail
          title="Kurang berminat atau bergairah dalam melakukan apapun"
          data={getValue(data?.gairah || 0)}
        />

        <TextFieldDetail
          title="Merasa murung, sedih, atau putus asa"
          data={getValue(data?.murung || 0)}
        />

        <TextFieldDetail
          title="Sulit tidur/mudah terbangun, atau terlalu banyak tidur"
          data={getValue(data?.sulitTidur || 0)}
        />

        <TextFieldDetail
          title="Merasa lelah atau kurang bertenaga"
          data={getValue(data?.lelah || 0)}
        />

        <TextFieldDetail
          title="Kurang nafsu makan atau terlalu banyak makan"
          data={getValue(data?.nafsuMakanKurang || 0)}
        />

        <TextFieldDetail
          title="Kurang percaya diri — atau merasa bahwa Anda adalah orang yang gagal atau telah mengecewakan diri sendiri atau keluarga"
          data={getValue(data?.kurangPd || 0)}
        />

        <TextFieldDetail
          title="Sulit berkonsentrasi pada sesuatu, misalnya membaca koran atau menonton televisi"
          data={getValue(data?.sulitKonsen || 0)}
        />

        <TextFieldDetail
          title="Bergerak atau berbicara sangat lambat sehingga orang lain memperhatikannya. Atau sebaliknya; merasa resah atau gelisah sehingga Anda lebih sering bergerak dari biasanya."
          data={getValue(data?.lambat || 0)}
        />

        <TextFieldDetail
          title="Merasa lebih baik mati atau ingin melukai diri sendiri dengan cara apapun."
          data={getValue(data?.melukai || 0)}
        />
      </div>
      <BottomNavbarDownloadShare body="" link="" title="" />
    </div>
  );
};

export default DetailMental;
