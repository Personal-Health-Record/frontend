const FormLuarNegri = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-lightGrey">
        Apakah Anda memiliki riwayat perjalanan ke luar negeri dalam 14 hari
        terakhir?
      </p>

      <div className="flex gap-20">
        <label className="flex items-center">
          <input type="radio" name="radioOption" value="A" className="mr-4" />
          <p className="text-sm">Ya</p>
        </label>
        <label className="flex items-center">
          <input type="radio" name="radioOption" value="B" className="mr-4" />
          <p className="text-sm">Tidak</p>
        </label>
      </div>
    </div>
  );
};

export default FormLuarNegri;
