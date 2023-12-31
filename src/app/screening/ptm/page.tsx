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
import FormRokok from '../components/FormRokok';
import FormFisik from '../components/FormFisik';
import FormBuahSayur from '../components/FormBuahSayur';
import FormPenyakitKeluarga from '../components/FormPenyakitKeluarga';
import FormHasilPemeriksaan from '../components/FormHasilPemeriksaan';

const ScreeningPTM = () => {
  const router = useRouter();
  const { listSkrining } = getSkriningKesehatanList();
  const [rokok, setRokok] = useState(false);
  const [fisik, setFisik] = useState(false);
  const [buahSayur, setBuahSayur] = useState(false);
  const [totalPenyakit, setTotalPenyakit] = useState(0);
  const [listPenyakit, setListPenyakit] = useState<string[]>([]);
  const [systole, setSystole] = useState(0);
  const [diastole, setDiastole] = useState(0);
  const [gula, setGula] = useState(0);
  const [berat, setBerat] = useState(0);
  const [tinggi, setTinggi] = useState(0);
  const [lingkar, setLingkar] = useState(0);

  const handleSubimt = () => {
    let totalScore = 0;

    if (rokok) {
      totalScore += 1;
    }
    if (fisik) {
      totalScore += 1;
    }
    if (buahSayur) {
      totalScore += 1;
    }

    totalScore += totalPenyakit;

    const skriningData: Skrining = {
      id: Math.floor(Math.random() * 10000) + 1,
      date: getTodayFormatted(),
      location: 'Mandiri',
      skriningType: 'Skrining Penyakit Tidak Menular',
      detail: {
        rokok: rokok,
        fisik: fisik,
        buahSayur: buahSayur,
        penyakit: listPenyakit.join(', '),
        systole: systole,
        diastole: diastole,
        tinggi: tinggi,
        berat: berat,
        lingkar: lingkar,
        gula: gula,
      },
    };

    addSkriningKesehatan(skriningData, listSkrining || []);

    router.replace(`/screening/ptm/result?score=${totalScore}`);
  };

  return (
    <div className="flex flex-col">
      <Header title="Skrining Kesehatan Mental" />

      <div className="flex py-5 px-4 flex-col gap-5">
        <h3 className="font-semibold text-mainGrey text-sm mb-1">
          Skrining Kesehatan
        </h3>

        <FormRokok setRokok={setRokok} />
        <FormFisik setFisik={setFisik} />
        <FormBuahSayur setBuahSayur={setBuahSayur} />
        <FormPenyakitKeluarga
          setTotalPenyakit={setTotalPenyakit}
          setListPenyakit={setListPenyakit}
        />
        <FormHasilPemeriksaan
          setBerat={setBerat}
          setDiastole={setDiastole}
          setGula={setGula}
          setLingkar={setLingkar}
          setSystole={setSystole}
          setTinggi={setTinggi}
        />

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

export default ScreeningPTM;
