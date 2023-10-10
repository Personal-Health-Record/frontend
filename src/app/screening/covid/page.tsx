import Header from '@/app/components/Header';
import FormKontak from '../components/FormKontak';
import FormLuarNegri from '../components/FormLuarNegri';
import FormLokal from '../components/FormLokal';
import FormGejala from '../components/FormGejala';

const ScreeningCovid = () => {
  return (
    <div className="flex flex-col">
      <Header title="Skrining COVID-19" />

      <div className="flex py-5 px-4 flex-col gap-5">
        <h3 className="font-semibold text-mainGrey text-sm mb-1">
          Riwayat Kontak dan Perjalanan
        </h3>

        <FormKontak />
        <FormLuarNegri />
        <FormLokal />

        <h3 className="font-semibold text-mainGrey text-sm mt-5">
          Gejala yang dirasakan
        </h3>

        <FormGejala />

        <button className="bg-mainBlue rounded-3xl text-white font-semibold py-3">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ScreeningCovid;
