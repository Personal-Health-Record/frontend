'use client';

import Header from '@/app/components/Header';
import Timeline from '../components/Timeline';
import Pagination from '../components/Pagination';
import BottomNavbarDownloadShare from '@/app/components/BottomNavbarDownloadShare';
import { useState } from 'react';
import { dummyResumeData } from '../constants';

const PAGE_SIZE = 5;

const RiwayatResume = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const riwayatData = () => {
    return dummyResumeData.slice(
      (pageNumber - 1) * PAGE_SIZE,
      pageNumber * PAGE_SIZE,
    );
  };

  const totalData = dummyResumeData.length;

  return (
    <div className="flex flex-col">
      <Header title="Riwayat Medis" />

      <div className="flex flex-col w-full px-4 py-4 gap-5 mb-4 pb-5">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-mainGrey">Riwayat Medis Anda</h3>
          <p className="text-xs text-lightGrey">
            Riwayat medis Anda berdasarkan hasil kunjungan atau pemeriksaan dan
            kode diagnosis ICD-10{' '}
          </p>
        </div>

        <Timeline
          dataRiwayat={riwayatData()}
          pageNumber={pageNumber}
          pageSize={PAGE_SIZE}
        />
      </div>
      <div className="border-b-2 mt-6 mb-4" />

      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        pageSize={PAGE_SIZE}
        totalData={totalData}
      />
      <BottomNavbarDownloadShare
        title="Riwayat Medis"
        body={'Silahkan check riwayat medis'}
        link={'/resume/riwayat/'}
      />
    </div>
  );
};

export default RiwayatResume;
