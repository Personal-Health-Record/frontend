import Header from "@/app/components/Header";
import FormTambahPengingat from "../components/FormTambahPengingat";

const TambahPengingat = () => {
  return (
    <div className="flex flex-col">
      <Header title="Pengingat Obat" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold text-mainGrey pl-2 mb-3">
          Informasi Obat
        </h3>

        <FormTambahPengingat />
      </div>
    </div>
  );
};

export default TambahPengingat;
