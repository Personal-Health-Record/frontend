'use client';
import { useState } from 'react';
import { getUserData } from '../common/userDataHelper';
import Header from '../components/Header';
import Title from '../components/Title';
import ButtonSection from './components/ButtonSection';
import CardTenkes from './components/CardTenkes';
import SearchBar from './components/SearchBar';

const SharePage = () => {
  const [listSelectedDoctor, setListSelectedDoctor] = useState<string[]>([]);
  let { userData } = getUserData();
  if (!userData) {
    return <div> Loading... </div>;
  }

  const handleSelectDoctor = (doctorId: string) => {
    if (listSelectedDoctor.includes(doctorId)) {
      setListSelectedDoctor(listSelectedDoctor.filter((id) => id !== doctorId));
      return;
    }

    setListSelectedDoctor([...listSelectedDoctor, doctorId]);
  };

  // filter only doctor
  userData = userData.filter((user) => user.role === 'doctor');

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

        <ButtonSection />
      </div>
    </div>
  );
};

export default SharePage;
