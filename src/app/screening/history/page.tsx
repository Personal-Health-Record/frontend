import Header from '@/app/components/Header';
import CardHistory from '../components/HistoryCard';
import { dataHistory } from '../constants';
import BottomNavbarDownloadShare from '@/app/components/BottomNavbarDownloadShare';

const ScreeningHistory = () => {
  return (
    <div className="flex flex-col">
      <Header title="Riwayat Skrining Kesehatan" />

      <div className="flex flex-col py-5 px-4">
        <h3 className="font-semibold text-mainGrey ">Informasi Umum</h3>

        {dataHistory.map((history, index) => (
          <CardHistory key={index} data={history.data} title={history.title} />
        ))}
      </div>

      <BottomNavbarDownloadShare />
    </div>
  );
};

export default ScreeningHistory;
