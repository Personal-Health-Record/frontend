"use client"

import { useEffect, useState } from "react";
import { User, dummyUserData } from "../common/constants";
import ProfileHeader from "./components/profileHeader";
import ProfileOptionCard from "./components/profileOptionCard";
import BottomNavbar from "../components/BottomNavbar";

const ProfilePage = () => {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    if (typeof window !== 'undefined' && user == null) {
      const userEmail = localStorage.getItem('authUserEmail');
      const userData = dummyUserData.find((user) => user.email === userEmail)
      setUser(userData)
    }
  }, [user])


  return (
    <div className="flex flex-col">
      {
        !user ? (
          <div> Loading... </div>
        ) : (
          <div className="flex flex-col py-3 px-4 gap-6 pt-6">
            <ProfileHeader user={user} />
            <div>
              <hr />
              <ProfileOptionCard title="Profil Saya" path="/" />
              <ProfileOptionCard title="Anggota Keluarga" path="/" />
              <ProfileOptionCard title="Asuransi Kesehatan" path="/" />
            </div>
          </div>
        )
      }
      <BottomNavbar />
    </div>
  );
};

export default ProfilePage;
