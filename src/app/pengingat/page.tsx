import Header from "../components/Header";
import ButtonTambah from "./components/ButtonTambah";
import ChipDate from "./components/ChipDate";
import ListPengingat from "./components/ListPengingat";

const PengingatObatPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Pengingat Obat" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <ChipDate date="Senin, 11 April 2023" />
        <ListPengingat />
        <ButtonTambah />
      </div>
    </div>
  );
};

export default PengingatObatPage;
