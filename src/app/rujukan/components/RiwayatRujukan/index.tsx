import { dummyRujukanData } from "../../constants";
import RiwayatRujukanCard from "../RiwayatRujukanCard";

const RiwayatRujukan = () => {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <h3 className="font-semibold text-mainGrey pl-2">Riwayat Rujukan</h3>
      {
        dummyRujukanData.map((rujukanData, index) => {
          if (index === dummyRujukanData.length - 1) {
            return;
          }

          return (
            <RiwayatRujukanCard rujukanData={rujukanData} key={index} />
        )})
      }
    </div>
  );
};

export default RiwayatRujukan;
