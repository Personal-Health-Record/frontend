'use client';
import { useState } from 'react';
import { getLoggedInUser, getUserData } from '../common/userDataHelper';
import Header from '../components/Header';
import Title from '../components/Title';
import ButtonSection from './components/ButtonSection';
import CardTenkes from './components/CardTenkes';
import SearchBar from './components/SearchBar';
import { Notification } from '../common/constants';
import {
  addNotificationData,
  getNotificationData,
} from '../common/notificationDataHelper';
import { useRouter } from 'next/navigation';

const SharePage = () => {
  const router = useRouter();
  const [listSelectedDoctor, setListSelectedDoctor] = useState<string[]>([]);
  let { notificationData } = getNotificationData();
  let { loggedInUser, userData } = getLoggedInUser();
  if (!loggedInUser || !userData || !notificationData) {
    return <div> Loading... </div>;
  }
  // filter only doctor
  userData = userData.filter((user) => user.role === 'doctor');

  const handleSelectDoctor = (doctorId: string) => {
    if (listSelectedDoctor.includes(doctorId)) {
      setListSelectedDoctor(listSelectedDoctor.filter((id) => id !== doctorId));
      return;
    }

    setListSelectedDoctor([...listSelectedDoctor, doctorId]);
  };

  const handleKirimData = () => {
    const newNotificationDataList = [];
    for (let i = 0; i < listSelectedDoctor.length; i++) {
      const doctorId = listSelectedDoctor[i];
      const newNotification: Notification = {
        id: (notificationData!.length + i + 1).toString(),
        fromUserId: loggedInUser!.id,
        toUserId: doctorId,
        title: 'Vaksinasi',
        body: `Vaksinasi COVID-19 kedua Anda dijadwalkan besok di Klinik Medi-Go.`,
        date: new Date().toISOString(),
        isRead: false,
        link: '/vaksinasi/details/1',
      };
      newNotificationDataList.push(newNotification);
    }

    addNotificationData(newNotificationDataList, notificationData!);
    alert('Data berhasil dikirim');
    router.push('/');
  };

  return (
    <div className="flex flex-col">
      <Header title="Bagikan ke" />

      <div className="flex flex-col py-3 px-4 pt-6 gap-4">
        <SearchBar />
        <Title text="Tenaga Kesehatan Anda" />

        {userData.map((tenkes, index) => (
          <CardTenkes
            key={index}
            image={tenkes.profilePicture}
            name={tenkes.name}
            specialist={tenkes.specialist!}
            handleSelectDoctor={() => handleSelectDoctor(tenkes.id)}
          />
        ))}

        {/* TODO: kalo kirim email, buka email dengan prefilled data */}
        <ButtonSection handleKirimData={handleKirimData} />
      </div>
    </div>
  );
};

export default SharePage;
