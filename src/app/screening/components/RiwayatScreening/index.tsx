import RiwayatScreeningCard from "../RiwayatScreeningCard";

const RiwayatScreening = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-mainGrey">
        Riwayat Skrining Kesehatan
      </h3>

      <div className="flex flex-col gap-4">
        <RiwayatScreeningCard />
        <RiwayatScreeningCard />
        <RiwayatScreeningCard />
        <RiwayatScreeningCard />
        <RiwayatScreeningCard />
      </div>
    </div>
  );
};

export default RiwayatScreening;
