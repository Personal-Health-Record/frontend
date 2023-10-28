'use client';

import Header from '@/app/components/Header';
import Image from 'next/image';
import ProfileHeader from '../components/ProfileHeader';
import CardTenkesDetail from '../components/CardTenkesDetail';
import CardTempatPraktik from '../components/CardTempatPraktik';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  TenagaKesehatanUser,
  getTenkesBySIP,
} from '@/app/common/tenagaKesehatanHelper';

const ProfileTenagaMedis = () => {
  const searchParams = useSearchParams();
  const [dataTenkes, setDataTenkes] = useState<TenagaKesehatanUser>();

  useEffect(() => {
    const sip = searchParams.get('sip');
    const data = getTenkesBySIP(parseInt(sip || ''));

    setDataTenkes(data as TenagaKesehatanUser);
  }, [searchParams]);

  return (
    <div className="flex flex-col">
      <Header title="Profil Tenaga Kesehatan" />

      <div className="flex flex-col py-3 px-4 gap-3 pt-6 ">
        <div className="self-center">
          <Image
            src={dataTenkes?.profilePicture || ''}
            alt="doctor"
            width={80}
            height={80}
          />
        </div>

        <p className="font-semibold text-mainGrey self-center">
          {dataTenkes?.name}
        </p>

        <ProfileHeader
          specialist={dataTenkes?.specialist || ''}
          yoe={dataTenkes?.yoe || 0}
        />
        <CardTenkesDetail
          data={dataTenkes?.sip.toString() || ''}
          title="Nomor SIP"
        />
        <CardTenkesDetail data={dataTenkes?.almamater || ''} title="Alumnus" />

        <CardTempatPraktik
          name={dataTenkes?.practiceLocation.name || ''}
          id={dataTenkes?.practiceLocation.id || 0}
        />
      </div>
    </div>
  );
};

export default ProfileTenagaMedis;
