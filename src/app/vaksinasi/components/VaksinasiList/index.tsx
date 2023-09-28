import { User } from "@/app/common/constants";
import { TIPE_VAKSINASI_DEWASA, dummyVaksinasiData } from "../../constants";
import VaksinasiCard from "../VaksinasiCard";

type VaksinasiProps = {
  user: User;
}

const VaksinasiList = ({ user }: VaksinasiProps) => {
  const userVaksinasi = dummyVaksinasiData.find((item) => item.userId === user.id);
  return (
    <div className="flex flex-col gap-4 border-b-2 pb-4">
      <h3 className="font-semibold">Jenis Vaksinasi</h3>

      <div className="flex flex-wrap justify-between">
        {
          Object.values(TIPE_VAKSINASI_DEWASA).map((vaksinasi, index) => (
            <VaksinasiCard
              isComplete={userVaksinasi!.vaksinasi.includes(vaksinasi)}
              title={vaksinasi}
              key={index}
            />
          ))
        }
      </div>
    </div>
  );
};

export default VaksinasiList;
