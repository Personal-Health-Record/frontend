"use client";

import Header from "@/app/components/Header";
import CardDetails from "../components/CardDetails";
import { dataDetailVaksin } from "../constants";
import CardVaksin from "../components/CardVaksin";
import BottomNavbarMedis from "@/app/components/BottomNavbarMedis";
import { useParams } from "next/navigation";
import { dummyVaksinasiData } from "../../constants";

const VaksinasiDetails = () => {
  const params = useParams();
  const vaksin = dummyVaksinasiData.find((data) => data.id === params.id as string)!

  return (
    <div className="flex flex-col">
      <Header title="Vaksinasi" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold">Informasi Umum</h3>

        <div>
          {dataDetailVaksin.map((detail) => (
            <CardDetails data={detail.data} title={detail.title} />
          ))}

          <CardVaksin />
        </div>
      </div>

      <BottomNavbarMedis />
    </div>
  );
};

export default VaksinasiDetails;
