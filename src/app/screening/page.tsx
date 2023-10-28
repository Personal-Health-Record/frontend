'use client';

import { getSkriningKesehatanList } from '../common/skriningKesehatanHelper';
import Header from '../components/Header';
import withAuth from '../components/PrivateRoute';
import RiwayatScreening from './components/RiwayatScreening';
import ScreeningKesehatanMandiri from './components/ScreeningKesehatanMandiri';

const ScreeningPage = () => {
  const { listSkrining } = getSkriningKesehatanList();

  return (
    <div className="flex flex-col">
      <Header title="Skrining Kesehatan" />

      <div className="flex flex-col py-3 px-4 gap-6 pt-6">
        <ScreeningKesehatanMandiri />
        <RiwayatScreening listSkrining={listSkrining} />
      </div>
    </div>
  );
};

export default withAuth(ScreeningPage);
