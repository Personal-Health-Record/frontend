import { dummyRujukanData } from "../../constants";
import RiwayatRujukanCard from "../RiwayatRujukanCard";

const RiwayatRujukan = () => {
  const renderRiwayatRujukanCard = () => {
    const res: any[] = [];

    let i = 0;
    while (i < dummyRujukanData.length - 1) {
      res.push(<RiwayatRujukanCard rujukanData={dummyRujukanData[i]} />)
    }

    return res;
  }

  return (
    <div className="flex flex-col gap-2 mt-3">
      <h3 className="font-semibold text-mainGrey pl-2">Riwayat Rujukan</h3>
      {
        ...renderRiwayatRujukanCard()
      }
    </div>
  );
};

export default RiwayatRujukan;
