import { getSkriningKesehatanList } from '@/app/common/skriningKesehatanHelper';
import RiwayatScreeningCard from '../RiwayatScreeningCard';
import { Skrining } from '../../constants';

type Props = {
  listSkrining: Skrining[] | undefined;
};

const RiwayatScreening = ({ listSkrining }: Props) => {
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
            id={skrining.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RiwayatScreening;
