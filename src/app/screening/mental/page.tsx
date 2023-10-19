'use client';

import Header from '@/app/components/Header';
import FormMental from '../components/FormMental';
import { Skrining, mentalQuestion } from '../constants';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getTodayFormatted } from '@/app/common/dateHelper';
import {
  addSkriningKesehatan,
  getSkriningKesehatanList,
} from '@/app/common/skriningKesehatanHelper';

const ScreeningMental = () => {
  const router = useRouter();
  const { listSkrining } = getSkriningKesehatanList();
  const [listScore, setListScore] = useState<number[]>(new Array(9).fill(0));

  const handleSubimt = () => {
    console.log({ listScore });
    const totalScore = listScore.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );

    const skriningData: Skrining = {
      id: Math.floor(Math.random() * 10000) + 1,
      date: getTodayFormatted(),
      location: 'Mandiri',
      skriningType: 'Skrining Kesehatan Mental',
      detail: {
        gairah: listScore[0],
        murung: listScore[1],
        sulitTidur: listScore[2],
        lelah: listScore[3],
        nafsuMakanKurang: listScore[4],
        kurangPd: listScore[5],
        sulitKonsen: listScore[6],
        lambat: listScore[7],
        melukai: listScore[8],
      },
    };

    addSkriningKesehatan(skriningData, listSkrining || []);

    router.replace(`/screening/mental/result?score=${totalScore}`);
  };

  return (
    <div className="flex flex-col">
      <Header title="Skrining Kesehatan Mental" />

      <div className="flex py-5 px-4 flex-col gap-5">
        <h3 className="font-semibold text-mainGrey text-sm mb-1">
          Dalam 2 minggu terakhir, seberapa sering Anda terganggu oleh
          masalah-masalah berikut?
        </h3>

        {mentalQuestion.map((question, index) => (
          <FormMental
            key={index}
            title={question}
            setScore={setListScore}
            listScore={listScore}
            idx={index}
          />
        ))}

        <button
          className="bg-mainBlue rounded-3xl text-white font-semibold py-3"
          onClick={handleSubimt}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ScreeningMental;
