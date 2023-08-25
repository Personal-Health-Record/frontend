import Header from "@/app/components/Header";
import CardNextVaksinasi from "../components/CardNextVaksinasi";
import CardVaksinHistory from "../components/CardVaksinHistory";

const VaksinasiCovid = () => {
  return (
    <div className="flex flex-col">
      <Header title="COVID -19" />

      <div className="flex flex-col w-full px-4 py-4 gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-mainGrey">Vaksinasi Selanjutnya</h3>
          <CardNextVaksinasi />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-mainGrey">Riwayat Vaksinasi</h3>

          <div className="flex flex-col gap-3">
            <CardVaksinHistory />
            <CardVaksinHistory />
            <CardVaksinHistory />
            <CardVaksinHistory />
            <CardVaksinHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaksinasiCovid;
