"use client"

import { getLoggedInUser, getUserData } from "@/app/common/userDataHelper";
import PengingatCard from "../PengingatCard";
import { getObatData } from "@/app/common/obatDataHelper";

const ListPengingat = () => {

  const { loggedInUser } = getLoggedInUser();
  const { obatData } = getObatData();

  if (!loggedInUser || !obatData) {
    return <div> Loading... </div>
  }

  const listObat = obatData.filter((obat) => obat.userId === loggedInUser.id);

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-mainGrey pl-2 mb-3">Pengingat Obat</h3>

      <div className="flex flex-col gap-5">
        {
          listObat.map((obat) => {
            return obat.listPengingat.map((pengingat) => {
              return (<PengingatCard
                key={obat.id}
                obat={obat}
                pengingat={pengingat}
              />)
            })
          })}
      </div>
    </div>
  );
};

export default ListPengingat;
