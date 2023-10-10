import FormTextField from '../FormTextField';

const FormIndeksMassa = () => {
  return (
    <div className="flex flex-col gap-6">
      <FormTextField title="Jenis Kelamin" />
      <FormTextField title="Usia" />

      <div className="flex gap-4">
        <FormTextField title="Berat Badan" />
        <FormTextField title="Tinggi Badan (cm)" />
      </div>

      <button className="bg-mainBlue rounded-3xl text-white font-semibold py-3 mb-6">
        Hitung
      </button>
    </div>
  );
};

export default FormIndeksMassa;
