import Header from "../components/Header";
import RiwayatScreening from "./components/RiwayatScreening";
import ScreeningKesehatanMandiri from "./components/ScreeningKesehatanMandiri";

const ScreeningPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Skrining Kesehatan" />

      <div className="flex flex-col py-3 px-4 gap-6 pt-6">
        <ScreeningKesehatanMandiri />
        <RiwayatScreening />
      </div>
    </div>
  );
};

export default ScreeningPage;
