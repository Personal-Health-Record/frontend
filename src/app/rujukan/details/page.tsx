import Header from "@/app/components/Header";
import CardRujukanDetail from "../components/CardRujukanDetail";
import { detailRujukan } from "../constants";
import BottomNavbarMedis from "@/app/components/BottomNavbarMedis";

const RujukanDetails = () => {
  return (
    <div className="flex flex-col">
      <Header title="Rujukan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold">Informasi Umum</h3>
        {detailRujukan?.map((rujukan, idx) => (
          <CardRujukanDetail
            data={rujukan.value}
            title={rujukan.title}
            key={`rujukan-${rujukan.value}-${idx}`}
          />
        ))}

        <BottomNavbarMedis />
      </div>
    </div>
  );
};

export default RujukanDetails;
