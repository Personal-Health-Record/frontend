'use client';

import Header from '@/app/components/Header';
import SearchBar from '../components/SearchBar';
import Title from '@/app/components/Title';
import CardObat from '../components/CardObat';
import CardRiwayat from '../components/CardRiwayat';
import { getObatData, updateObatData } from '@/app/common/obatDataHelper';
import { getLoggedInUser } from '@/app/common/userDataHelper';
import { useState } from 'react';
import { Obat } from '../constants';

const RiwayatObat = () => {
  const { loggedInUser } = getLoggedInUser();
  const { obatData } = getObatData();
  const [obatList, setObatList] = useState<Obat[]>();

  if (!loggedInUser || !obatData) {
    return <div> Loading... </div>;
  }
  const getFilteredObatData = (listObat: Obat[], keyword: string) => {
    return listObat.filter((obat) => {
      const isLoggedInUserObat = obat.userId === loggedInUser.id;
      const today = new Date();
      const dateTo = new Date(obat.dateTo);
      const isObatNameMatch = obat.name
        .toLowerCase()
        .includes(keyword.toLowerCase());
      return isLoggedInUserObat && today >= dateTo && isObatNameMatch;
    });
  };

  if (!obatList) {
    setObatList(getFilteredObatData(obatData, ''));
  }

  const onSearch = (keyword: string) => {
    if (keyword.length === 0) {
      setObatList(getFilteredObatData(obatData, ''));
    }
    setObatList(getFilteredObatData(obatData, keyword));
  };

  return (
    <div className="flex flex-col">
      <Header title="Riwayat Obat" />

      <div className="flex flex-col w-full px-4 py-4 gap-5">
        <SearchBar onSearch={onSearch} />

        <Title text="Tenaga Kesehatan Anda" />
        <CardRiwayat />

        {obatList &&
          obatList.map((obat, index) => {
            return <CardObat obat={obat} key={index} />;
          })}
      </div>
    </div>
  );
};

export default RiwayatObat;
