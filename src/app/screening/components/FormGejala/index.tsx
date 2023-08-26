const FormGejala = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-lightGrey">
        Apakah Anda merasakan gejala-gejala berikut dalam 14 hari terakhir?
      </p>

      <div className="flex gap-20">
        <div className="flex-col">
          <label className="flex items-center mb-2 p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption"
              value="A"
              className="mr-2"
            />
            <p className="text-sm">Demam</p>
          </label>
          <label className="flex items-center mb-2 p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption"
              value="B"
              className="mr-2"
            />
            <p className="text-sm">Batuk/Pilek</p>
          </label>
          <label className="flex items-center mb-2 p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption"
              value="C"
              className="mr-2"
            />
            <p className="text-sm">Sesak nafas</p>
          </label>
          <label className="flex items-center p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption"
              value="D"
              className="mr-2"
            />
            <p className="text-sm">Sakit tenggorokan</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormGejala;
