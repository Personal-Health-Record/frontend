import { getSkriningKesehatanList } from '@/app/common/skriningKesehatanHelper';
import RiwayatScreeningCard from '../RiwayatScreeningCard';

const RiwayatScreening = () => {
  const { listSkrining } = getSkriningKesehatanList();

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-mainGrey">
        Riwayat Skrining Kesehatan
      </h3>

      <div className="flex flex-col gap-4">
        {listSkrining?.map((skrining, idx) => (
          <RiwayatScreeningCard
            date={skrining.date}
            location={skrining.location}
            type={skrining.skriningType}
            key={`skrining-${idx}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RiwayatScreening;
