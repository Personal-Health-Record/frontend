import { dummyRujukanData } from "../../constants";
import RiwayatRujukanCard from "../RiwayatRujukanCard";

const RiwayatRujukan = () => {
  const rujukanData = dummyRujukanData.reverse();

  return (
    <div className="flex flex-col gap-2 mt-3">
      <h3 className="font-semibold text-mainGrey pl-2">Riwayat Rujukan</h3>
      {
        rujukanData.map((dat, index) => {
          if (index === 0) {
            return;
          }

          return (
            <RiwayatRujukanCard rujukanData={dat} key={index} />
        )})
      }
    </div>
  );
};

export default RiwayatRujukan;
