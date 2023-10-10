import Header from '@/app/components/Header';
import Image from 'next/image';
import ProfileHeader from '../components/ProfileHeader';
import CardTenkesDetail from '../components/CardTenkesDetail';
import CardTempatPraktik from '../components/CardTempatPraktik';

const ProfileTenagaMedis = () => {
  return (
    <div className="flex flex-col">
      <Header title="Profil Tenaga Kesehatan" />

      <div className="flex flex-col py-3 px-4 gap-3 pt-6 ">
        <div className="self-center">
          <Image src="/images/docter-1.png" alt="" width={80} height={80} />
        </div>

        <p className="font-semibold text-mainGrey self-center">dr. Ali Abdul</p>

        <ProfileHeader />
        <CardTenkesDetail data="953772922" title="Nomor SIP" />
        <CardTenkesDetail
          data="Fakultas Kedokteran Universitas Indonesia"
          title="Alumnus"
        />

        <CardTempatPraktik data="Rumah Sakit Medika" />
      </div>
    </div>
  );
};

export default ProfileTenagaMedis;
