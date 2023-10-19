import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props {
  setTotalPenyakit: Dispatch<SetStateAction<number>>;
}

const FormPenyakitKeluarga = ({ setTotalPenyakit }: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedOptions.includes(value)) {
      // If the option is already selected, remove it
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      // If the option is not selected, add it
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  useEffect(() => {
    setTotalPenyakit(selectedOptions.length);
  }, [selectedOptions.length, setTotalPenyakit]);

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
              name="radioOption-ptm"
              value="A"
              className="mr-2"
              onChange={handleCheckboxClick}
            />
            <p className="text-sm">Penyakit Jantung</p>
          </label>
          <label className="flex items-center mb-2 p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption-ptm"
              value="B"
              className="mr-2"
              onChange={handleCheckboxClick}
            />
            <p className="text-sm">Kanker</p>
          </label>
          <label className="flex items-center mb-2 p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption-ptm"
              value="C"
              className="mr-2"
              onChange={handleCheckboxClick}
            />
            <p className="text-sm">Diabetes</p>
          </label>
          <label className="flex items-center p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption-ptm"
              value="D"
              className="mr-2"
              onChange={handleCheckboxClick}
            />
            <p className="text-sm">Penyakit paru kronik</p>
          </label>
          <label className="flex items-center p-2 rounded-md">
            <input
              type="checkbox"
              name="radioOption-ptm"
              value="E"
              className="mr-2"
              onChange={handleCheckboxClick}
            />
            <p className="text-sm">Stroke</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormPenyakitKeluarga;
