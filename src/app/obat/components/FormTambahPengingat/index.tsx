"use client";

import { useRouter } from "next/navigation";
import FormTextField from "../FormTextField";
import Notifikasi from "../Notifikasi";

const FormTambahPengingat = () => {
  const router = useRouter();

  const handleOnSubmit = () => {
    router.back();
  };

  return (
    <div className="flex flex-col gap-8">
      <FormTextField title="Nama Obat" />

      <div className="flex gap-5">
        <FormTextField title="Dosis" />
        <FormTextField title="Jenis" />
      </div>

      <FormTextField title="Jumlah Konsumsi per Hari" />
      <FormTextField title="Waktu Konsumsi" />
      <FormTextField title="Cara Konsumsi Obat" />
      <FormTextField title="Wajib dihabiskan" />

      <div className="flex gap-5">
        <FormTextField title="Tanggal Mulai" />
        <FormTextField title="Tanggal Selesai" />
      </div>

      <Notifikasi />

      <button
        className="bg-mainBlue rounded-3xl text-white font-semibold py-3 mb-6"
        onClick={handleOnSubmit}
      >
        Simpan
      </button>
    </div>
  );
};

export default FormTambahPengingat;
