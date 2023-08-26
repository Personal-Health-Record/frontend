const RiwayatScreeningCard = () => {
  return (
    <div className="flex justify-between px-2 py-3 border-b-2">
      <div className="flex flex-col gap-1">
        <p className="text-xs text-mainGrey">10 Februari 2023</p>
        <p className="text-sm text-lightGrey">Vaksin COVID-19 Kedua</p>
      </div>

      <p className="text-xs text-mainGrey">Klinik Medi-Go</p>
    </div>
  );
};

export default RiwayatScreeningCard;