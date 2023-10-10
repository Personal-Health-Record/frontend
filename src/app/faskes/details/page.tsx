import Header from '@/app/components/Header';
import CardFaskesDetail from '../components/CardFaskesDetail';
import { faskesDetailData, poliklinik } from '../constants';
import Chip from '../components/Chip';

const FaskesDetail = () => {
  return (
    <div className="flex flex-col">
      <Header title="Profil Fasilitas Kesehatan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold">Informasi Umum</h3>

        <div className="flex flex-col">
          {faskesDetailData.map((detail, index) => (
            <CardFaskesDetail
              key={index}
              data={detail.value}
              title={detail.title}
            />
          ))}
        </div>

        <h3 className="font-semibold">Layanan Poliklinik</h3>

        <div className="flex flex-wrap gap-3">
          {poliklinik.map((poli, idx) => (
            <Chip text={poli} key={`poli-${idx}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaskesDetail;
