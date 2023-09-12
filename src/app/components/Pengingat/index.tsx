"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Pengingat = () => {
  const router = useRouter();

  const handleRedirectObat = () => {
    router.push("/obat");
  };

  return (
    <div className="flex flex-col px-4 py-4 gap-2">
      <h3>Pengingat</h3>

      <div
        className="flex shadow-md rounded-md px-3 py-4 gap-3 items-center justify-between"
        onClick={handleRedirectObat}
      >
        <div>
          <Image
            src="/images/pengingat-icon.png"
            alt=""
            width={45}
            height={45}
          />
        </div>

        <div className="flex flex-col justify-center gap-2">
          <p className="text-sm">Paracetamol</p>
          <p className="text-xs text-mainGrey whitespace-nowrap">
            1 pil setelah makan, ditelan
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <p className="text-xl font-bold text-mainGrey">16:00</p>
          <button className="text-xs bg-mainBlue px-4 py-2 rounded-3xl text-white font-bold">
            Konsumsi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pengingat;
