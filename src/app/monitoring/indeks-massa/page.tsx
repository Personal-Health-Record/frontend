import Header from '@/app/components/Header';
import FormIndeksMassa from '../components/FormIndeksMassa';
import CardHasil from '../components/CardHasil';

const KalkulatorIndeksMassa = () => {
  return (
    <div className="flex flex-col">
      <Header title="Kalkulator Kesehatan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold text-mainGrey pl-2 mb-3">
          Indeks Massa Tubuh
        </h3>

        <FormIndeksMassa />

        <h3 className="font-semibold text-mainGrey pl-2 mb-3">Hasil</h3>

        <CardHasil />
      </div>
    </div>
  );
};

export default KalkulatorIndeksMassa;
