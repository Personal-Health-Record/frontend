"use client"

import ProfileHeader from "./components/ProfileHeader";
import ProfileOptionCard from "./components/ProfileOptionCard";
import BottomNavbar from "../components/BottomNavbar";
import { getLoggedInUser } from "../common/dataHelper";

const ProfilePage = () => {
  const { loggedInUser: user } = getLoggedInUser();

  if (!user) {
    return <div> Loading... </div>
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col py-3 px-4 gap-6 pt-6">
        <ProfileHeader user={user} />
        <div>
          <hr />
          <ProfileOptionCard title="Profil Saya" path="/profile/detail" />
          <ProfileOptionCard title="Anggota Keluarga" path="/" />
          <ProfileOptionCard title="Asuransi Kesehatan" path="/" />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default ProfilePage;
