"use client";

import Header from "@/app/components/Header";
import { formatDate } from "@/app/common/dateHelper";
import DetailInfoCard from "../components/DetailInfoCard";
import { getLoggedInUser } from "@/app/common/dataHelper";
import BottomNavbarEditProfile from "../components/BottomNavbarEditProfile";
import FamilyCard from "../components/FamilyCard";
import BottomNavbarFamily from "../components/BottomNavbarFamily";

const FamilyPage = () => {
  const { loggedInUser: user, userData } = getLoggedInUser();

  if (!user || !userData) {
    return <div> Loading... </div>
  }
  
  const userRelations = userData.filter((item) => item.parentId === user.id);

  return (
    <div className="flex flex-col">
      <Header title="Anggota Keluarga" />
      <div className="flex flex-col w-full px-4 py-4 mb-16">
        {
          userRelations.map((item, index) => (
            <FamilyCard
              key={index}
              user={item}
            />
          ))
        }
      </div>

      <BottomNavbarFamily />
    </div>
  );
};

export default FamilyPage;
