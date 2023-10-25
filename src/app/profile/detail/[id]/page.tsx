'use client';

import Header from '@/app/components/Header';
import { formatDate } from '@/app/common/dateHelper';
import { getUserData } from '@/app/common/userDataHelper';
import BottomNavbarOneButton from '@/app/components/BottomNavbarOneButton';
import DetailInfoCard from '../../components/DetailInfoCard';
import { useParams } from 'next/navigation';

const ProfileDetail = () => {
  const { userData } = getUserData();
  const params = useParams();

  if (!userData) {
    return <div> Loading... </div>;
  }

  const user = userData.find((user) => user.id === params.id)!;

  return (
    <div className="flex flex-col">
      <Header title="Profil Saya" />
      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-16">
        <h3 className="font-semibold">Informasi Umum</h3>
        <DetailInfoCard title={'Nama Lengkap'} data={user.name} />
        {user.nik && <DetailInfoCard title={'NIK'} data={user.nik} />}
        {user.dateOfBirth && (
          <DetailInfoCard
            title={'Tanggal Lahir'}
            data={formatDate(user.dateOfBirth)}
          />
        )}

        <DetailInfoCard title={'Usia'} data={user.age.toString()} />
        <DetailInfoCard title={'Jenis Kelamin'} data={user.gender} />
        {user.bloodType && (
          <DetailInfoCard title={'Golongan Darah'} data={user.bloodType} />
        )}
        {user.maritalStatus && (
          <DetailInfoCard
            title={'Status Pernikahan'}
            data={user.maritalStatus}
          />
        )}
        {user.email && <DetailInfoCard title={'Email'} data={user.email} />}
      </div>

      <BottomNavbarOneButton
        path="/profile/edit"
        iconPath="/images/edit.png"
        text="Edit profile"
      />
    </div>
  );
};

export default ProfileDetail;
