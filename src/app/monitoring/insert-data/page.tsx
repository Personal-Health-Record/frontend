'use client';

import { setUserPhysique } from '@/app/common/dataTrackerHelper';
import Header from '@/app/components/Header';
import TextInput from '@/app/components/TextInput';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const InsertDataHeightWeight = () => {
  const router = useRouter();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    console.log({ height, weight });
  }, [height, weight]);

  const handleSubmit = () => {
    setUserPhysique({
      height: parseInt(height),
      weight: parseInt(weight),
      latestUpdate: new Date().toString(),
    });

    router.back();
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full gap-3">
        <h3 className="font-semibold text-mainGrey pl-4 mt-5">
          Berat dan Tinggi Badan
        </h3>
        <TextInput
          label="Berat Badan (kg)"
          onChange={(e) => {
            setWeight(e);
          }}
          placeholder="80"
          type="number"
        />

        <TextInput
          label="Tinggi Badan (cm)"
          onChange={(e) => {
            setHeight(e);
          }}
          placeholder="170"
          type="number"
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

export default InsertDataHeightWeight;
