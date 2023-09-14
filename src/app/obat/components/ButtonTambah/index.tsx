"use client";

import { useRouter } from "next/navigation";

const ButtonTambah = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/obat/tambah");
  };

  return (
    <button
      className="border py-3 rounded-3xl text-mainBlue font-semibold border-mainBlue mt-5"
      onClick={handleOnClick}
    >
      + Tambahkan Pengingat
    </button>
  );
};

export default ButtonTambah;
