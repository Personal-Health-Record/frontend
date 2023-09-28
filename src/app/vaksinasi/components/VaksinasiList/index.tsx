import { vaksinasiData } from "../../constants";
import VaksinasiCard from "../VaksinasiCard";

const VaksinasiList = () => {
  return (
    <div className="flex flex-col gap-4 border-b-2 pb-4">
      <h3 className="font-semibold">Jenis Vaksinasi</h3>

      <div className="flex flex-wrap justify-between">
        {vaksinasiData?.map((vaksinasi, index) => (
          <VaksinasiCard
            isComplete={vaksinasi.isComplete}
            title={vaksinasi.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default VaksinasiList;
