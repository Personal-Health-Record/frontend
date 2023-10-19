import TextInputPTM from '../TextInput';

const FormHasilPemeriksaan = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-mainGrey text-sm mb-1">
        Hasil Pemeriksaan
      </h3>

      <TextInputPTM
        label="Tekanan Darah Systole (mmHg)"
        onChange={() => {}}
        type="number"
      />
      <TextInputPTM
        label="Tekanan Darah Diastole (mmHg)"
        onChange={() => {}}
        type="number"
      />
      <TextInputPTM
        label="Gula Darah (mg/dL)"
        onChange={() => {}}
        type="number"
      />
      <TextInputPTM
        label="Tinggi Badan (cm)"
        onChange={() => {}}
        type="number"
      />
      <TextInputPTM
        label="Lingkar Perut (cm)"
        onChange={() => {}}
        type="number"
      />
    </div>
  );
};

export default FormHasilPemeriksaan;
