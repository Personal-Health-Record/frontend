import PengingatCard from "../PengingatCard";

const ListPengingat = () => {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-mainGrey pl-2 mb-3">Pengingat Obat</h3>

      <div className="flex flex-col gap-5">
        <PengingatCard />
        <PengingatCard />
        <PengingatCard />
        <PengingatCard />
      </div>
    </div>
  );
};

export default ListPengingat;
