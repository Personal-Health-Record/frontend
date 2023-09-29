"use client";

import Header from "@/app/components/Header";
import CardDetails from "../components/CardDetails";
import CardVaksin from "../components/CardVaksin";
import BottomNavbarMedis from "@/app/components/BottomNavbarMedis";
import { useParams } from "next/navigation";
import { dummyVaksinasiData } from "../../constants";
import { formatDate } from "@/app/common/dateHelper";
import { dummyUserData } from "@/app/common/constants";

const VaksinasiDetails = () => {
  const params = useParams();
  const vaksin = dummyVaksinasiData.find((data) => data.id === params.id as string)!
  const user = dummyUserData.find((data) => data.id === vaksin.userId)!

  return (
    <div className="flex flex-col">
      <Header title="Vaksinasi" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold">Informasi Umum</h3>

        <div>
          <CardDetails data={formatDate(vaksin.date)} title={"Tanggal Vaksinasi"} />
          <CardDetails data={user.name} title={"Nama Pasien"} />
          <CardDetails data={vaksin.location} title={"Lokasi Vaksinasi"} />
          <CardDetails data={vaksin.detailType ?? vaksin.type} title={"Jenis Vaksin"} />
          <CardVaksin />
        </div>
      </div>

      <BottomNavbarMedis />
    </div>
  );
};

export default VaksinasiDetails;
