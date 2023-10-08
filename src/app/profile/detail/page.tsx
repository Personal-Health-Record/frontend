"use client";

import Header from "@/app/components/Header";
import { formatDate } from "@/app/common/dateHelper";
import BottomNavbar from "@/app/components/BottomNavbar";
import DetailInfoCard from "../components/DetailInfoCard";
import { getLoggedInUser } from "@/app/common/dataHelper";

const ProfileDetail = () => {
  const { loggedInUser: user } = getLoggedInUser();

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
