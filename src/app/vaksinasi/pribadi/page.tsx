"use client"

import Header from "@/app/components/Header";
import CardPengguna from "../components/CardPengguna";
import VaksinasiList from "../components/VaksinasiList";
import Keterangan from "../components/Keterangan";
import { dummyUserData } from "@/app/common/constants";
import { useState } from "react";

const VaksinasiPribadi = () => {
  const [user, setUser] = useState(dummyUserData[0]);

  return (
    <div className="flex flex-col">
      <Header title="Vaksinasi" />

      <div className="flex flex-col w-full px-4 py-4 gap-6">
        <CardPengguna
          user={user}
          setUser={setUser}
        />

        <VaksinasiList />
        <Keterangan />
      </div>
    </div>
  );
};

export default VaksinasiPribadi;
