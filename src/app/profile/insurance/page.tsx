"use client";

import Header from "@/app/components/Header";
import { formatDate } from "@/app/common/dateHelper";
import DetailInfoCard from "../components/DetailInfoCard";
import { getLoggedInUser } from "@/app/common/dataHelper";
import BottomNavbarEditProfile from "../components/BottomNavbarEditProfile";
import FamilyCard from "../components/FamilyCard";
import BottomNavbarOneButton from "../../components/BottomNavbarOneButton";
import InsuranceCard from "../components/InsuranceCard";

const FamilyPage = () => {
  const { loggedInUser: user, userData } = getLoggedInUser();

  if (!user || !userData) {
    return <div> Loading... </div>
  }

  const userRelations = userData.filter((item) => item.parentId === user.id);

  return (
    <div className="flex flex-col">
      <Header title="Asuransi Kesehatan" />
      <div className="flex flex-col w-full px-4 py-4 mb-16">
        <InsuranceCard
          title="BPJS Kesehatan"
          cardNumber="0000000000000000"
          isActive={true}
        />
        <InsuranceCard
          title="BPJS Kesehatan"
          cardNumber="0000000000000000"
          isActive={true}
        />
      </div>

      <BottomNavbarOneButton
        path="/profile/edit/insurance"
        iconPath="/images/plus.png"
        text="Tambahkan Asuransi Kesehatan" />
    </div>
  );
};

export default FamilyPage;
