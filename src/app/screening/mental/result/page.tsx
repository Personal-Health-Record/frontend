'use client';

import Header from '@/app/components/Header';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const ScreeningMentalResult = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isMentalIssue = useMemo(() => {
    const totalScore = searchParams.get('score');
    if (totalScore) {
      return parseInt(totalScore) > 8 ? true : false;
    }

    return false;
  }, [searchParams]);

  return (
    <div className="flex flex-col">
      <Header title="Skrining Mental " />

      <div className="flex py-5 px-4 flex-col gap-10">
        <p className="text-center shadow-md py-5 px-3 rounded-xl">
          Anda{' '}
          <span className="font-semibold text-mainBlue">
            {isMentalIssue ? 'Memiliki' : 'Tidak memiliki'}
          </span>{' '}
          gejala depresi ringan
        </p>

        <div className="flex flex-col gap-5">
          <button
            className="bg-mainBlue rounded-3xl text-white font-semibold py-3"
            onClick={() => router.replace('/screening')}
          >
            Kembali ke Skrining Kesehatan
          </button>
          <button className="text-mainGrey" onClick={() => router.replace('/')}>
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreeningMentalResult;
