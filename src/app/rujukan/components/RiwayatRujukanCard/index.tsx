"use client";

import { useRouter } from "next/navigation";

const RiwayatRujukanCard = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/rujukan/details");
  };

  return (
    <div className="flex flex-col gap-2 p-4 border-b-2" onClick={handleOnClick}>
      <div className="flex justify-between items-center">
        <p className="text-sm">29 April 2023</p>
        <p className="text-sm bg-superLightGrey px-4 py-1 rounded-2xl text-mainGrey">
          Rujukan
        </p>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-lightGrey">Faskes rujukan</p>
          <p className="text-sm text-lightGrey">Faskes perujuk</p>
          <p className="text-sm text-lightGrey">Diagnosis</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-lightGrey">: Rumah Sakit Medika</p>
          <p className="text-sm text-lightGrey">: Klinik Makmur Jaya</p>
          <p className="text-sm text-lightGrey">: E11.9 - Diabetes mellitus</p>
        </div>
      </div>
    </div>
  );
};

export default RiwayatRujukanCard;
