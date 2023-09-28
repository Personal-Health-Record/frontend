"use client"

import { User, dummyUserData } from "@/app/common/constants";
import Image from "next/image";
import { useState } from "react";

interface Props {
  title: string;
  user: User;
  setUser?: (user: User) => void;
}

const CardPengguna = ({ title, user }: Props) => {
  const [showSelectUser, setShowSelectUser] = useState(false);
  const getValue = (renderUser?: User) => {
    if (!renderUser) {
      renderUser = user;
    }

    if (renderUser.relation) {
      return `${renderUser.relation}, ${renderUser.age} tahun, ${renderUser.gender}`;
    }

    return `Pribadi, ${renderUser.age} tahun, ${renderUser.gender}`;
  }

  const renderRelation = () => {
    const userRelations = dummyUserData.filter((item) => item.parentId === user.id);
    return userRelations.map((item, index) => (
      <div className="group/item flex p-2 items-center justify-between hover:bg-slate-100"
        key={index}>
        <div className="flex flex-col gap-1" >
          <p className="text-sm">{item.name}</p>
          <p className="text-sm text-mainGrey">{getValue(item)}</p>
        </div>

        <span className="invisible group-hover/item:visible">
          <Image src="/images/arrow-right.png" alt="" width={30} height={30} />
        </span>

      </div>
    ))
  }

  return (
    <div>
      <div className="flex border-b-2 py-2 items-center justify-between" onClick={() => {
        setShowSelectUser(!showSelectUser)
      }}>
        <div className="flex flex-col gap-1">
          <p className="text-sm">{title}</p>
          <p className="text-sm text-mainGrey">{getValue()}</p>
        </div>

        <Image src="/images/arrow-right.png" alt="" width={30} height={30} />
      </div>
      <div style={{
        position: 'absolute',
        top: 135,
        backgroundColor: 'white',
        width: 468,
        zIndex: 1
      }}
        className="border-1 shadow-lg">
        {showSelectUser && renderRelation()}
      </div>
    </div >
  );
};

export default CardPengguna;
