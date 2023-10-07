"use client";

import Header from "@/app/components/Header";
import { formatDate } from "@/app/common/dateHelper";
import BottomNavbar from "@/app/components/BottomNavbar";
import { User, dummyUserData } from "@/app/common/constants";
import DetailInfoCard from "../components/DetailInfoCard";
import { useEffect, useState } from "react";

const ProfileDetail = () => {
  const [user, setUser] = useState<User>()
  
  useEffect(() => {
    if (typeof window !== 'undefined' && user == null) {
      const userEmail = localStorage.getItem('authUserEmail');
      const userData = dummyUserData.find((user) => user.email === userEmail)
      setUser(userData)
    }
  }, [user])

  if (!user) {
    return <div> Loading... </div>
  }

  return (
    <div className="flex flex-col">
      <Header title="Profil Saya" />
      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-16">
        <h3 className="font-semibold">Informasi Umum</h3>
        <DetailInfoCard
          title={"Nama Lengkap"}
          data={user.name}
        />
        <DetailInfoCard
          title={"NIK"}
          data={user.nik!}
        />
        <DetailInfoCard
          title={"Tanggal Lahir"}
          data={formatDate(user.dateOfBirth!)}
        />
        <DetailInfoCard
          title={"Usia"}
          data={user.age.toString()}
        />
        <DetailInfoCard
          title={"Jenis Kelamin"}
          data={user.gender}
        />
        <DetailInfoCard
          title={"Golongan Darah"}
          data={user.bloodType!}
        />
        <DetailInfoCard
          title={"Status Pernikahan"}
          data={user.maritalStatus!}
        />
        <DetailInfoCard
          title={"Email"}
          data={user.email!}
        />
      </div>

      {/* TODO: update jadi edit profile */}
      <BottomNavbar />
    </div>
  );
};

export default ProfileDetail;
