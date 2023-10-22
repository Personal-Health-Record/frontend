'use client';

import Header from '@/app/components/Header';
import TextInput from '@/app/components/TextInput';
import { useRouter } from 'next/navigation';

const InsertDataFisik = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.back();
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full gap-3">
        <h3 className="font-semibold text-mainGrey pl-4 mt-5">
          Aktifitas Fisik
        </h3>
        <TextInput
          label="Jenis Aktifitas Fisik"
          onChange={() => {}}
          placeholder="Jalan Kaki"
          type="text"
        />

        <TextInput
          label="Waktu Mulai"
          onChange={() => {}}
          placeholder="6:00"
          type="text"
        />

        <TextInput
          label="Waktu Selesai"
          onChange={() => {}}
          placeholder="6:30"
          type="text"
        />

        <button
          className="bg-mainBlue rounded-3xl text-white font-semibold py-3 px-10 mx-3 mt-3"
          onClick={handleSubmit}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default InsertDataFisik;
