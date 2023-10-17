'use client';
import { useState } from 'react';
import { getLoggedInUser, getUserData } from '../common/userDataHelper';
import Header from '../components/Header';
import Title from '../components/Title';
import ButtonSection from './components/ButtonSection';
import CardTenkes from './components/CardTenkes';
import SearchBar from './components/SearchBar';
import {
  addNotificationData,
  getNotificationData,
} from '../common/notificationDataHelper';
import { useRouter, useSearchParams } from 'next/navigation';
import withAuth from '../components/PrivateRoute';
import { Notification } from '../notifications/constants';

const SharePage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const body = searchParams.get('body');
  const link = searchParams.get('link');

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
    if (listSelectedDoctor.length === 0) {
      alert('Harap pilih tenaga kesehatan terlebih dahulu');
      return;
    }

    const newNotificationDataList = [];
    for (let i = 0; i < listSelectedDoctor.length; i++) {
      const doctorId = listSelectedDoctor[i];
      const newNotification: Notification = {
        id: (notificationData!.length + i + 1).toString(),
        fromUserId: loggedInUser!.id,
        toUserId: doctorId,
        title: title!,
        body: body!,
        date: new Date().toISOString().split('T')[0],
        isRead: false,
        link: link!,
      };
      newNotificationDataList.push(newNotification);
    }

    addNotificationData(newNotificationDataList, notificationData!);
    alert('Data berhasil dikirim');
    router.push('/');
  };

  const handleKirimEmail = () => {
    if (listSelectedDoctor.length === 0) {
      alert('Harap pilih tenaga kesehatan terlebih dahulu');
      return;
    }
    if (listSelectedDoctor.length > 1) {
      alert(
        'Metode kirim email hanya dapat digunakan untuk satu tenaga kesehatan',
      );
      return;
    }

    const newNotificationDataList = [];
    for (let i = 0; i < listSelectedDoctor.length; i++) {
      const doctorId = listSelectedDoctor[i];
      const doctor = userData!.find((user) => user.id === doctorId);
      const subject = 'Vaksinasi';
      const body = `Vaksinasi COVID-19 kedua Anda dijadwalkan besok di Klinik Medi-Go. Silahkan buka menu notifikasi pada aplikasi PHR untuk melihat detailnya.`;

      const newNotification: Notification = {
        id: (notificationData!.length + i + 1).toString(),
        fromUserId: loggedInUser!.id,
        toUserId: doctorId,
        title: subject,
        body: body,
        date: new Date().toISOString(),
        isRead: false,
        link: '/vaksinasi/details/1',
      };
      newNotificationDataList.push(newNotification);

      document.location =
        'mailto:' + doctor!.email + '?subject=' + subject + '&body=' + body;
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

        <ButtonSection
          handleKirimData={handleKirimData}
          handleKirimEmail={handleKirimEmail}
        />
      </div>
    </div>
  );
};

export default withAuth(SharePage);
