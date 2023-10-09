import Image from "next/image";
import { Obat, Pengingat } from "../../constants";

type PengingatCardProps = {
  obat: Obat,
  pengingat: Pengingat
}

const PengingatCard = ({ obat, pengingat: pengigat }: PengingatCardProps) => {
  const renderConsumeButton = () => {
    if (pengigat.consumptionStatus === "Sudah dikonsumsi") {
      return (
        <div className="flex bg-lightGrey items-center gap-2 pl-3 pr-6 py-1 rounded-2xl">
          <Image
            src="/images/pengingat/check_all.png"
            alt=""
            width={20}
            height={20}
          />
          <p className="text-xs text-white">Dikonsumsi</p>
        </div>
      )
    }

    return (
      <div className="flex bg-mainBlue items-center gap-2 px-3 py-1 rounded-2xl">
        <p className="text-xs text-white">Konsumsi</p>
      </div>
    )
  }

  return (
    <div className="flex shadow-md py-3 px-2 rounded-xl gap-3 justify-between items-center">
      <div>
        <Image src="/images/pengingat/obat.png" alt="" width={50} height={50} />
      </div>

      <div className="flex flex-col justify-between">
        <p className="text-xs">{obat.name}</p>
        <p className="text-xs text-lightGrey">{obat.consumptionPerDay} pil per hari, {obat.consumptionTime}, {obat.consumptionMethod}</p>
      </div>

      <div className="flex flex-col items-end gap-1 mr-3">
        <p>{pengigat.time}</p>
        {renderConsumeButton()}
      </div>
    </div>
  );
};

export default PengingatCard;
