import Image from "next/image";

const PengingatCard = () => {
  return (
    <div className="flex shadow-md py-3 px-2 rounded-xl gap-3 justify-between items-center">
      <div>
        <Image src="/images/pengingat/obat.png" alt="" width={50} height={50} />
      </div>

      <div className="flex flex-col justify-between">
        <p className="text-xs">Paracetamol</p>
        <p className="text-xs text-lightGrey">1 pil setelah makan, ditelan</p>
      </div>

      <div className="flex flex-col items-end gap-1 mr-3">
        <p>09:00</p>
        <div className="flex bg-lightGrey items-center gap-2 pl-3 pr-6 py-1 rounded-2xl">
          <Image
            src="/images/pengingat/check_all.png"
            alt=""
            width={20}
            height={20}
          />
          <p className="text-xs text-white">Dikonsumsi</p>
        </div>
      </div>
    </div>
  );
};

export default PengingatCard;