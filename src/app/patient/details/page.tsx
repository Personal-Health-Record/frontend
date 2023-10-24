'use client';

import Header from '@/app/components/Header';
import Image from 'next/image';
import ProfileHeader from '../components/ProfileHeader';
import CardOptionPatient from '../components/CardPatientDetail';

const ProfilePatientPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Profil Tenaga Kesehatan" />

      <div className="flex flex-col py-3 px-4 gap-3 pt-6 ">
        <div className="self-center">
          <Image
            src="/images/profile-icon-2.png"
            alt="patient"
            width={80}
            height={80}
          />
        </div>

        <p className="font-semibold text-mainGrey self-center">Jimmy Will</p>

        <ProfileHeader age="30" gender="Laki-laki" />
        <CardOptionPatient path="/" title="Profil Saya" />
        <CardOptionPatient path="/" title="Resume Medis Pasien" />
        <CardOptionPatient path="/" title="Rujukan Pasien" />
        <CardOptionPatient path="/" title="Skrining Kesehatan Pasien" />
        <CardOptionPatient path="/" title="Tracking Data Kesehatan" />
      </div>
    </div>
  );
};

export default ProfilePatientPage;
