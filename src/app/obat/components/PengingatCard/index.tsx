import Image from 'next/image';
import { Obat, Pengingat } from '../../constants';
import { getUpdatedPengingatDataList } from '@/app/common/obatDataHelper';

type PengingatCardProps = {
  obat: Obat;
  handleChangeObatData: (obat: Obat) => void;
  pengingat: Pengingat;
};

const PengingatCard = ({
  obat,
  handleChangeObatData,
  pengingat: pengigat,
}: PengingatCardProps) => {
  const handleConsume = () => {
    pengigat.consumptionStatus = 'Sudah dikonsumsi';

    const newPengingatList = getUpdatedPengingatDataList(
      pengigat,
      obat.listPengingat,
    );
    obat.listPengingat = newPengingatList;

    handleChangeObatData(obat);
  };

  const renderConsumeButton = () => {
    if (pengigat.consumptionStatus === 'Sudah dikonsumsi') {
      return (
        <div
          className="flex bg-lightGrey items-center gap-1 pl-1 pr-2 py-1 rounded-2xl"
          style={{
            width: 100,
          }}
        >
          <Image
            src="/images/pengingat/check_all.png"
            alt=""
            width={20}
            height={20}
          />
          <p className="text-xs text-white pr-2">Dikonsumsi</p>
        </div>
      );
    }

    return (
      <div
        className="flex bg-mainBlue items-center gap-2 px-2 py-1 rounded-2xl"
        onClick={handleConsume}
      >
        <p className="text-xs text-white">Konsumsi</p>
      </div>
    );
  };

  return (
    <div className="flex shadow-md py-3 px-2 rounded-xl gap-3 justify-between items-center">
      <div className="flex justify-start items-center">
        <Image src="/images/pengingat/obat.png" alt="" width={50} height={50} />
        <div className="flex flex-col justify-between ml-3">
          <p className="text-xs">{obat.name}</p>
          <p className="text-xs text-lightGrey">
            {obat.consumptionPerDay} pil per hari, {obat.consumptionTime},{' '}
            {obat.consumptionMethod}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 mr-3">
        <p>{pengigat.time}</p>
        {renderConsumeButton()}
      </div>
    </div>
  );
};

export default PengingatCard;
