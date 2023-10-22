import Image from 'next/image';

const CardHeightWeight = () => {
  return (
    <div className="flex gap-2 justify-between">
      <div className="flex shadow-md px-5 py-3 w-fit rounded-xl">
        <div className="flex items-center gap-2">
          <Image src="/images/weight.png" alt="weight" width={40} height={40} />
          <div className="flex flex-col">
            <p className="text-xs text-mainGrey ">Berat Badan</p>
            <p className="text-xs text-lightGrey">80 kg</p>
          </div>
        </div>
      </div>

      <div className="flex shadow-md px-4 py-3 w-fit rounded-xl">
        <div className="flex items-center gap-2">
          <Image src="/images/height.png" alt="weight" width={40} height={40} />
          <div className="flex flex-col">
            <p className="text-xs text-mainGrey ">Tinggi Badan</p>
            <p className="text-xs text-lightGrey">80 kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeightWeight;
