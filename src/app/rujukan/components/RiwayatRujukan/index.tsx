import RiwayatRujukanCard from "../RiwayatRujukanCard";

const RiwayatRujukan = () => {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <h3 className="font-semibold text-mainGrey pl-2">Riwayat Rujukan</h3>
      <RiwayatRujukanCard />
      <RiwayatRujukanCard />
      <RiwayatRujukanCard />
      <RiwayatRujukanCard />
      <RiwayatRujukanCard />
    </div>
  );
};

export default RiwayatRujukan;
