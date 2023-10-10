"use client"

import { getLoggedInUser, getUserData } from "@/app/common/userDataHelper";
import PengingatCard from "../PengingatCard";
import { getObatData, updateObatData } from "@/app/common/obatDataHelper";
import { useState } from "react";
import { Obat } from "../../constants";

const ListPengingat = () => {

  const { loggedInUser } = getLoggedInUser();
  const { obatData } = getObatData();
  const [obatList, setObatList] = useState<Obat[]>()

  if (!loggedInUser || !obatData) {
    return <div> Loading... </div>
  }
  if (!obatList) {
    setObatList(obatData.filter((obat) => obat.userId === loggedInUser.id))
  }

  const handleChangeObatData = (obat: Obat) => {
    const updatedObatList = updateObatData(obat, obatData)
    setObatList(updatedObatList)
  }

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-mainGrey pl-2 mb-3">Pengingat Obat</h3>

      <div className="flex flex-col gap-5">
        {
          obatList && obatList.map((obat) => {
            return obat.listPengingat.map((pengingat, index) => {
              return (<PengingatCard
                key={obat.id + "-" + index}
                obat={obat}
                pengingat={pengingat}
                handleChangeObatData={handleChangeObatData}
              />)
            })
          })}
      </div>
    </div>
  );
};

export default ListPengingat;
