import Header from "@/app/components/Header";
import CardPengguna from "../components/CardPengguna";
import VaksinasiList from "../components/VaksinasiList";
import Keterangan from "../components/Keterangan";

const VaksinasiPribadi = () => {
  return (
    <div className="flex flex-col">
      <Header title="Vaksinasi" />

      <div className="flex flex-col w-full px-4 py-4 gap-6">
        <CardPengguna
          title="Pilih Pengguna"
          value="Pribadi, 30 Tahun, laki laki"
        />

        <VaksinasiList />
        <Keterangan />
      </div>
    </div>
  );
};

export default VaksinasiPribadi;
