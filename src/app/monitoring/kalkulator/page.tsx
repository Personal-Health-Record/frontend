import Header from "@/app/components/Header";
import { lsitKalkulator } from "../constants";
import KalkulatorKesehatanCard from "../components/KalkulatorKesehatanCard";

const KalulatorKesehatan = () => {
  return (
    <div className="flex flex-col">
      <Header title="Kalkulator Kesehatan" />

      <div className="flex flex-col w-full px-4 pt-4 gap-2">
        <h3 className="font-semibold text-mainGrey pl-2 mb-3">
          Kalkulator Kesehatan
        </h3>

        {lsitKalkulator.map((kalkulator) => (
          <KalkulatorKesehatanCard dataCard={kalkulator} />
        ))}
      </div>
    </div>
  );
};

export default KalulatorKesehatan;
