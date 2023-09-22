import Header from "@/app/components/Header";
import Timeline from "../components/Timeline";
import Pagination from "../components/Pagination";
import BottomNavbarMedis from "@/app/components/BottomNavbarMedis";

const RiwayatResume = () => {
  return (
    <div className="flex flex-col">
      <Header title="Riwayat Medis" />

      <div className="flex flex-col w-full px-4 py-4 gap-5 mb-16 pb-10">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-mainGrey">Riwayat Medis Anda</h3>
          <p className="text-xs text-lightGrey">
            Riwayat medis Anda berdasarkan hasil kunjungan atau pemeriksaan dan
            kode diagnosis ICD-10{" "}
          </p>
        </div>

        <Timeline />

        <div className="border-b-2 mt-6" />

        <Pagination />
        <BottomNavbarMedis />
      </div>
    </div>
  );
};

export default RiwayatResume;