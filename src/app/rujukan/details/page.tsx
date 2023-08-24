import Header from "@/app/components/Header";
import CardRujukanDetail from "../components/CardRujukanDetail";
import { detailRujukan } from "../constants";

const RujukanDetails = () => {
  return (
    <div className="flex flex-col">
      <Header title="Rujukan" />

      <div className="flex flex-col w-screen px-4 py-4 gap-3">
        <h3 className="font-semibold">Informasi Umum</h3>
        {detailRujukan?.map((rujukan, idx) => (
          <CardRujukanDetail
            data={rujukan.value}
            title={rujukan.title}
            key={`rujukan-${rujukan.value}-${idx}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RujukanDetails;
