import Header from '@/app/components/Header';

const ScreeningMentalResult = () => {
  return (
    <div className="flex flex-col">
      <Header title="Skrining Mental " />

      <div className="flex py-5 px-4 flex-col gap-10">
        <p className="text-center shadow-md py-5 px-3 rounded-xl">
          Anda <span className="font-semibold text-mainBlue">memiliki</span>{' '}
          gejala depresi ringan
        </p>

        <div className="flex flex-col gap-5">
          <button className="bg-mainBlue rounded-3xl text-white font-semibold py-3">
            Kembali ke Skrining Kesehatan
          </button>
          <button className="text-mainGrey">Kembali ke Beranda</button>
        </div>
      </div>
    </div>
  );
};

export default ScreeningMentalResult;
