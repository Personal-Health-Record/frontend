'use client';

import Header from '@/app/components/Header';
import FormKontak from '../components/FormKontak';
import FormLuarNegri from '../components/FormLuarNegri';
import FormLokal from '../components/FormLokal';
import FormGejala from '../components/FormGejala';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  addSkriningKesehatan,
  getSkriningKesehatanList,
} from '@/app/common/skriningKesehatanHelper';
import { Skrining } from '../constants';
import { getTodayFormatted } from '@/app/common/dateHelper';

const ScreeningCovid = () => {
  const [kontak, setKontak] = useState(false);
  const [luarNegri, setLuarNegri] = useState(false);
  const [local, setLocal] = useState(false);
  const [totalGejala, setTotalGejala] = useState(0);
  const { listSkrining } = getSkriningKesehatanList();

  const router = useRouter();

  const handleSubmit = () => {
    let totalScore = 0;

    if (kontak) {
      totalScore += 1;
    }
    if (luarNegri) {
    }
    if (local) {
      totalScore += 1;
    }

    totalScore += totalGejala;

    const skriningData: Skrining = {
      date: getTodayFormatted(),
      location: 'Mandiri',
      skriningType: 'SkriningCOVID-19',
    };

    addSkriningKesehatan(skriningData, listSkrining || []);

    router.replace(`/screening/covid/result?score=${totalScore}`);
  };

  return (
    <div className="flex flex-col">
      <Header title="Skrining COVID-19" />

      <div className="flex py-5 px-4 flex-col gap-5">
        <h3 className="font-semibold text-mainGrey text-sm mb-1">
          Riwayat Kontak dan Perjalanan
        </h3>

        <FormKontak setKontak={setKontak} />
        <FormLuarNegri setLuarNegri={setLuarNegri} />
        <FormLokal setLocal={setLocal} />

        <h3 className="font-semibold text-mainGrey text-sm mt-5">
          Gejala yang dirasakan
        </h3>

        <FormGejala setTotalGejala={setTotalGejala} />

        <button
          className="bg-mainBlue rounded-3xl text-white font-semibold py-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ScreeningCovid;
