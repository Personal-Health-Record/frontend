import Header from "../components/Header";
import JadwalRujukan from "./components/JadwalRujukan";
import RiwayatRujukan from "./components/RiwayatRujukan";
import SearchBar from "./components/SearchBar";

const RujukanPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Rujukan" />

      <div className="flex flex-col w-screen px-4 py-4 gap-3">
        <SearchBar />
        <JadwalRujukan />
        <RiwayatRujukan />
      </div>
    </div>
  );
};

export default RujukanPage;
